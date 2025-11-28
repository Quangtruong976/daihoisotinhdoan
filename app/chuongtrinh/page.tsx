import Header from "../components/Header";
import ProgramFrames from "../components/ProgramFrames";
import "../style.css";

export default function PageChuongTrinh() {
  const phi1 = `- 14h45 - 15h00: Ổn định tổ chức
- 15h00 - 15h05: Chào cờ (Quốc ca, Đoàn ca)
- 15h05 - 15h10: Tuyên bố lý do, giới thiệu đại biểu
- 15h10 - 15h20: Bầu Đoàn Chủ tịch, Đoàn thư ký và Ban thẩm tra tư cách đại biểu
- 15h20 - 15h30: Thông qua chương trình, nội quy, quy chế làm việc
- 15h30 - 15h35: Báo cáo thẩm tra tư cách đại biểu
- 15h35 - 15h45: Báo cáo kiểm điểm sự lãnh đạo, chỉ đạo của BCH Tỉnh đoàn khóa cũ
- 15h45 - 15h55: Phổ biến một số nội dung có liên quan đến tổ chức phục vụ Đại hội
- 15h55 - 17h30: Diễn đàn “Tuổi trẻ Lâm Đồng tiên phong trong kỷ nguyên mới”; 
thảo luận góp ý các dự thảo Văn kiện Đại hội:
	+ Diễn đàn: “Tuổi trẻ tiên phong trong chuyển đổi số và đổi mới sáng tạo”.
	+ Diễn đàn: “Tuổi trẻ với Khát vọng cống hiến - Xung kích dựng xây quê hương Lâm Đồng giàu đẹp trong kỷ nguyên mới”.
	+ Diễn đàn: “Phát huy vai trò, trách nhiệm của thanh niên tham gia xây dựng Đảng, xây dựng chính quyền”.
`;
  const phi2 = `- 7h30 - 8h00: Đón tiếp đại biểu; ổn định tổ chức.
- 8h00 - 8h20: Chương trình văn nghệ chào mừng Đại hội.
	- 8h20 - 8h25: Chào cờ (Quốc ca, Đoàn ca).
	- 8h25 - 8h30: Báo cáo kết quả phiên làm việc thứ nhất, báo cáo tình hình đại biểu dự Đại hội.
	- 8h30 - 8h40: Phát biểu khai mạc Đai hội.
	- 8h40 - 8h50: Đoàn đại biểu thiếu nhi chúc mừng Đại hội.
	- 8h50 - 9h00: Trình bày tóm tắt dự thảo Báo cáo chính trị của Ban Chấp hành Tỉnh đoàn trình Đại hội đại biểu Đoàn TNCS Hồ Chí Minh tỉnh Lâm Đồng lần thứ I, nhiệm kỳ 2025 – 2030.
	- 9h00 - 9h10: Video Clip một số kết quả nổi bật công tác Đoàn và phong trào thanh thiếu nhi tỉnh Lâm Đồng giai đoạn 2022 – 2025.
	- 9h10 - 9h25: Tham luận.
	- 9h25 - 9h45: Phát biểu chỉ đạo của Ban Thường vụ Tỉnh ủy.
	- 9h45 - 10h05: Phát biểu chỉ đạo của Ban Bí thư Trung ương Đoàn.
	- 10h05 - 10h10: Đoàn chủ tịch tiếp thu ý kiến chỉ đạo của Ban Thường vụ Tỉnh ủy, Ban Bí thư Trung ương Đoàn.
	- 10h10 - 10h30: Đại hội giải lao, chụp hình lưu niệm.
	- 10h30 - 10h40: Báo cáo tổng hợp góp ý văn kiện Đại hội Đoàn toàn tỉnh lần thứ I, văn kiện Đại hội Đoàn toàn quốc lần thứ XIII, một số nội dung sửa đổi, bổ sung Điều lệ Đoàn.
- 10h40 - 10h50: Công bố Quyết định của Ban Thường vụ Trung ương Đoàn chỉ định Ban Chấp hành, Ban Thường vụ, Ủy ban Kiểm tra, Bí thư, Phó Bí thư Đoàn TNCS Hồ Chí Minh tỉnh Lâm Đồng khóa I, nhiệm kỳ 2025 – 2030; Quyết định chỉ định Đoàn đại biểu dự Đại hội Đoàn toàn quốc lần thứ XIII, nhiệm kỳ 2026 – 2031.
- 10h50 - 11h00: Ra mắt Ban Chấp hành Tỉnh đoàn khóa I, nhiệm kỳ 2025 - 2030
	- 11h00 - 11h10: Tri ân các đồng chí Ban Chấp hành Tỉnh đoàn khóa cũ.
	- 11h10 - 11h20: Thông qua Nghị quyết Đại hội.
	- 11h20 - 11h25: Bế mạc Đại hội.
	- 11h25 - 11h30: Chào cờ (Quốc ca, Đoàn ca).

`;

  return (
    <div className="main-container">
      <Header />
      <div className="program-title">
    Chương trình Đại hội đại biểu Đoàn TNCS Hồ Chí Minh tỉnh Lâm Đồng <br/> 
    lần thứ I, nhiệm kỳ 2025 – 2030  <br/>-----
  </div>
      {/* Chương trình Phiên 1 & Phiên 2 */}
      <ProgramFrames phi1Content={phi1} phi2Content={phi2} />

      <footer className="footer">@2025 - Tỉnh đoàn Lâm Đồng</footer>
    </div>
  );
}
