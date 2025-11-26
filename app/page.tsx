import Link from "next/link";
import { FaFileAlt, FaClipboard, FaMap, FaCheck, FaComments, FaRegLightbulb } from "react-icons/fa";
import "./style.css";

export default function TrangChu() {

  // Thanh ngang trên cùng: dùng dấu "I" để ngăn cách
  const topMenu = [
    { label: "Home", route: "/" },
    { label: "Chương trình", route: "/chuongtrinh" },
    { label: "Văn kiện", route: "/vankien" },
    { label: "Sơ đồ", route: "/sodo" },
    { label: "Điểm danh", route: "/diemdanh" },
    { label: "Diễn đàn", route: "/dien" },
    { label: "Tham luận", route: "/thamluan" },
    { label: "Góp ý", route: "/gopy" },
  ];

  // Nút khối chữ nhật dưới
  const bottomButtons = [
    { label: "Chương trình Đại hội", icon: <FaFileAlt color="rgb(240, 228, 118)"/>, color: "rgb(23, 125, 249)", route: "/chuongtrinh" },
    { label: "Văn kiện Đại hội", icon: <FaClipboard color="rgb(245, 183, 49)"/>, color: "rgb(9, 182, 52)", route: "/vankien" },
    { label: "Sơ đồ chổ ngồi", icon: <FaMap color="rgb(216, 242, 111)"/>, color: "rgb(19, 166, 229)", route: "/sodo" },
    { label: "Điểm danh", icon: <FaCheck color=" #ff3399"/>, color: "rgb(145, 26, 188)", route: "/diemdanh" },
    { label: "Diễn đàn thảo luận", icon: <FaComments color="rgb(242, 234, 9)"/>, color: "rgb(239, 55, 79)", route: "/dien" },
    { label: "Tham luận", icon: <FaFileAlt color="rgb(243, 245, 246)"/>, color: "rgb(249, 131, 21)", route: "/thamluan" },
    { label: "Góp ý văn kiện", icon: <FaRegLightbulb color="#ff33ff"/>, color: "rgb(15, 87, 243)", route: "/gopy" },
    { label: "Thông tin đại biểu", icon: <FaClipboard color=" #00ffcc"/>, color: "rgb(8, 175, 105)", route: "/vankien2" },
  ];

  return (
    <div className="main-container">

      {/* Banner ảnh thay cho logo + tiêu đề */}
      <div className="banner">
        <img src="/bg.png" alt="Banner Đại hội" className="banner-img"/>
      </div>

      {/* Thanh menu ngang với dấu "I" */}
      <nav className="top-menu">
        {topMenu.map((btn, i) => (
          <span key={i}>
            <Link href={btn.route} className="top-menu-btn">{btn.label}</Link>
            {i < topMenu.length - 1 && <span className="separator">I</span>}
          </span>
        ))}
      </nav>

      {/* Khối nút chữ nhật dưới */}
      <div className="button-grid">
        {bottomButtons.map((btn, i) => (
          <Link key={i} href={btn.route} className="btn-card" style={{ backgroundColor: btn.color }}>
            <span className="btn-icon">{btn.icon}</span>
            <span className="btn-label">{btn.label}</span>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        @2025 - Tỉnh đoàn Lâm Đồng
      </footer>

    </div>
  );
}
