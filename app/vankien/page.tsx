import Header from "../components/Header";
import VanKienFrames from "../components/VanKienFrames";
import "../style.css";

export default function PageVanKien() {
  const documents = [
    {
      title: "1. Báo cáo chính trị của Ban Chấp hành Tỉnh đoàn (lâm thời) trình Đại hội",
      link: "https://drive.google.com/file/d/1HHUKi6-eQGfIIUV8xRpO-vMUyFv_vW3S/view?usp=share_link", // thay bằng ID file Google Drive
    },
    {
      title: "2. Báo cáo kiểm điểm của Ban Chấp hành Tỉnh đoàn",
      link: "https://drive.google.com/uc?export=view&id=DEF456",
    },
    {
      title: "3. Nghị quyết Đại hội",
      link: "https://drive.google.com/uc?export=view&id=GHI789",
    },
    {
      title: "4. Chương trình hành động thực hiện nghị quyết Đại hội",
      link: "https://drive.google.com/uc?export=view&id=JKL012",
    },
  ];

  return (
    <div className="main-container">
    
      <VanKienFrames documents={documents} />
     
    </div>
  );
}
