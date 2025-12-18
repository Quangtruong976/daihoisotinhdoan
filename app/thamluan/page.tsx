// app/thamluan/page.tsx
import Header from "../components/Header";
import ThamLuanTable from "../components/ThamLuanTable";
import "../style.css";

export default function PageThamLuan() {
  const thamluanI = [
    { stt: 1, donvi: "Đoàn trường THPT A", tieude: "Giải pháp nâng cao hiệu quả phong trào thanh niên", link: "https://drive.google.com/file/d/ID1/view?usp=share_link" },
    { stt: 2, donvi: "Đoàn cơ sở B", tieude: "Sáng kiến cải thiện hoạt động Đoàn tại cơ sở", link: "https://drive.google.com/file/d/ID2/view?usp=share_link" },
    { stt: 3, donvi: "Đoàn trường THPT C", tieude: "Giải pháp phát huy vai trò thanh niên trong chuyển đổi số", link: "https://drive.google.com/file/d/ID3/view?usp=share_link" },
  ];

  const thamluanII = [
    { stt: 1, donvi: "Đoàn xã D", tieude: "Nâng cao chất lượng sinh hoạt chi đoàn", link: "https://drive.google.com/file/d/ID4/view?usp=share_link" },
    { stt: 2, donvi: "Đoàn phường E", tieude: "Phát huy vai trò cán bộ Đoàn cơ sở", link: "https://drive.google.com/file/d/ID5/view?usp=share_link" },
    { stt: 3, donvi: "Đoàn trường THPT F", tieude: "Công tác giáo dục truyền thống cho học sinh", link: "https://drive.google.com/file/d/ID6/view?usp=share_link" },
  ];

  return (
    <div className="main-container">
      <h2 className="table-title">I. Tham luận khối trường học</h2>
      <ThamLuanTable thamluans={thamluanI} />

      <h2 className="table-title">II. Tham luận khối địa bàn dân cư</h2>
      <ThamLuanTable thamluans={thamluanII} />
    </div>
  );

}
