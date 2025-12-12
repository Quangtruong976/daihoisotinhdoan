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

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // -------------------------
  // GỬI WEB3FORMS
  // -------------------------
  const handleSubmit = async (e: any) => {
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
        setStatus({ success: true, message: "Cám ơn bạn đã gửi góp ý." });
        setFormData({ category: "", name: "", unit: "", content: "" });
      } else {
        setStatus({ success: false, message: "Gửi thất bại. Vui lòng thử lại." });
      }
    } catch (err) {
      setStatus({ success: false, message: "Lỗi mạng. Vui lòng thử lại." });
    }
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "30px auto",
        padding: "0 15px",
        fontFamily: "Times New Roman, serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: 25,
          color: "#0650b7",
          fontSize: 22,
        }}
      >
        Mời bạn tham gia đóng góp ý kiến vào các nội dung dự thảo văn kiện
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: 20,
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <label style={{ fontWeight: "bold", marginBottom: 5, display: "block" }}>
          Chọn nội dung góp ý:
        </label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 15,
            fontSize: 15,
            borderRadius: 8,
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
            borderRadius: 8,
            border: "1px solid #ccc",
            fontSize: 15,
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
            borderRadius: 8,
            border: "1px solid #ccc",
            fontSize: 15,
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
            borderRadius: 8,
            border: "1px solid #ccc",
            fontSize: 15,
            resize: "vertical",
          }}
        />

        {/* NÚT GỬI CANH GIỮA */}
        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            style={{
              width: "60%",
              padding: "12px 0",
              backgroundColor: "#0650b7",
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
              border: "none",
              borderRadius: 10,
              cursor: "pointer",
            }}
          >
            Gửi góp ý
          </button>
        </div>
      </form>

      {/* THÔNG BÁO POPUP */}
      {status && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.45)",
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
              maxWidth: 380,
              width: "90%",
              boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
              textAlign: "center",
              position: "relative",
              borderTop: `6px solid ${status.success ? "green" : "red"}`,
            }}
          >
            <button
              onClick={() => setStatus(null)}
              style={{
                position: "absolute",
                top: 6,
                right: 10,
                fontSize: 24,
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <p
              style={{
                fontWeight: "bold",
                color: status.success ? "green" : "red",
                fontSize: 17,
                marginTop: 10,
              }}
            >
              {status.message}
            </p>

            <button
              onClick={() => setStatus(null)}
              style={{
                marginTop: 18,
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
