// app/components/VanKienFrames.tsx
interface VanKienProps {
  documents: { title: string; link: string }[];
}

export default function VanKienFrames({ documents }: VanKienProps) {
  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
      <div className="program-title" style={{ fontWeight: "bold", textAlign: "center", fontSize: 20, marginBottom: 25 }}>
        Văn kiện Đại hội đại biểu Đoàn TNCS Hồ Chí Minh tỉnh Lâm Đồng <br/>
         lần thứ I, nhiệm kỳ 2025 – 2030 <br/>-----
      </div>

      <div className="vankien-frame">
        <ol>
          {documents.map((doc, idx) => (
            <li key={idx} style={{ marginBottom: 12 }}>
              <a
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#0072bc", fontWeight: "bold" }}
              >
                {doc.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
