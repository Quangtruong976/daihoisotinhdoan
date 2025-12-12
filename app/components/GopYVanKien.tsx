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
  const [submitted, setSubmitted] = useState(false);

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

    const form = new FormData();
    form.append("access_key", "YOUR_ACCESS_KEY_HERE"); // <-- THAY KEY
    form.append("category", formData.category);
    form.append("name", formData.name);
    form.append("unit", formData.unit);
    form.append("email", formData.email);
    form.append("content", formData.content);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    if (res.ok) {
      setSubmitted(true);
      setFormData({
        category: "",
        name: "",
        unit: "",
        email: "",
        content: "",
      });
    } else {
      alert("Gửi góp ý thất bại, hãy thử lại.");
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", fontFamily: "Times New Roman, serif" }}>
      <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: 30, color: "#0650b7" }}>
        Mời bạn tham gia đóng góp ý kiến vào các nội dung dự thảo văn kiện
      </h2>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          {/* Chọn nội dung góp ý */}
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

          {/* Email - KHÔNG BẮT BUỘC */}
          <input
            type="email"
            name="email"
            placeholder="Email (không bắt buộc)"
            value={formData.email}
            onChange={handleChange}
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

          {/* Nút gửi */}
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
      ) : (
        <div
          style={{
            textAlign: "center",
            color: "green",
            fontWeight: "bold",
            fontSize: 18,
            padding: 20,
            border: "1px solid #cfcfcf",
            borderRadius: 10,
            background: "#f6fff6",
          }}
        >
          <p>Gửi góp ý thành công!</p>
          <button
            onClick={() => setSubmitted(false)}
            style={{
              marginTop: 15,
              padding: "10px 20px",
              background: "#0650b7",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Đóng
          </button>
        </div>
      )}
    </div>
  );
}
