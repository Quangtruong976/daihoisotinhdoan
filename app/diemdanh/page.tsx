"use client";

import { useEffect, useState } from "react";

type Row = { hoTen: string; donVi: string; ngay?: string; phien?: string };

export default function DiemDanhThongKe() {
  const [diemDanhList, setDiemDanhList] = useState<Row[]>([]);
  const [loading, setLoading] = useState(false);

  const DATE_OPTIONS = [
    { label: "19/12/2025", phien: "Phiên thứ 1" },
    { label: "20/12/2025", phien: "Phiên trọng thể" },
  ];

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/diemdanh");
      const data = await res.json();
      setDiemDanhList(data.diemDanhList || []);
    } catch (err) {
      console.error("Lỗi lấy dữ liệu:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const byPhien = (phien: string) =>
    diemDanhList.filter((d) => d.phien === phien);

  return (
    <div style={{ padding: 12, maxWidth: 600, margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", color: "#0650b7" }}>Thống kê điểm danh</h2>
      {loading && <p>Đang tải dữ liệu...</p>}

      {!loading &&
        DATE_OPTIONS.map((option) => {
          const list = byPhien(option.phien);
          return (
            <div key={option.phien} style={{ marginBottom: 20 }}>
              <h3>
                {option.label} — {option.phien} ({list.length} đại biểu)
              </h3>
              {list.length === 0 ? (
                <p>Chưa có điểm danh</p>
              ) : (
                <ul style={{ paddingLeft: 16 }}>
                  {list.map((d, i) => (
                    <li key={i}>
                      {d.hoTen} — {d.donVi} {d.ngay ? `(${d.ngay})` : ""}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
    </div>
  );
}
