// app/components/ThamLuanFrames.tsx
interface ThamLuanFramesProps {
  thamluans: { title: string; link: string }[];
}

export default function ThamLuanFrames({ thamluans }: ThamLuanFramesProps) {
  return (
    <div style={{ maxWidth: 950, margin: "auto", padding: 20 }}>
      <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: 20 }}>
        Danh sách tham luận
      </h2>
      <div className="thamluan-frame">
        {thamluans.map((item, idx) => (
          <p key={idx}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0650b7", textDecoration: "underline" }}
            >
              {item.title}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}
