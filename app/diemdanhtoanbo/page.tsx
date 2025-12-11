"use client";

export default function DiemDanhToanBo() {
  const handleDiemDanhAll = async () => {
    if (!confirm("Xác nhận điểm danh toàn bộ đại biểu?")) return;

    try {
      const res = await fetch("/api/diemdanh/all", {
        method: "POST",
      });
      const data = await res.json();
      alert(data.message);
    } catch {
      alert("Lỗi mạng");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Điểm danh kỹ thuật (ẩn)</h1>
      <p>Chỉ dùng trong trường hợp đặc biệt, khi hệ thống treo hoặc không đại biểu nào điểm danh.</p>
      <button
        onClick={handleDiemDanhAll}
        style={{
          padding: "12px 20px",
          backgroundColor: "red",
          color: "white",
          borderRadius: 8,
          fontSize: 18,
          cursor: "pointer",
        }}
      >
        Điểm danh toàn bộ
      </button>
    </div>
  );
}
