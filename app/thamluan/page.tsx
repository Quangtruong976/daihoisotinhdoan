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
    <div className="thamluan-wrapper">
      <h2 className="thamluan-title">
        I. Định hướng nhiệm vụ, giải pháp của các sở, ban, ngành
      </h2>

      <div className="table-container">
        <table className="thamluan-table">
          <thead>
            <tr>
              <th className="col-stt">TT</th>
              <th className="col-donvi">Sở/ngành</th>
              <th className="col-tieude">Tên bài tham luận</th>
            </tr>
          </thead>
          <tbody>
            {phanI.map((item) => (
              <tr key={item.stt}>
                <td className="center">{item.stt}</td>
                <td>{item.donvi}</td>
                <td>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="file-link"
                  >
                    {item.tieude}
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
