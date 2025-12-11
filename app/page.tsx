import Link from "next/link";
import { FaFileAlt, FaClipboard, FaMap, FaCheck, FaComments, FaRegLightbulb } from "react-icons/fa";
import "./style.css";

export default function TrangChu() {

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

      {/* 🔵 THÔNG TIN ĐẠI HỘI */}
      <div className="daihHoi-box">
  <div className="daihHoi-title">🌟 THÔNG TIN ĐẠI HỘI 🌟</div>

  <div className="daihHoi-content">
    <p><strong>⏰ Thời gian:</strong> Ngày 19, 20/12/2025</p>

    <p><strong>📍 Địa điểm:</strong> Nhà Văn hóa Lao động tỉnh Lâm Đồng</p>
    <p className="daihHoi-address">
      (Số 01 Trần Quốc Toản, phường Xuân Hương – Đà Lạt, tỉnh Lâm Đồng)
    </p>

    <div className="daihHoi-section-title">Khẩu hiệu hành động</div>
    <div className="daihHoi-slogan">
      TIÊN PHONG – ĐOÀN KẾT – BẢN LĨNH – ĐỘT PHÁ – PHÁT TRIỂN
    </div>

    <div className="daihHoi-section-title">Chủ đề Đại hội</div>
    <div className="daihHoi-theme">
      Tự hào, vững tin theo Đảng, tuổi trẻ Lâm Đồng xây hoài bão lớn,  
      chung sức, đồng lòng, tiên phong tham gia xây dựng quê hương  
      phát triển nhanh, bền vững trong kỷ nguyên mới
    </div>
  </div>
</div>

      {/* Khối nút chữ nhật dưới */}
      <div className="button-grid">
        {bottomButtons.map((btn, i) => (
          <Link key={i} href={btn.route} className="btn-card" style={{ backgroundColor: btn.color }}>
            <span className="btn-icon">{btn.icon}</span>
            <span className="btn-label">{btn.label}</span>
          </Link>
        ))}
      </div>

    </div>
  );
}
