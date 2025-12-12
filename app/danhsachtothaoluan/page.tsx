"use client";

import Link from "next/link";

export default function DanhSachToThaoLuan() {
  return (
    <div
      style={{
        maxWidth: 700,
        margin: "40px auto",
        padding: "0 15px",
        fontFamily: "Times New Roman, serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#0650b7",
          marginBottom: 30,
        }}
      >
        DANH SÁCH CÁC TỔ THẢO LUẬN TẠI ĐẠI HỘI
      </h2>

      {/* --- KHUNG DANH SÁCH --- */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: 10,
          background: " #f9f9f9",
          marginBottom: 30,
        }}
      >
        <h3 style={{ marginBottom: 15, fontWeight: "bold" }}>
          1. Danh sách các tổ thảo luận
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <a
            href="LINK_GOOGLE_DRIVE_TO_1"
            target="_blank"
            style={buttonStyle}
          >
           Tổ thảo luận số 1<br/>
            * Chủ trì: Đồng chí.....<br/>
            * Thư ký: Đồng chí......
          </a>

          <a
            href="LINK_GOOGLE_DRIVE_TO_2"
            target="_blank"
            style={buttonStyle}
          >
            Tổ thảo luận số 2<br/>
            * Chủ trì: Đồng chí.....<br/>
            * Thư ký: Đồng chí......
          </a>

          <a
            href="LINK_GOOGLE_DRIVE_TO_3"
            target="_blank"
            style={buttonStyle}
          >
             Tổ thảo luận số 3<br/>
            * Chủ trì: Đồng chí.....<br/>
            * Thư ký: Đồng chí......
          </a>
        </div>
      </div>

      {/* --- THAM LUẬN --- */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: 10,
          background: "#f9f9f9",
        }}
      >
        <h3 style={{ marginBottom: 15, fontWeight: "bold" }}>
          2. Tham luận tại Đại hội
        </h3>

        <Link href="/thamluan" style={buttonStyle}>
          Xem danh sách tham luận
        </Link>
      </div>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "12px",
  textAlign: "center",
  backgroundColor: "rgb(136, 178, 236)",
  color: "white",
  borderRadius: 8,
  fontWeight: "bold",
  textDecoration: "none",
};
