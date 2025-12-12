"use client";

import { useState } from "react";

export default function DiemDanhToanBoPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDiemDanh = async () => {
    const pwd = prompt("Nhập mật khẩu để điểm danh toàn bộ đại biểu:");
    if (pwd !== "SECRET123") {
      alert("Sai mật khẩu. Không thể điểm danh.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/diemdanh/all?key=SECRET123", { method: "POST" });
      const data = await res.json();
      setMessage(data.message || "Đã điểm danh toàn bộ!");
    } catch (err) {
      console.error(err);
      setMessage("Lỗi mạng, không thể điểm danh.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: 12,
        fontSize: 16,
        textAlign: "center",
      }}
    >
      <button
        onClick={handleDiemDanh}
        style={{
          padding: "8px 16px",
          borderRadius: 6,
          backgroundColor: "#1c55a0",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
        disabled={loading}
      >
        {loading ? "Đang điểm danh..." : "Điểm danh toàn bộ"}
      </button>
      {message && <div>{message}</div>}
    </div>
  );
}
