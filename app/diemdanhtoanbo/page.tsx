"use client";

export default function DiemDanhToanBo() {
  const handleDiemDanhAll = async () => {
    const pwd = prompt("Nhập mật khẩu xác nhận điểm danh toàn bộ:");
    if (pwd !== "000000") {
      alert("Sai mật khẩu!");
      return;
    }

    const res = await fetch("/api/diemdanh/all", {
      method: "POST",
    });
    const data = await res.json();
    alert(data.message);
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
