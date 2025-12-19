// app/thamluan/page.tsx
import "../style.css";

export default function PageThamLuan() {
  const phanI = [
    {
      stt: 1,
      donvi: "Ban Tổ chức Tỉnh uỷ",
      tieude: "Nâng cao chất lượng công tác bồi dưỡng, phát triển Đảng viên",
      link: "https://drive.google.com/file/d/FILE_ID_1/view",
    },
    {
      stt: 2,
      donvi: "Sở Khoa học và Công nghệ",
      tieude: "Thúc đẩy phong trào khởi nghiệp đổi mới sáng tạo trong thanh niên",
      link: "https://drive.google.com/file/d/FILE_ID_2/view",
    },
    {
      stt: 3,
      donvi: "Sở Nội vụ",
      tieude: "Quản lý Nhà nước về thanh niên trên địa bàn tỉnh",
      link: "https://drive.google.com/file/d/FILE_ID_3/view",
    },
  ];

  const phanII = [
    {
      stt: 1,
      donvi: "Đoàn TN Đảng ủy các cơ quan Đảng tỉnh",
      tieude: "Vai trò ĐVTN trong bảo vệ nền tảng tư tưởng của Đảng",
      link: "https://drive.google.com/file/d/FILE_ID_4/view",
    },
    {
      stt: 2,
      donvi: "Đoàn TN Bộ CHQS tỉnh",
      tieude: "Thanh niên với nhiệm vụ bảo vệ nền tảng tư tưởng của Đảng",
      link: "https://drive.google.com/file/d/FILE_ID_5/view",
    },
    {
      stt: 3,
      donvi: "Đoàn TNCS Hồ Chí Minh xã Bắc Ruộng",
      tieude: "Giáo dục pháp luật, đạo đức, lối sống cho thanh niên",
      link: "https://drive.google.com/file/d/FILE_ID_6/view",
    },
    // thêm đến 20 tham luận cũng KHÔNG bị tràn
  ];

  return (
    <div className="main-container">
      {/* PHẦN I */}
      <h2 className="thamluan-title">
        I. Định hướng nhiệm vụ, giải pháp của các sở, ban, ngành
      </h2>

      <div className="table-wrapper">
        <table className="thamluan-table">
          <thead>
            <tr>
              <th>TT</th>
              <th>Sở/ngành</th>
              <th>Tên bài</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            {phanI.map((item) => (
              <tr key={item.stt}>
                <td className="col-stt">{item.stt}</td>
                <td>{item.donvi}</td>
                <td>{item.tieude}</td>
                <td className="col-file">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="file-link"
                  >
                    Xem
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PHẦN II */}
      <h2 className="thamluan-title">
        II. Tham luận của các cơ sở Đoàn trực thuộc Tỉnh đoàn
      </h2>

      <div className="table-wrapper">
        <table className="thamluan-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên đơn vị</th>
              <th>Tên bài tham luận</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            {phanII.map((item) => (
              <tr key={item.stt}>
                <td className="col-stt">{item.stt}</td>
                <td>{item.donvi}</td>
                <td>{item.tieude}</td>
                <td className="col-file">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="file-link"
                  >
                    Xem
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
