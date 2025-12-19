// app/thamluan/page.tsx
import ThamLuanTable from "../components/ThamLuanTable";
import "../style.css";

export default function PageThamLuan() {
  const phanI = [
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

  const phanII = [
    {
      stt: 1,
      donvi: "Đoàn TNCS Hồ Chí Minh xã Bắc Ruộng",
      tieude:
        "Công tác tuyên truyền, giáo dục pháp luật, đạo đức, lối sống cho thanh niên",
      link: "https://drive.google.com/file/d/FILE_ID_3/view",
    },
    {
      stt: 2,
      donvi: "Đoàn Thanh niên Bộ CHQS tỉnh",
      tieude:
        "Vai trò của đoàn viên thanh niên trong bảo vệ nền tảng tư tưởng của Đảng trên không gian mạng",
      link: "https://drive.google.com/file/d/FILE_ID_4/view",
    },
  ];

  return (
    <div className="main-container">
      {/* PHẦN I */}
      <div className="phan-block">
        <div className="phan-label">
          I. Góp ý, định hướng nhiệm vụ, giải pháp công tác Đoàn của các sở, ban, ngành
        </div>
        <ThamLuanTable
          thamluans={phanI}
          tenDonVi="Sở, ban, ngành"
          tenNoiDung="Bài viết"
        />
      </div>

      {/* PHẦN II */}
      <div className="phan-block">
        <div className="phan-label">
          II. Tham luận của các cơ sở Đoàn trực thuộc Tỉnh đoàn
        </div>
        <ThamLuanTable
          thamluans={phanII}
          tenDonVi="Tên đơn vị"
          tenNoiDung="Nội dung tham luận"
        />
      </div>
    </div>
  );
}
