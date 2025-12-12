"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DiemDanhToanBoPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDiemDanh = async () => {
    const pwd = prompt("Nhập mật khẩu để điểm danh toàn bộ đại biểu:");
    if (pwd !== "000000") {
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

  const handleBack = () => {
    // Khi quay về, reload lại trang thống kê để cập nhật
    router.push("/diemdanh");
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

      {message && (
        <button
          onClick={handleBack}
          style={{
            padding: "6px 12px",
            borderRadius: 6,
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            marginTop: 8,
          }}
        >
          Quay về trang thống kê
        </button>
      )}
    </div>
  );
}
