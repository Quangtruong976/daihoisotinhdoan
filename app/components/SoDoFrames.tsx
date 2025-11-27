// app/components/SoDoFrames.tsx
interface SoDoFramesProps {
  phi1Image: string;
  phi2Image: string;
}

export default function SoDoFrames({ phi1Image, phi2Image }: SoDoFramesProps) {
  return (
    <div style={{ maxWidth: 950, margin: "auto", padding: 20 }}>

      <div className="program-title" style={{ fontWeight: "bold", textAlign: "center", fontSize: 20, marginBottom: 25 }}>
        Sơ đồ vị trí chổ ngồi đại biểu <br/>-----
      </div>




      {/* Phiên thứ nhất */}
      <div className="program-frame">
        <h3 style={{ textAlign: "center" }}>
          I. PHIÊN THỨ NHẤT
        </h3>
        <div
          style={{
            border: "1px solid #0072bc",
            borderRadius: 8,
            padding: 10,
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          <img
            src={phi1Image}
            alt="Sơ đồ chỗ ngồi phiên 1"
            style={{ maxWidth: "100%", height: "auto", borderRadius: 4 }}
          />
        </div>
      </div>

      {/* Phiên thứ hai */}
      <div className="program-frame">
        <h3 style={{ textAlign: "center" }}>
          II. PHIÊN TRỌNG THỂ 
        </h3>
        <div
          style={{
            border: "1px solid #0072bc",
            borderRadius: 8,
            padding: 10,
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <img
            src={phi2Image}
            alt="Sơ đồ chỗ ngồi phiên trọng thể"
            style={{ maxWidth: "100%", height: "auto", borderRadius: 4 }}
          />
        </div>
      </div>
    </div>
  );
}
