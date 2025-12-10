// app/sodo/page.tsx
import Header from "../components/Header";
import SoDoFrames from "../components/SoDoFrames";
import "../style.css";

export default function PageSoDo() {
  const phi1Image = "/images/sodophien1.png"; // ảnh sơ đồ phiên 1
  const phi2Image = "/images/sodophien1.png"; // ảnh sơ đồ phiên trọng thể

  return (
    <div className="main-container">
    
      <SoDoFrames phi1Image={phi1Image} phi2Image={phi2Image} />
   
    </div>
  );
}
