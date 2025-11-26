import React from "react";
import Link from "next/link";
import "./TrangChuTinh.css";

export default function TrangChuTinhPage() {
  const buttons = [
    { label: "📋 Chương trình Đại hội", route: "/program", color: "rgb(11, 100, 195)" },
    { label: "📄 Văn kiện Đại hội", route: "/documents", color: "rgb(158, 62, 218)" },
    { label: "🪑 Sơ đồ đại biểu", route: "/seating", color: "rgb(10, 203, 55)" },
    { label: "🧍‍♂️ Điểm danh đại biểu", route: "/delegates", color: "rgb(240, 89, 89)" },
    { label: "🗣️ Diễn đàn Đại hội", route: "/forum", color: " #f4511e" },
    { label: "📝 Tham luận", route: "/contributions", color: "rgb(10, 174, 92)" },
    { label: "💬 Góp ý Văn kiện", route: "/feedback", color: " #f57c00" },
    { label: "📄 Thông tin khác", route: "/documents2", color: "rgb(136, 184, 15)" },
  ];

  return (
    <div className="trangchutinh-container">
      <header className="trangchutinh-header">
        <h2 className="trangchutinh-title">
          ĐẠI HỘI ĐOÀN TNCS HỒ CHÍ MINH <br />
          TỈNH LÂM ĐỒNG LẦN THỨ I  <br />
           NHIỆM KỲ 2025 - 2030<br />
        </h2>
      </header>

      <div className="button-section">
        {/* Hàng trên 4 nút */}
        <div className="button-row">
          {buttons.slice(0, 4).map((btn, i) => (
            <Link
              key={i}
              href={btn.route}
              className="button-card"
              style={{ backgroundColor: btn.color }}
            >
              {btn.label}
            </Link>
          ))}
        </div>

        {/* Hàng dưới 4 nút */}
        <div className="button-row">
          {buttons.slice(4).map((btn, i) => (
            <Link
              key={i}
              href={btn.route}
              className="button-card"
              style={{ backgroundColor: btn.color }}
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
