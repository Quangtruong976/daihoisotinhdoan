// app/thamluan/page.tsx
import Header from "../components/Header";
import ThamLuanTable from "../components/ThamLuanTable";
import "../style.css";

export default function PageThamLuan() {
  const thamluanList = [
    { stt: 1, donvi: "Đoàn trường THPT A", tieude: "Giải pháp nâng cao hiệu quả phong trào thanh niên", link: "https://drive.google.com/file/d/ID1/view?usp=share_link" },
    { stt: 2, donvi: "Đoàn cơ sở B", tieude: "Sáng kiến cải thiện hoạt động Đoàn tại cơ sở", link: "https://drive.google.com/file/d/ID2/view?usp=share_link" },
    { stt: 3, donvi: "Đoàn trường THPT C", tieude: "Giải pháp phát huy vai trò thanh niên trong chuyển đổi số", link: "https://drive.google.com/file/d/ID3/view?usp=share_link" },
    { stt: 1, donvi: "Đoàn trường THPT A", tieude: "Giải pháp nâng cao hiệu quả phong trào thanh niên", link: "https://drive.google.com/file/d/ID1/view?usp=share_link" },
    { stt: 2, donvi: "Đoàn cơ sở B", tieude: "Sáng kiến cải thiện hoạt động Đoàn tại cơ sở", link: "https://drive.google.com/file/d/ID2/view?usp=share_link" },
    { stt: 3, donvi: "Đoàn trường THPT C", tieude: "Giải pháp phát huy vai trò thanh niên trong chuyển đổi số", link: "https://drive.google.com/file/d/ID3/view?usp=share_link" },
    { stt: 1, donvi: "Đoàn trường THPT A", tieude: "Giải pháp nâng cao hiệu quả phong trào thanh niên", link: "https://drive.google.com/file/d/ID1/view?usp=share_link" },
    { stt: 2, donvi: "Đoàn cơ sở B", tieude: "Sáng kiến cải thiện hoạt động Đoàn tại cơ sở", link: "https://drive.google.com/file/d/ID2/view?usp=share_link" },
    { stt: 3, donvi: "Đoàn trường THPT C", tieude: "Giải pháp phát huy vai trò thanh niên trong chuyển đổi số", link: "https://drive.google.com/file/d/ID3/view?usp=share_link" },
    { stt: 1, donvi: "Đoàn trường THPT A", tieude: "Giải pháp nâng cao hiệu quả phong trào thanh niên", link: "https://drive.google.com/file/d/ID1/view?usp=share_link" },
    { stt: 2, donvi: "Đoàn cơ sở B", tieude: "Sáng kiến cải thiện hoạt động Đoàn tại cơ sở", link: "https://drive.google.com/file/d/ID2/view?usp=share_link" },
    { stt: 3, donvi: "Đoàn trường THPT C", tieude: "Giải pháp phát huy vai trò thanh niên trong chuyển đổi số", link: "https://drive.google.com/file/d/ID3/view?usp=share_link" },
    // tiếp tục các bài khác
  ];

  return (
    <div className="main-container">
      <Header />
      <ThamLuanTable thamluans={thamluanList} />
      <footer className="footer">@2025 - Tỉnh đoàn Lâm Đồng</footer>
    </div>
  );
}
