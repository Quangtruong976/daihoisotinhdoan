// app/components/ThamLuanTable.tsx
interface ThamLuanTableProps {
  thamluans: { stt: number; donvi: string; tieude: string; link: string }[];
}

export default function ThamLuanTable({ thamluans }: ThamLuanTableProps) {
  return (
    <div style={{ maxWidth: 950, margin: "auto", padding: 20 }}>
      <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: 20,  color: " #0650b7", }}>
        DANH SÁCH THAM LUẬN CÁC ĐƠN VỊ <br/>-----
      </h2>

      <table className="thamluan-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Đơn vị</th>
            <th>Nội dung tham luận</th>
          </tr>
        </thead>
        <tbody>
          {thamluans.map((item) => (
            <tr key={item.stt}>
              <td>{item.stt}</td>
              <td>{item.donvi}</td>
              <td>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0650b7", textDecoration: "underline" }}
                >
                  {item.tieude}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
