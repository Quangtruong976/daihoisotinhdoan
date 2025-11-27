import Header from "../components/Header";
import GopYVanKien from "../components/GopYVanKien";
import "../style.css";

export default function PageGopY() {
  return (
    <div className="main-container">
      <Header />
      <GopYVanKien />
      <footer className="footer">@2025 - Tỉnh đoàn Lâm Đồng</footer>
    </div>
  );
}
