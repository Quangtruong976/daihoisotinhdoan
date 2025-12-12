"use client";

import { useEffect, useState } from "react";

export default function DiemDanhToanBoPage() {
  const [message, setMessage] = useState<string>("Đang điểm danh...");

  useEffect(() => {
    const diemDanhToanBo = async () => {
      try {
        const res = await fetch("/api/diemdanh/all?key=SECRET123", {
          method: "POST",
        });
        const data = await res.json();
        setMessage(data.message || "Đã điểm danh toàn bộ!");
      } catch (err) {
        console.error(err);
        setMessage("Lỗi mạng, không thể điểm danh.");
      }
    };

    diemDanhToanBo();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#fff",
        color: "#000",
        fontSize: 16,
        textAlign: "center",
        padding: 12,
      }}
    >
      {message}
    </div>
  );
}
