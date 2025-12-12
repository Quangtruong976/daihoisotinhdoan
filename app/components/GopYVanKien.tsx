"use client";
import { useState } from "react";

export default function GopYVanKien() {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    unit: "",
    email: "",
    content: "",
  });
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const categories = [
    "Góp ý báo cáo chính trị",
    "Góp ý báo cáo kiểm điểm BCH",
    "Góp ý dự thảo Nghị quyết Đại hội",
    "Góp ý chương trình hành động thực hiện nghị quyết ĐH",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch("/api/send-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      setStatus({ success: result.success, message: result.message });
      if (result.success) {
        setFormData({ category: "", name: "", unit: "", email: "", content: "" });
      }
    } catch {
      setStatus({ success: false, message: "Lỗi mạng, vui lòng thử lại" });
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", fontFamily: "Times New Roman, serif" }}>
      <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: 30, color: "#0650b7" }}>
        Mời bạn tham gia đóng góp ý kiến vào các nội dung dự thảo văn kiện
      </h2>

      {status && (
        <div
          style={{
            textAlign: "center",
            marginBottom: 20,
            fontWeight: "bold",
            color: status.success ? "green" : "red",
            fontSize: 16,
          }}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label style={{ fontWeight: "bold" }}>Chọn nội dung góp ý:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: 10, marginBottom: 15, fontSize: 16, borderRadius: 6, border: "1px solid #ccc" }}
        >
          <option value="">-- Chọn --</option>
          {categories.map((c, idx) => (
            <option key={idx} value={c}>{c}</option>
          ))}
        </select>

        <input type="text" name="name" placeholder="Họ và tên" value={formData.name} onChange={handleChange} required
          style={{ width: "100%", padding: 10, marginBottom: 15, fontSize: 16, borderRadius: 6, border: "1px solid #ccc" }} />
        <input type="text" name="unit" placeholder="Đơn vị" value={formData.unit} onChange={handleChange} required
          style={{ width: "100%", padding: 10, marginBottom: 15, fontSize: 16, borderRadius: 6, border: "1px solid #ccc" }} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required
          style={{ width: "100%", padding: 10, marginBottom: 15, fontSize: 16, borderRadius: 6, border: "1px solid #ccc" }} />
        <textarea name="content" placeholder="Nhập nội dung góp ý" value={formData.content} onChange={handleChange} required rows={6}
          style={{ width: "100%", padding: 10, marginBottom: 20, fontSize: 16, borderRadius: 6, border: "1px solid #ccc", resize: "vertical" }} />

        <button type="submit" style={{
          width: "100%", padding: "12px 0", fontWeight: "bold", fontSize: 16,
          backgroundColor: "#0650b7", color: "white", border: "none", borderRadius: 8, cursor: "pointer"
        }}
          onMouseOver={(e) => (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#043f8c"}
          onMouseOut={(e) => (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0650b7"}
        >
          Gửi góp ý
        </button>
      </form>
    </div>
  );
}
