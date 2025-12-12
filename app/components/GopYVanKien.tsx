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

  // GỬI QUA WEB3FORMS — GIỮ NGUYÊN CHỨC NĂNG
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    const form = new FormData();
    form.append("access_key", "5f72bc68-0240-4a4e-aeba-2d27fb81a831");

    form.append("from_name", formData.name);
    form.append("email", "no-reply@yourdomain.com");

    form.append("subject", `[Góp ý Văn kiện] ${formData.category}`);
    form.append(
      "message",
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
          message: "Cám ơn bạn đã gửi góp ý.",
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
      <h2
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: 30,
          color: "#0650b7",
        }}
      >
        Mời bạn tham gia đóng góp ý kiến vào các nội dung dự thảo văn kiện
      </h2>

      {/* FORM ĐÃ THÊM KHUNG VIỀN MỜ + TỰ CĂN ĐIỆN THOẠI */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(0,0,0,0.03)",
          padding: 20,
          borderRadius: 10,
          border: "1px solid #ddd",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <label style={{ fontWeight: "bold" }}>Chọn nội dung góp ý:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: 12,
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

        <input
          type="text"
          name="name"
          placeholder="Họ và tên"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: 12,
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
            padding: 12,
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
            padding: 12,
            marginBottom: 20,
            fontSize: 16,
            borderRadius: 6,
            border: "1px solid #ccc",
            resize: "vertical",
          }}
        />

        {/* NÚT GỬI NẰM GIỮA */}
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <button
            type="submit"
            style={{
              width: "60%",
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
        </div>
      </form>

      {/* THÔNG BÁO CÓ NÚT TẮT */}
      {status && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "25px 30px",
              borderRadius: 10,
              maxWidth: 400,
              width: "90%",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              textAlign: "center",
              position: "relative",
              borderTop: `6px solid ${status.success ? "blue" : "red"}`,
              fontSize: 17,
              lineHeight: "24px",
            }}
          >
            <button
              onClick={() => setStatus(null)}
              style={{
                position: "absolute",
                top: 8,
                right: 12,
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: 22,
                fontWeight: "bold",
              }}
            >
              ×
            </button>

            <p style={{ margin: 0, fontWeight: "bold", color: status.success ? "green" : "red" }}>
              {status.message}
            </p>

            <button
              onClick={() => setStatus(null)}
              style={{
                marginTop: 20,
                padding: "10px 20px",
                backgroundColor: "#0650b7",
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
        </div>
      )}
    </div>
  );
}
