"use client";

import { useEffect, useState } from "react";

export default function DiemDanhToanBoPage() {
  const [message, setMessage] = useState("Đang điểm danh...");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/diemdanh/all?key=SECRET123", { method: "POST" });
        const data = await res.json();
        setMessage(data.message || "Đã điểm danh toàn bộ!");
      } catch {
        setMessage("Lỗi mạng, không thể điểm danh.");
      }
    })();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40vh", fontSize: 18 }}>
      {message}
    </div>
  );
}
