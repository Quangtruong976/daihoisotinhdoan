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
        "Tăng cường hỗ trợ và thúc đẩy phong trào khởi nghiệp đổi mới sáng tạo trong thanh niên",
      link: "https://drive.google.com/file/d/FILE_ID_2/view",
    },
  ];

  return (
    <div className="page-center">
      <h2 className="section-title">
        I. Định hướng nhiệm vụ, giải pháp của các sở, ban, ngành
      </h2>

      <table className="thamluan-table">
        <thead>
          <tr>
            <th>TT</th>
            <th>Sở/ngành</th>
            <th>Bài tham luận</th>
          </tr>
        </thead>
        <tbody>
          {phanI.map((item) => (
            <tr key={item.stt}>
              <td className="col-tt">{item.stt}</td>
              <td className="col-donvi">{item.donvi}</td>
              <td className="col-tieude">
                <a href={item.link} target="_blank">{item.tieude}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
