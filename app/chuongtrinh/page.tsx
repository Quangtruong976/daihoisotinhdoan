import Header from "../components/Header";
import ProgramFrames from "../components/ProgramFrames";
import "../style.css";

export default function PageChuongTrinh() {
  const phi1 = `- 14h45 - 15h00: Ổn định tổ chức
	- 15h00 – 15h05: Chào cờ (Quốc ca, Đoàn ca).
	- 15h05 – 15h10: Tuyên bố lý do, giới thiệu đại biểu.
	- 15h10 – 15h20: Bầu Đoàn Chủ tịch, Đoàn thư ký và Ban thẩm tra tư cách đại biểu.
	- 15h20 – 15h30: Thông qua chương trình, nội quy, quy chế làm việc của Đại hội.
	- 15h30 – 15h35: Báo cáo thẩm tra tư cách đại biểu.
    - 15h35 – 15h50: Tổng kết và khen thưởng phong trào thi đua chào mừng Đại hội đại biểu Đoàn TNCS Hồ Chí Minh tỉnh Lâm Đồng lần thứ I, nhiệm kỳ 2025 – 2030.
	- 15h50 – 16h00: Phổ biến, hướng dẫn một số nội dung liên quan đến tổ chức phục vụ tại Phiên thứ 2 của Đại hội.
	- 16h00 – 17h30: Tổ chức Diễn đàn “Tuổi trẻ Lâm Đồng tiên phong trong kỷ nguyên mới” (03 diễn đàn); thảo luận góp ý các dự thảo Văn kiện Đại hội đại biểu Đoàn TNCS Hồ Chí Minh tỉnh Lâm Đồng lần thứ I, nhiệm kỳ 2025 – 2030; văn kiện Đại hội Đoàn toàn quốc lần thứ XIII; một số nội dung góp ý sửa đổi, bổ sung Điều lệ Đoàn:
	   + Diễn đàn “Tăng cường giáo dục, bồi dưỡng lý tưởng – khơi dậy khát vọng cống hiến, lẽ sống thanh niên”.
       + Diễn đàn “Tuổi trẻ Lâm Đồng tiên phong, sáng tạo, xung kích, tình nguyện xây dựng quê hương Lâm Đồng giàu đẹp, văn minh”.
       + Diễn đàn “Phát huy vai trò tiên phong của tuổi trẻ tham gia xây dựng Đoàn, Đoàn tham gia xây dựng Đảng và chính quyền trong sạch, vững mạnh”.

`;
  const phi2 = `- 7h30 - 8h00: Đón tiếp đại biểu; ổn định tổ chức.
- 8h00 – 8h05: Chào cờ (Quốc ca, Đoàn ca).
	- 8h05 – 8h10: Báo cáo kết quả phiên làm việc thứ nhất, báo cáo tình hình đại biểu dự Đại hội.
	- 8h10 – 8h20: Phát biểu khai mạc Đại hội.
	- 8h20 – 8h30: Đoàn đại biểu thiếu nhi chúc mừng Đại hội.
	- 8h30 – 8h45: Trình bày tóm tắt dự thảo các văn kiện trình Đại hội.
	- 8h45 – 9h00: Video Clip một số kết quả nổi bật công tác Đoàn và phong trào thanh thiếu nhi tỉnh Lâm Đồng giai đoạn 2022 – 2025.
	- 9h00 – 9h15: Tham luận.
	- 9h15 – 9h35: Phát biểu chỉ đạo của Ban Thường vụ Tỉnh ủy.
	- 9h35 – 9h55: Phát biểu chỉ đạo của Ban Bí thư Trung ương Đoàn.
	- 9h55 – 10h00: Đoàn chủ tịch tiếp thu ý kiến chỉ đạo của Ban Thường vụ Tỉnh ủy, Ban Bí thư Trung ương Đoàn.
	- 10h00 – 10h20: Đại hội giải lao, chụp hình lưu niệm.
	- 10h20 – 10h30: Báo cáo tổng hợp góp ý văn kiện Đại hội Đoàn toàn tỉnh lần thứ I, văn kiện Đại hội Đoàn toàn quốc lần thứ XIII, một số nội dung sửa đổi, bổ sung Điều lệ Đoàn.
    - 10h30 – 10h40: Công bố Quyết định của Ban Thường vụ Trung ương Đoàn chỉ định Ban Chấp hành, Ban Thường vụ, Ủy ban Kiểm tra, Bí thư, Phó Bí thư Đoàn TNCS Hồ Chí Minh tỉnh Lâm Đồng khóa I, nhiệm kỳ 2025 – 2030; Quyết định chỉ định Đoàn đại biểu dự Đại hội Đoàn toàn quốc lần thứ XIII, nhiệm kỳ 2026 – 2031.
    - 10h40 – 10h50: Ra mắt Ban Chấp hành Tỉnh đoàn khóa I, nhiệm kỳ 2025 – 2030.
	- 10h50 – 11h00: Tri ân các đồng chí Ban Chấp hành Tỉnh đoàn không tái cử.
	- 11h00 – 11h10: Thông qua Nghị quyết Đại hội.
	- 11h10 – 11h15: Bế mạc Đại hội.
	- 11h15 – 11h20: Chào cờ (Quốc ca, Đoàn ca).
`;

  return (
    <div className="main-container">
     
      <div className="program-title">
    Chương trình Đại hội đại biểu Đoàn TNCS Hồ Chí Minh tỉnh Lâm Đồng <br/> 
    lần thứ I, nhiệm kỳ 2025 – 2030  <br/>-----
  </div>
      {/* Chương trình Phiên 1 & Phiên 2 */}
      <ProgramFrames phi1Content={phi1} phi2Content={phi2} />

    </div>
  );
}
