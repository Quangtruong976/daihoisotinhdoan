import Header from "../components/Header";
import VanKienFrames from "../components/VanKienFrames";
import "../style.css";

export default function PageVanKien() {
  const documents = [
    {
      title: "1. Báo cáo chính trị của Ban Chấp hành Tỉnh đoàn (lâm thời) trình Đại hội",
      link: "https://drive.google.com/file/d/15xrkcGSkoZyX_u3RmGFL4D8vKkT4FJ3a/view?usp=sharing", // thay bằng ID file Google Drive
    },
    {
      title: "2. Báo cáo kiểm điểm của Ban Chấp hành Tỉnh đoàn",
      link: "https://drive.google.com/file/d/15jOs_aeaPSn0X5Pq9c0JzWL2zeV_8KrP/view?usp=sharing",
    },
    {
      title: "3. Nghị quyết Đại hội",
      link: "https://drive.google.com/file/d/16nBUORoOk_-12qky7bX8DSrA_KjIg_77/view?usp=sharing",
    },
    {
      title: "4. Chương trình hành động thực hiện nghị quyết Đại hội",
      link: "https://drive.google.com/file/d/16nBUORoOk_-12qky7bX8DSrA_KjIg_77/view?usp=sharing",
    },
  ];

  return (
    <div className="main-container">
    
      <VanKienFrames documents={documents} />
     
    </div>
  );
}
