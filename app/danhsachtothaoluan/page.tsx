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
          fontSize: 26,
        }}
      >
        Diễn đàn “Tuổi trẻ Lâm Đồng tiên phong trong kỷ nguyên mới”
      </h2>

      {/* KHUNG TO THAO LUAN */}
      <div style={boxStyle}>
        <h3 style={titleStyle}>I. Danh sách các diễn đàn</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <a href="LINK_TO1" target="_blank" style={buttonStyle}>
            Diễn đàn thảo luận số 1: “Tăng cường giáo dục, bồi dưỡng lý tưởng – khơi dậy khát vọng cống hiến, lẽ sống thanh niên”.
          </a>
          <a href="LINK_TO2" target="_blank" style={buttonStyle}>
            Diễn đàn thảo luận số 2: “Tuổi trẻ Lâm Đồng tiên phong, sáng tạo, xung kích, tình nguyện xây dựng quê hương Lâm Đồng giàu đẹp, văn minh”.
          </a>
          <a href="LINK_TO3" target="_blank" style={buttonStyle}>
            Diễn đàn thảo luận số 3: “Phát huy vai trò tiên phong của tuổi trẻ tham gia xây dựng Đoàn, Đoàn tham gia xây dựng Đảng và chính quyền trong sạch, vững mạnh”.
          </a>
        </div>
      </div>

      {/* KHUNG THAM LUAN */}
      <div style={boxStyle}>
        <h3 style={titleStyle}>II. Tham luận tại Đại hội</h3>

        <Link href="/thamluan" style={buttonStyle}>
          Xem danh sách tham luận
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
