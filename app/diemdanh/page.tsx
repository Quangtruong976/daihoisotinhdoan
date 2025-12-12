"use client";

import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Link from "next/link";

ChartJS.register(ArcElement, Tooltip, Legend);

type DiemDanhItem = { hoTen: string; donVi: string; ngay: string; phien: string };

const DATE_OPTIONS = [
  {
    label: "19/12/2025",
    phien: "Phiên thứ 1",
    open: new Date("2025-12-07T08:00:00"),
    close: new Date("2025-12-11T11:00:00"),
  },
  {
    label: "20/12/2025",
    phien: "Phiên trọng thể",
    open: new Date("2025-12-11T06:00:00"),
    close: new Date("2025-12-20T23:59:00"),
  },
];

const TOTAL_DELEGATES = 350;
const QUORUM_PERCENT = 50;

export default function DiemDanhStats() {
  const [diemDanhList, setDiemDanhList] = useState<DiemDanhItem[]>([]);
  const [currentDateOption, setCurrentDateOption] = useState(DATE_OPTIONS[0]);

  useEffect(() => {
    const fetchData = () => {
      fetch("/api/diemdanh")
        .then((res) => res.json())
        .then((data) => setDiemDanhList(data.diemDanhList || []))
        .catch((err) => console.error(err));
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    const checkCurrent = () => {
      const now = new Date();
      const current = DATE_OPTIONS.find((d) => now >= d.open && now <= d.close);
      if (current) setCurrentDateOption(current);
    };
    checkCurrent();
    const timeInterval = setInterval(checkCurrent, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(timeInterval);
    };
  }, []);

  const filteredList = diemDanhList.filter(
    (d) => d.ngay === currentDateOption.label
  );
  const coMat = filteredList.length;
  const vang = Math.max(0, TOTAL_DELEGATES - coMat);
  const tyNumber = TOTAL_DELEGATES > 0 ? (coMat / TOTAL_DELEGATES) * 100 : 0;
  const tyLe = tyNumber.toFixed(1);

  const data = {
    labels: ["Có mặt", "Vắng"],
    datasets: [
      {
        data: [coMat, vang],
        backgroundColor: ["#28a745", "#e34a4a"],
        hoverOffset: 6,
      },
    ],
  };

  const hasQuorum = tyNumber >= QUORUM_PERCENT;
  const requiredCount = Math.ceil((QUORUM_PERCENT / 100) * TOTAL_DELEGATES);

  // ======================
  // HÀM ĐIỂM DANH TOÀN BỘ
  // ======================
  const handleDiemDanhToanBo = async () => {
    if (!confirm("Xác nhận điểm danh toàn bộ đại biểu?")) return;

    try {
      const res = await fetch("/api/diemdanh/all", { method: "POST" });
      const data = await res.json();
      alert(data.message || "Đã điểm danh toàn bộ!");
      // Cập nhật lại danh sách và thống kê
      fetch("/api/diemdanh")
        .then((r) => r.json())
        .then((d) => setDiemDanhList(d.diemDanhList || []));
    } catch {
      alert("Lỗi mạng");
    }
  };

  return (
    <div
      className="main-container"
      style={{ padding: 12, maxWidth: 480, margin: "0 auto" }}
    >
      <h2
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "rgb(5, 68, 156)",
          fontSize: "20",
        }}
      >
        Thống kê số lượng đại biểu
      </h2>

      <div
        style={{
          width: "100%",
          background: "#fff",
          padding: 14,
          borderRadius: 8,
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
          marginTop: 12,
        }}
      >
        {/* PHIÊN */}
        <div>
          <label style={{ fontWeight: "bold", color: "rgb(2, 82, 179)" }}>
            Phiên hiện tại:
          </label>
          <select
            value={currentDateOption.label}
            onChange={(e) => {
              const opt = DATE_OPTIONS.find((d) => d.label === e.target.value);
              if (opt) setCurrentDateOption(opt);
            }}
            style={{
              display: "block",
              marginTop: 8,
              width: "100%",
              padding: 6,
              borderRadius: 6,
            }}
          >
            {DATE_OPTIONS.map((o) => {
              const now = new Date();
              const isOpen = now >= o.open && now <= o.close;
              return (
                <option
                  key={o.label}
                  value={o.label}
                  disabled={!isOpen}
                  style={{ color: isOpen ? "#000" : "#aaa" }}
                >
                  {o.label} — {o.phien} {isOpen ? "" : "(chưa mở)"}
                </option>
              );
            })}
          </select>
        </div>

        {/* SỐ LIỆU */}
        <div
          style={{
            marginTop: 12,
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Tổng đại biểu */}
          <div
            style={{
              flex: "1 1 100px",
              borderRadius: 8,
              padding: 12,
              textAlign: "center",
              backgroundColor: "#0650b7",
              color: "#fff",
              minWidth: 90,
            }}
          >
            <div style={{ fontSize: 16 }}>
              <b>{TOTAL_DELEGATES}</b>
            </div>
            <div style={{ fontSize: 12 }}>Tổng đại biểu</div>
          </div>

          {/* Có mặt */}
          <div
            style={{
              flex: "1 1 100px",
              borderRadius: 8,
              padding: 12,
              textAlign: "center",
              backgroundColor: "#28a745",
              color: "#fff",
              minWidth: 90,
            }}
          >
            <div style={{ fontSize: 16 }}>
              <b>{coMat}</b>
            </div>
            <div style={{ fontSize: 12 }}>Có mặt</div>
          </div>

          {/* Vắng */}
          <div
            style={{
              flex: "1 1 100px",
              borderRadius: 8,
              padding: 12,
              textAlign: "center",
              backgroundColor: "#e34a4a",
              color: "#fff",
              minWidth: 90,
            }}
          >
            <div style={{ fontSize: 16 }}>
              <b>{vang}</b>
            </div>
            <div style={{ fontSize: 12 }}>Vắng</div>
          </div>

          {/* Tỷ lệ */}
          <div
            style={{
              flex: "1 1 80px",
              borderRadius: 8,
              padding: 12,
              textAlign: "center",
              backgroundColor: "#f0c419",
              color: "#fff",
              minWidth: 80,
            }}
          >
            <div style={{ fontSize: 16, fontWeight: "bold" }}>{tyLe}%</div>
            <div style={{ fontSize: 12 }}>Tỷ lệ</div>
          </div>
        </div>

        {/* DÒNG QUORUM */}
        <div style={{ marginTop: 12, textAlign: "center" }}>
          {hasQuorum ? (
            <div
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: 8,
                backgroundColor: "#e6f7ee",
                color: "#1b7a3a",
                fontWeight: 700,
              }}
              aria-live="polite"
            >
              ĐẠI HỘI ĐỦ ĐIỀU KIỆN TIẾN HÀNH — ({coMat} / {TOTAL_DELEGATES} ≥{" "}
              {requiredCount})
            </div>
          ) : (
            <div
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: 8,
                backgroundColor: "#fdecea",
                color: "#b02a2a",
                fontWeight: 700,
              }}
              aria-live="polite"
            >
              ĐẠI HỘI KHÔNG ĐỦ ĐIỀU KIỆN TIẾN HÀNH <br />
              Cần ít nhất {requiredCount} đại biểu ({QUORUM_PERCENT}%)
            </div>
          )}
        </div>

        {/* Doughnut */}
        <div
          style={{
            marginTop: 14,
            maxWidth: 300,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Doughnut data={data} />
        </div>

        {/* Nút */}
        <div
          style={{
            marginTop: 14,
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/diemdanh/nhap"
            className="btn"
            style={{
              flex: 1,
              textAlign: "center",
              justifyContent: "center",
              background: "rgb(28, 85, 159)",
            }}
          >
            Điểm danh
          </Link>
          <Link
            href="/"
            className="btn"
            style={{
              flex: 1,
              textAlign: "center",
              justifyContent: "center",
              background: "rgb(28, 85, 159)",
            }}
          >
            Trang chủ
          </Link>
        </div>

        {/* LINK ẨN ĐIỂM DANH TOÀN BỘ */}
<div style={{ textAlign: "center", marginTop: 4 }}>
  <a
    href="/api/diemdanh/all?key=SECRET123"
    style={{
      fontSize: 6,
      color: "#fff",
      cursor: "pointer",
      userSelect: "none",
      textDecoration: "none",
    }}
    title="Điểm danh toàn bộ đại biểu (ẩn)"
  >
    .
  </a>
</div>

      </div>
    </div>
  );
}
