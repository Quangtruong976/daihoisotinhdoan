import React from "react";
import Link from "next/link";
import "./TrangChuTinh.css";

export default function TrangChuTinhPage() {
  const buttons = [
    { label: "📋 Chương trình", route: "/program", color: "rgb(11, 100, 195)" },
    { label: "📄 Văn kiện", route: "/documents", color: "rgb(158, 62, 218)" },
    { label: "🗣️ Diễn đàn", route: "/forum", color: " #f4511e" },
    { label: "📝 Tham luận", route: "/contributions", color: "rgb(10, 174, 92)" },
    { label: "🧍‍♂️ Điểm danh", route: "/delegates", color: "rgb(240, 89, 89)" },
    { label: "🪑 Sơ đồ", route: "/seating", color: "rgb(34, 228, 79)" },
    { label: "💬 Góp ý", route: "/feedback", color: " #f57c00" },
    { label: "📄 Tài liệu", route: "/documents2", color: "rgb(136, 184, 15)" },
  ];

  return (
    <div className="trangchutinh-container">
      <header className="trangchutinh-header">
      
        <h2 className="trangchutinh-title">
          ĐẠI HỘI ĐOÀN TNCS HỒ CHÍ MINH TỈNH LÂM ĐỒNG LẦN THỨ I, NHIỆM KỲ 2025 - 2030
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
