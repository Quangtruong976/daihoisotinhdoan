interface ThamLuanItem {
  stt: number;
  donvi: string;
  title: string;
  link: string;
}

interface ThamLuanFramesProps {
  title: string;           // I. / II.
  cotDonVi: string;        // Sở, ban, ngành | Tên đơn vị
  cotNoiDung: string;      // Bài viết | Nội dung tham luận
  thamluans: ThamLuanItem[];
}

export default function ThamLuanFrames({
  title,
  cotDonVi,
  cotNoiDung,
  thamluans,
}: ThamLuanFramesProps) {
  return (
    <div style={{ maxWidth: 950, margin: "20px auto", padding: "0 12px" }}>
      
      {/* TIÊU ĐỀ PHẦN – SÁT BẢNG */}
      <div style={{ fontWeight: 600, marginBottom: 6 }}>
        {title}
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          tableLayout: "fixed",
          fontSize: 14,
        }}
      >
        <thead>
          <tr>
            <th style={{ width: 48, border: "1px solid #ccc" }}>STT</th>
            <th style={{ width: "30%", border: "1px solid #ccc" }}>
              {cotDonVi}
            </th>
            <th style={{ border: "1px solid #ccc" }}>
              {cotNoiDung}
            </th>
          </tr>
        </thead>

        <tbody>
          {thamluans.map((item) => (
            <tr key={item.stt}>
              <td style={{ textAlign: "center", border: "1px solid #ccc" }}>
                {item.stt}
              </td>
              <td style={{ border: "1px solid #ccc", padding: 6 }}>
                {item.donvi}
              </td>
              <td style={{ border: "1px solid #ccc", padding: 6 }}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#0650b7",
                    textDecoration: "underline",
                    wordBreak: "break-word",
                  }}
                >
                  {item.title}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
