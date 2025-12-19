// app/thamluan/page.tsx
import Header from "../components/Header";
import ThamLuanTable from "../components/ThamLuanTable";
import "../style.css";

export default function PageThamLuan() {

  // I. Sở, ban, ngành
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
    {
      stt: 3,
      donvi: "Sở Nội vụ",
      tieude:
        "Phối hợp trong triển khai thực hiện quản lý Nhà nước về thanh niên trên địa bàn tỉnh Lâm Đồng",
      link: "https://drive.google.com/file/d/FILE_ID_3/view",
    },
  ];

  // II. Cơ sở Đoàn
  const thamluanCoSo = [
    {
      stt: 1,
      donvi: "Đoàn Thanh niên Đảng uỷ các cơ quan Đảng tỉnh",
      tieude:
        "Vai trò của đoàn viên thanh niên trong bảo vệ nền tảng tư tưởng của Đảng trên không gian mạng",
      link: "https://drive.google.com/file/d/FILE_ID_4/view",
    },
    {
      stt: 2,
      donvi: "Đoàn Thanh niên Bộ CHQS tỉnh",
      tieude:
        "Vai trò của đoàn viên thanh niên trong bảo vệ nền tảng tư tưởng của Đảng, phản bác quan điểm sai trái",
      link: "https://drive.google.com/file/d/FILE_ID_5/view",
    },
    {
      stt: 3,
      donvi: "Đoàn TNCS Hồ Chí Minh xã Bắc Ruộng",
      tieude:
        "Công tác tuyên truyền, giáo dục pháp luật, đạo đức, lối sống cho thanh niên",
      link: "https://drive.google.com/file/d/FILE_ID_6/view",
    },
  ];

  return (
    <div className="main-container">
      <Header />

      <h2 className="section-title">
        I. Định hướng nhiệm vụ, giải pháp của các sở, ban, ngành
      </h2>
      <ThamLuanTable thamluans={thamluanSoNganh} />

      <h2 className="section-title">
        II. Tham luận của các cơ sở Đoàn trực thuộc Tỉnh đoàn
      </h2>
      <ThamLuanTable thamluans={thamluanCoSo} />
    </div>
  );
}
