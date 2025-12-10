"use client";

import { useEffect, useState, useRef } from "react";
import { redis } from "@/lib/redis";

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
    { label: "19/12/2025", phien: "Phiên thứ 1", open: new Date("2025-12-07T08:00:00"), close: new Date("2025-12-19T11:00:00") },
    { label: "20/12/2025", phien: "Phiên trọng thể", open: new Date("2025-12-20T06:00:00"), close: new Date("2025-12-20T23:59:00") },
  ];

  const now = new Date();

  // ---------- LOAD DANH SÁCH TỪ EXCEL VÀ REDIS ----------
  useEffect(() => {
    fetch("/api/danhsach")
      .then(r => r.json())
      .then(d => setDs(d.list || []));

    const loadSubmitted = async () => {
      try {
        const raw = await redis.get("diemdanh");
        const list: Row[] = raw && typeof raw === "string" ? JSON.parse(raw) : [];
        setSubmittedList(list);
      } catch (err) {
        console.error("Lỗi tải danh sách điểm danh:", err);
      }
    };
    loadSubmitted();

    const current = DATE_OPTIONS.find(d => now >= d.open && now <= d.close);
    if (current) {
      setDate(current.label);
      setPhien(current.phien);
    }

    const handleClickOutside = (e: any) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) setShowSuggest(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const suggestions =
    query.trim()
      ? ds.filter(d => d.hoTen.toLowerCase().startsWith(query.trim().toLowerCase())).slice(0, 5)
      : [];

  const choose = (row: Row) => {
    setSelected(row);
    setQuery(row.hoTen);
    setShowSuggest(false);
  };

  const isSubmitted = (hoTen: string, phienCheck: string) =>
    submittedList.some(d => d.hoTen.toLowerCase() === hoTen.toLowerCase() && d.phien === phienCheck);

  // ---------- RESET DANH SÁCH ----------
  const resetList = async () => {
    if (!phien) return alert("Chưa chọn phiên.");
    const pwd = prompt("Nhập mật khẩu để làm mới danh sách:");
    if (pwd !== "000000") return alert("Sai mật khẩu.");
    if (!confirm("Xóa danh sách điểm danh của phiên hiện tại?")) return;

    try {
      const raw = await redis.get("diemdanh");
      const list: Row[] = raw && typeof raw === "string" ? JSON.parse(raw) : [];
      const newList = list.filter(d => d.phien !== phien);
      await redis.set("diemdanh", JSON.stringify(newList));
      setSubmittedList(newList);
      setSelected(null);
      setQuery("");
      alert("Đã làm mới danh sách.");
    } catch (err) {
      console.error(err);
      alert("Lỗi mạng");
    }
  };

  // ---------- SUBMIT ĐIỂM DANH ----------
  const submit = async () => {
    if (!selected) return alert("Chọn tên trong danh sách.");
    if (!date || !phien) return alert("Phiên điểm danh chưa mở.");
    setLoading(true);

    try {
      // Kiểm tra người trong danh sách Excel
      const dsExcelRes = await fetch("/api/danhsach");
      const dsExcelData = await dsExcelRes.json();
      const danhSach: Row[] = dsExcelData.list || [];
      if (!danhSach.some(d => d.hoTen.toLowerCase() === selected.hoTen.toLowerCase())) {
        alert("Đại biểu không có trong danh sách");
        setLoading(false);
        return;
      }

      // Lấy danh sách Redis
      const raw = await redis.get("diemdanh");
      const list: Row[] = raw && typeof raw === "string" ? JSON.parse(raw) : [];
      if (list.some(d => d.hoTen.toLowerCase() === selected.hoTen.toLowerCase() && d.phien === phien)) {
        alert("Đại biểu đã điểm danh cho phiên này");
        setLoading(false);
        return;
      }

      const newItem: Row = { hoTen: selected.hoTen, donVi: selected.donVi, ngay: date!, phien };
      const newList = [...list, newItem];
      await redis.set("diemdanh", JSON.stringify(newList));

      alert("Điểm danh thành công");
      setSelected(null);
      setQuery("");
      setSubmittedList(newList);
    } catch (err) {
      console.error(err);
      alert("Lỗi mạng hoặc JSON không hợp lệ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 12, maxWidth: 420, margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", color: "#0650b7", fontSize: 20, fontWeight: "Bold" }}>Điểm danh đại biểu</h2>

      <div style={{ background: "#fff", padding: 12, borderRadius: 8, boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}>
        <label>Chọn phiên:
          <select
            value={date || ""}
            onChange={(e) => {
              const v = e.target.value;
              setDate(v);
              const found = DATE_OPTIONS.find(x => x.label === v);
              setPhien(found ? found.phien : null);
            }}
          >
            {DATE_OPTIONS.map(o => {
              const isOpen = now >= o.open && now <= o.close;
              return <option key={o.label} value={o.label} disabled={!isOpen}>{o.label} — {o.phien} {isOpen ? "" : "(chưa mở)"}</option>;
            })}
          </select>
        </label>

        <input
          ref={inputRef}
          value={query}
          onChange={(e) => { setQuery(e.target.value); setSelected(null); setShowSuggest(true); }}
          placeholder="Nhập họ tên..."
          style={{ width: "100%", padding: 8, marginTop: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />

        {showSuggest && suggestions.length > 0 && !selected && (
          <ul style={{ listStyle: "none", margin: 4, padding: 4, border: "1px solid #eee", maxHeight: 150, overflowY: "auto", borderRadius: 6 }}>
            {suggestions.map((s, i) => (
              <li
                key={i}
                style={{ padding: 6, cursor: "pointer", backgroundColor: isSubmitted(s.hoTen, phien!) ? "#e6f7e6" : "#fff" }}
                onClick={() => choose(s)}
              >
                {s.hoTen}
              </li>
            ))}
          </ul>
        )}

        <input value={selected?.donVi || ""} disabled placeholder="Tự động điền khi chọn tên" style={{ width: "100%", padding: 8, marginTop: 4, borderRadius: 6, background: "#f7f9ff", border: "1px solid #ccc" }} />

        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
          <button onClick={submit} disabled={loading || !phien}>{loading ? "Đang gửi..." : "Xác nhận điểm danh"}</button>
          <button onClick={resetList} style={{ background: "#d9534f", color: "#fff" }}>Làm mới danh sách</button>
        </div>

        {submittedList.filter(d => d.phien === phien).length > 0 && (
          <div style={{ marginTop: 12 }}>
            <h4>Đã điểm danh — {phien}</h4>
            <ul style={{ maxHeight: 200, overflowY: "auto", padding: 4, border: "1px solid #eee", borderRadius: 6 }}>
              {submittedList.filter(d => d.phien === phien).map((d, i) => <li key={i} style={{ padding: 4, color: "#28a745", fontSize: 13 }}>{d.hoTen} — {d.donVi}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
