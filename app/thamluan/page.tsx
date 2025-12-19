// app/thamluan/page.tsx
import ThamLuanTable from "../components/ThamLuanTable";
import "../style.css";

export default function PageThamLuan() {

  const thamluanSoNganh = [
    {
      stt: 1,
      donvi: "Ban Tổ chức Tỉnh uỷ",
      tieude:
        "Nâng cao chất lượng công tác bồi dưỡng, phát triển Đảng viên từ tổ chức Đoàn TNCS Hồ Chí Minh",
      link: "https://drive.google.com/file/d/FILE_ID_1/view",
    },
    {
      stt: 2,
      donvi: "Sở Khoa học và Công nghệ",
      tieude:
        "Tăng cường hỗ trợ và thúc đẩy phong trào khởi nghiệp đổi mới sáng tạo trong thanh niên tỉnh Lâm Đồng",
      link: "https://drive.google.com/file/d/FILE_ID_2/view",
    },
  ];

  const thamluanCoSo = [
    {
      stt: 1,
      donvi: "Đoàn Thanh niên Đảng uỷ các cơ quan Đảng tỉnh",
      tieude:
        "Vai trò của đoàn viên thanh niên trong tham gia bảo vệ nền tảng tư tưởng của Đảng trên không gian mạng",
      link: "https://drive.google.com/file/d/FILE_ID_3/view",
    },
  ];

  return (
    <div className="main-container">

      <h3 className="phan-title">
        I. Định hướng nhiệm vụ, giải pháp của các sở, ban, ngành
      </h3>
      <ThamLuanTable thamluans={thamluanSoNganh} />

      <h3 className="phan-title">
        II. Tham luận của các cơ sở Đoàn trực thuộc Tỉnh đoàn
      </h3>
      <ThamLuanTable thamluans={thamluanCoSo} />

    </div>
  );
}
