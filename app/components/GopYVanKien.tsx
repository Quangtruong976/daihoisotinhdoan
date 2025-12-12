"use client";
import { useState } from "react";

export default function GopYVanKien() {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    unit: "",
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

  // ---------------------------------
  // GỬI THẲNG QUA WEB3FORMS
  // ---------------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    const form = new FormData();
    form.append("access_key", "5f72bc68-0240-4a4e-aeba-2d27fb81a831");

    // THÊM CÁC FIELD BẮT BUỘC CHO WEB3FORMS
    form.append("from_name", formData.name);
    form.append("email", "no-reply@yourdomain.com"); // KHÔNG CÓ EMAIL THẬT → BẮT BUỘC PHẢI CÓ
    
    form.append("subject", `[Góp ý Văn kiện] ${formData.category}`);
    form.append("message",
      `--- Thông tin góp ý ---
Loại góp ý: ${formData.category}
Nội dung: ${formData.content}

Họ tên: ${formData.name}
Đơn vị: ${formData.unit}`
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await res.json();

      if (result.success) {
        setStatus({
          success: true,
          message: "Gửi góp ý thành công. Cám ơn bạn đã quan tâm góp ý.",
        });

        setFormData({ category: "", name: "", unit: "", content: "" });
      } else {
        setStatus({ success: false, message: "Gửi thất bại. Vui lòng thử lại." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ success: false, message: "Lỗi mạng. Vui lòng thử lại." });
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", fontFamily: "Times New Roman, serif" }}>
      <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: 30, color: "#0650b7" }}>
        Mời bạn tham gia đóng góp ý kiến vào các nội dung dự thảo văn kiện
      </h2>

      <form onSubmit={handleSubmit}>
        
        <label style={{ fontWeight: "bold" }}>Chọn nội dung góp ý:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 15,
            fontSize: 16,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        >
          <option value="">-- Chọn --</option>
          {categories.map((c, idx) => (
            <option key={idx} value={c}>{c}</option>
          ))}
        </select>

        <input
          type="text"
          name="name"
          placeholder="Họ và tên"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 15,
            fontSize: 16,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />

        <input
          type="text"
          name="unit"
          placeholder="Đơn vị"
          value={formData.unit}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 15,
            fontSize: 16,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />

        <textarea
          name="content"
          placeholder="Nhập nội dung góp ý"
          value={formData.content}
          onChange={handleChange}
          required
          rows={6}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 20,
            fontSize: 16,
            borderRadius: 6,
            border: "1px solid #ccc",
            resize: "vertical",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px 0",
            fontWeight: "bold",
            fontSize: 16,
            backgroundColor: "#0650b7",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Gửi góp ý
        </button>
      </form>

      {/* THÔNG BÁO CÓ NÚT TẮT */}
      {status && (
        <div
          style={{
            marginTop: 20,
            padding: "12px 16px",
            borderRadius: 6,
            backgroundColor: status.success ? "#d4f7d4" : "#ffd4d4",
            color: status.success ? "#0a7a0a" : "#b30000",
            fontWeight: "bold",
            position: "relative",
            textAlign: "center",
          }}
        >
          {status.message}
          <button
            onClick={() => setStatus(null)}
            style={{
              position: "absolute",
              top: 6,
              right: 8,
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
