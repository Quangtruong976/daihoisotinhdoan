"use client";

import Link from "next/link";

export default function DanhSachToThaoLuan() {
  return (
    <div
      style={{
        maxWidth: 850,
        margin: "30px auto",
        padding: "0 16px",
        fontFamily: "Segoe UI, Roboto, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontWeight: 700,
          color: "rgb(4, 16, 104)",
          marginBottom: 25,
          fontSize: 22,
        }}
      >
        Diễn đàn “Tuổi trẻ Lâm Đồng tiên phong trong kỷ nguyên mới”
      </h2>

      {/* KHUNG TO THAO LUAN */}
      <div style={boxStyle}>
        <h3 style={titleStyle}>I. Danh sách các diễn đàn</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <a href="https://drive.google.com/file/d/16-XyefUVRobiOSbR9oGlMmC6AFGwQ-UA/view?usp=sharing" target="_blank" style={buttonStyle}>
  <div
    style={{
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 6,
    }}
  >
    👉 Diễn đàn thảo luận số 1
  </div>

  <div
    style={{
      fontStyle: "italic",
      textAlign: "center",
      lineHeight: "1.45",
      fontSize: 13, // ← size nhỏ hơn ở đây
    }}
  >
    “Tăng cường giáo dục, bồi dưỡng lý tưởng – khơi dậy khát vọng cống hiến, lẽ sống thanh niên”.
  </div>
</a>
<a href="https://drive.google.com/file/d/1mxoL8JWb78wQeILkAes9hHJmun8OJbr7/view?usp=sharing" target="_blank" style={buttonStyle}>
  <div
    style={{
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 6,
    }}
  >
    👉 Diễn đàn thảo luận số 2
  </div>

  <div
    style={{
      fontStyle: "italic",
      textAlign: "center",
      lineHeight: "1.45",
      fontSize: 13, // ← size nhỏ hơn ở đây
    }}
  >
    “Tuổi trẻ Lâm Đồng tiên phong, sáng tạo, xung kích, tình nguyện xây dựng quê hương Lâm Đồng giàu đẹp, văn minh”.
  </div>
</a>

<a href="https://drive.google.com/file/d/1ZcheHY1acLRntJCg5fe8wItMpCYlEiMK/view?usp=sharing" target="_blank" style={buttonStyle}>
  <div
    style={{
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 6,
    }}
  >
    👉 Diễn đàn thảo luận số 3
  </div>

  <div
    style={{
      fontStyle: "italic",
      textAlign: "center",
      lineHeight: "1.45",
      fontSize: 13, // ← size nhỏ hơn ở đây
    }}
  >
    “Phát huy vai trò tiên phong của tuổi trẻ tham gia xây dựng Đoàn, Đoàn tham gia xây dựng Đảng và chính quyền trong sạch, vững mạnh”.
  </div>
</a>
        </div>
      </div>

      {/* KHUNG THAM LUAN */}
      <div style={boxStyle}>
        <h3 style={titleStyle}>II. Tham luận tại Đại hội</h3>

        <Link href="/thamluan" style={buttonStyle}>
          Các bài viết báo cáo tham luận
        </Link>
      </div>
    </div>
  );
}

const boxStyle: React.CSSProperties = {
  background: "white",
  padding: "22px 20px",
  borderRadius: 12,
  boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  marginBottom: 30,
  borderLeft: "6px solid #004aad",
};

const titleStyle: React.CSSProperties = {
  fontWeight: 700,
  color: "#004aad",
  fontSize: 20,
  marginBottom: 15,
};

const buttonStyle: React.CSSProperties = {
  display: "block",
  padding: "12px",
  backgroundColor: "#004aad",
  color: "white",
  borderRadius: 8,
  fontWeight: 600,
  textAlign: "center",
  textDecoration: "none",
  transition: "0.2s",
};
