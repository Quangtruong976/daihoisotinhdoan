"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

type Row = { hoTen: string; donVi: string; ngay?: string; phien?: string };

export default function DiemDanhNhap() {
  const [ds, setDs] = useState<Row[]>([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Row | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [phien, setPhien] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submittedList, setSubmittedList] = useState<Row[]>([]);
  const [showSuggest, setShowSuggest] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const DATE_OPTIONS = [
    {
      label: "19/12/2025",
      phien: "Phiên thứ 1",
      open: new Date("2025-12-18T23:00:00"),
      close: new Date("2025-12-19T18:00:00"),
    },
    {
      label: "20/12/2025",
      phien: "Phiên trọng thể",
      open: new Date("2025-12-19T19:00:00"),
      close: new Date("2025-12-20T12:00:00"),
    },
  ];

  const now = new Date();

  useEffect(() => {
    // Lấy danh sách tổng
    fetch("/api/danhsach")
      .then((r) => r.json())
      .then((d) => setDs(d.list || []));

    // Lấy danh sách đã điểm danh
    fetch("/api/diemdanh")
      .then((r) => r.json())
      .then((d) => setSubmittedList(d.diemDanhList || []));

    const current = DATE_OPTIONS.find(
      (d) => now >= d.open && now <= d.close
    );
    if (current) {
      setDate(current.label);
      setPhien(current.phien);
    }

    const handleClickOutside = (e: any) => {
      if (inputRef.current && !inputRef.current.contains(e.target))
        setShowSuggest(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () =>
      document.removeEventListener("click", handleClickOutside);
  }, []);

  const suggestions =
    query.trim().length > 0
      ? ds
          .filter((d) =>
            d.hoTen.toLowerCase().startsWith(query.trim().toLowerCase())
          )
          .slice(0, 5)
      : [];

  const choose = (row: Row) => {
    setSelected(row);
    setQuery(row.hoTen);
    setShowSuggest(false);
  };

  const isSubmitted = (hoTen: string, phienCheck: string) =>
    submittedList.some(
      (d) =>
        d.hoTen.toLowerCase() === hoTen.toLowerCase() &&
        d.phien === phienCheck
    );

  // ======================================
  // RESET LIST CÓ MẬT KHẨU 000000
  // ======================================
  const resetList = async () => {
    if (!phien) return alert("Chưa chọn phiên.");

    const pwd = prompt("Nhập mật khẩu để làm mới danh sách:");
    if (pwd !== "000000") {
      alert("Sai mật khẩu. Không thể làm mới danh sách.");
      return;
    }

    if (!confirm("Xóa danh sách điểm danh của phiên hiện tại?")) return;

    try {
      const res = await fetch("/api/diemdanh/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phien }),
      });

      const data = await res.json();
      setSubmittedList(data.diemDanhList || []);
      setSelected(null);
      setQuery("");
    } catch {
      alert("Lỗi mạng");
    }
  };

  // ======================================
  // SUBMIT – ĐÃ BỔ SUNG FETCH LẠI DANH SÁCH
  // ======================================
  const submit = async () => {
    if (!selected) return alert("Chọn tên trong danh sách.");
    if (!date || !phien) return alert("Phiên điểm danh chưa mở.");
    if (isSubmitted(selected.hoTen, phien))
      return alert("Đại biểu đã điểm danh cho phiên này.");

    setLoading(true);
    try {
      const res = await fetch("/api/diemdanh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hoTen: selected.hoTen,
          donVi: selected.donVi,
          ngay: date,
          phien,
        }),
      });

      const data = await res.json();
      if (!res.ok) alert(data.error || "Lỗi");
      else {
        alert("Điểm danh thành công");
        setSelected(null);
        setQuery("");

        // ⬇️ BỔ SUNG: LẤY LẠI DANH SÁCH ĐÃ ĐIỂM DANH
        const updated = await fetch("/api/diemdanh").then((r) => r.json());
        setSubmittedList(updated.diemDanhList || []);
      }
    } catch {
      alert("Lỗi mạng");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="main-container"
      style={{ padding: 12, maxWidth: 420, margin: "0 auto" }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#0650b7",
          fontSize: 20,
          fontWeight: "Bold",
        }}
      >
        Điểm danh đại biểu
      </h2>

      <div
        style={{
          background: "#fff",
          padding: 12,
          borderRadius: 8,
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        }}
      >
        <label style={{ display: "block", marginBottom: 6 }}>
          Chọn phiên:
          <select
            value={date || ""}
            onChange={(e) => {
              const v = e.target.value;
              setDate(v);
              const found = DATE_OPTIONS.find(
                (x) => x.label === v
              );
              setPhien(found ? found.phien : null);
            }}
            style={{ marginLeft: 6 }}
          >
            {DATE_OPTIONS.map((o) => {
              const isOpen = now >= o.open && now <= o.close;
              return (
                <option
                  key={o.label}
                  value={o.label}
                  disabled={!isOpen}
                  style={{ color: isOpen ? "#000" : "#999" }}
                >
                  {o.label} — {o.phien} {isOpen ? "" : "(chưa mở)"}
                </option>
              );
            })}
          </select>
        </label>

        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelected(null);
            setShowSuggest(true);
          }}
          placeholder="Nhập họ tên..."
          style={{
            width: "100%",
            padding: 8,
            marginTop: 8,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />

        {showSuggest && suggestions.length > 0 && !selected && (
          <ul
            style={{
              listStyle: "none",
              margin: 4,
              padding: 4,
              border: "1px solid #eee",
              maxHeight: 150,
              overflowY: "auto",
              borderRadius: 6,
            }}
          >
            {suggestions.map((s, i) => (
              <li
                key={i}
                style={{
                  padding: 6,
                  cursor: "pointer",
                  backgroundColor: isSubmitted(s.hoTen, phien!)
                    ? "#e6f7e6"
                    : "#fff",
                }}
                onClick={() => choose(s)}
              >
                {s.hoTen}
              </li>
            ))}
          </ul>
        )}

        <label style={{ display: "block", marginTop: 10 }}>
          Đơn vị:
          <input
            value={selected?.donVi || ""}
            disabled
            placeholder="Tự động điền khi chọn tên"
            style={{
              width: "100%",
              padding: 8,
              marginTop: 4,
              borderRadius: 6,
              background: "#f7f9ff",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
          <button
            className="btn"
            onClick={submit}
            disabled={loading || !phien}
          >
            {loading ? "Đang gửi..." : "Xác nhận điểm danh"}
          </button>
          <Link
            href="/diemdanh"
            className="btn"
            style={{ background: "rgb(9, 75, 169)" }}
          >
            Trang thống kê
          </Link>
        </div>

        <button
          onClick={resetList}
          style={{
            marginTop: 10,
            width: "100%",
            padding: 8,
            borderRadius: 6,
            background: "#d9534f",
            color: "#fff",
          }}
        >
          Làm mới danh sách phiên hiện tại
        </button>

        {submittedList.filter((d) => d.phien === phien).length > 0 && (
          <div style={{ marginTop: 12 }}>
            <h4>Đã điểm danh — {phien}</h4>
            <ul
              style={{
                maxHeight: 200,
                overflowY: "auto",
                padding: 4,
                border: "1px solid #eee",
                borderRadius: 6,
              }}
            >
              {submittedList
                .filter((d) => d.phien === phien)
                .map((d, i) => (
                  <li key={i} style={{ padding: 4, color: " #28a745",fontSize: 13  }}>
                    {d.hoTen} — {d.donVi}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
