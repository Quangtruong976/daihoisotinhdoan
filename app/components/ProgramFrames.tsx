
interface ProgramFramesProps {
  phi1Content: string;
  phi2Content: string;
}
export default function ProgramFrames({ phi1Content, phi2Content }: ProgramFramesProps) {
  return (
    <div className="program-container">
      {/* Phiên thứ nhất */}
      <div className="program-frame">
        <h3>
          PHIÊN THỨ NHẤT
          <br />
          <span className="sub-time">(Bắt đầu lúc 15h00 – 17h30 ngày 18/12/2025)</span>
        </h3>

        <div className="program-content">
          {phi1Content.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>

      {/* Phiên thứ hai */}
      <div className="program-frame">
        <h3>
          PHIÊN THỨ HAI – Phiên trọng thể Đại hội
          <br />
          <span className="sub-time">(Bắt đầu lúc 8h00 – 11h30 ngày 19/12/2025)</span>
        </h3>

        <div className="program-content">
          {phi2Content.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
