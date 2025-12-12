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
    form.append("access_key", "5f72bc68-0240-4a4e-aeba-2d27fb81a831"); // <-- DÁN KEY CỦA BẠN VÀO
    form.append("subject", `[Góp ý Văn kiện] ${formData.category}`);
    form.append("name", formData.name);
    form.append("unit", formData.unit);
    form.append(
      "message",
      `--- Thông tin góp ý ---\nNội dung: ${formData.content}\n\nHọ tên: ${formData.name}\nĐơn vị: ${formData.unit}\nNội dung góp ý: ${formData.category}`
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await res.json();

      if (result.success) {
        setStatus({ success: true, message: "Gửi góp ý thành công!" });
        setFormData({ category: "", name: "", unit: "", content: "" });
      } else {
        setStatus({ success: false, message: result.message || "Gửi thất bại" });
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
        {/* Chọn loại góp ý */}
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
            <option key={idx} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* Họ và tên */}
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

        {/* Đơn vị */}
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

        {/* Nội dung góp ý */}
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
            transition: "all 0.2s",
          }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#043f8c";
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0650b7";
          }}
        >
          Gửi góp ý
        </button>
      </form>

      {status && (
        <p
          style={{
            marginTop: 20,
            color: status.success ? "green" : "red",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {status.message}
        </p>
      )}
    </div>
  );
}
