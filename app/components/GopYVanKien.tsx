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

  // Gửi Web3Forms
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    const form = new FormData();
    form.append("access_key", "5f72bc68-0240-4a4e-aeba-2d27fb81a831");
    form.append("subject", `[Góp ý Văn kiện] ${formData.category}`);
    form.append("name", formData.name);
    form.append("unit", formData.unit);
    form.append(
      "message",
      `--- THÔNG TIN GÓP Ý ---\n• Họ tên: ${formData.name}\n• Đơn vị: ${formData.unit}\n• Nội dung: ${formData.category}\n\n${formData.content}`
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
          message: "Gửi góp ý thành công. Cám ơn bạn đã quan tâm góp ý!",
        });
        setFormData({ category: "", name: "", unit: "", content: "" });
      } else {
        setStatus({ success: false, message: "Gửi thất bại. Vui lòng thử lại." });
      }
    } catch {
      setStatus({ success: false, message: "Lỗi mạng. Vui lòng thử lại." });
    }
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "30px auto",
        padding: "20px",
        fontFamily: "Times New Roman, serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: 22,
          marginBottom: 25,
          fontWeight: "bold",
          color: "#0650b7",
          lineHeight: "30px",
        }}
      >
        MỜI BẠN THAM GIA GÓP Ý  
        <br />
        VÀO CÁC DỰ THẢO VĂN KIỆN ĐẠI HỘI
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        {/* Loại góp ý */}
        <div>
          <label style={{ fontWeight: "bold", marginBottom: 6, display: "block" }}>
            Nội dung góp ý:
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: 12,
              fontSize: 16,
              borderRadius: 8,
              border: "1px solid #ccc",
            }}
          >
            <option value="">-- Chọn nội dung --</option>
            {categories.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Họ tên */}
        <input
          type="text"
          name="name"
          placeholder="Họ và tên"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: 12,
            fontSize: 16,
            borderRadius: 8,
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
            padding: 12,
            fontSize: 16,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
        />

        {/* Nội dung góp ý */}
        <textarea
          name="content"
          placeholder="Nhập nội dung góp ý..."
          rows={6}
          value={formData.content}
          onChange={handleChange}
          required
          style={{
            padding: 12,
            fontSize: 16,
            borderRadius: 8,
            border: "1px solid #ccc",
            resize: "vertical",
          }}
        />

        {/* Nút gửi chính giữa */}
        <div style={{ textAlign: "center", marginTop: 10 }}>
          <button
            type="submit"
            style={{
              padding: "12px 30px",
              fontSize: 17,
              fontWeight: "bold",
              background: "#0650b7",
              color: "white",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              width: "60%",
              maxWidth: 250,
            }}
          >
            Gửi góp ý
          </button>
        </div>
      </form>

      {/* POPUP THÔNG BÁO */}
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
              borderRadius: 12,
              width: "90%",
              maxWidth: 380,
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              textAlign: "center",
              borderTop: `6px solid ${status.success ? "green" : "red"}`,
              position: "relative",
            }}
          >
            <button
              onClick={() => setStatus(null)}
              style={{
                position: "absolute",
                top: 8,
                right: 12,
                fontSize: 22,
                fontWeight: "bold",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <p
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: status.success ? "green" : "red",
                marginBottom: 20,
                lineHeight: "24px",
              }}
            >
              {status.message}
            </p>

            <button
              onClick={() => setStatus(null)}
              style={{
                padding: "10px 24px",
                backgroundColor: "#0650b7",
                color: "white",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 16,
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
