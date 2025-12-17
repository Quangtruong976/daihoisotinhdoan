"use client";

import { useState, useEffect, useRef } from "react";
import { FaClock, FaGavel, FaTshirt, FaHotel, FaPhoneAlt, FaChevronDown } from "react-icons/fa";

export default function ThongTinDaiBieu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Items với content là JSX, không dùng template string
  const items = [
    {
      icon: <FaClock />,
      title: "Thời gian tổ chức Đại hội",
      content: (
        <div className="whitespace-pre-line">
          <p><strong>1. Thời gian:</strong> Đại hội diễn ra từ ngày 19/12/2025 đến ngày 20/12/2025</p>
          <p>- Phiên 1: bắt đầu lúc 15h00 – 17h30</p>
          <p>- Phiên 2: bắt đầu lúc 08h00 – 11h20</p>
          <p><em>(Đại biểu vui lòng có mặt trước 30 phút để ổn định tổ chức và vị trí chỗ ngồi)</em></p>
          <p><strong>2. Địa điểm:</strong> tại Hội trường Nhà Văn hóa Lao động tỉnh Lâm Đồng</p>
          <p><em>(Số 01 Trần Quốc Toản, phường Xuân Hương - Đà Lạt, tỉnh Lâm Đồng).</em></p>
          <p> * Ban Tổ chức sẽ đón tiếp đại biểu Đoàn các xã, phường, đặc khu, Đoàn trực thuộc về dự Đại hội từ 8 giờ 00’ đến 11 giờ 00’ ngày 19/12/2025 tại: 
          <p><strong> - Đoàn An Điều dưỡng 198</strong> - số 2B Lữ Gia, phường Lâm Viên Đà Lạt</p>
          <p><strong> - Nhà khách Tổng Liên đoàn</strong> - Số 01 Yersin, phường Xuân Hương Đà Lạt</p></p>
        </div>
      ),
    },
    {
      icon: <FaGavel />,
      title: "Nội quy, Quy chế Đại hội",
      content: (
        <div className="whitespace-pre-line">
  <p><strong>* Nội quy:</strong> Đại biểu thực hiện nghiêm túc:</p>
  <p>- Giờ giấc làm việc của Đại hội</p>
  <p>- Trang phục tại các Phiên của Đại hội</p>
  <p>- Vị trí ngồi theo sơ đồ do Ban Tổ chức đã sắp xếp;</p>
  <p>Tuân thủ tuyệt đối hướng dẫn của Ban Tổ chức.</p>
  <p>
  <strong>* Xem chi tiết </strong><a 
      href="https://drive.google.com/file/d/19dCLfzBiEKgcOkkwqkGQhzd7_hB8BzON/view?usp=sharing" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-600 underline hover:text-blue-800"
    >
      Nội quy, Quy chế Đại hội
    </a>.
  </p>
</div>
      ),
    },
    {
      icon: <FaTshirt />,
      title: "Trang phục tại Đại hội",
      content: (
        <div className="whitespace-pre-line">
  <p>* Đại biểu phải đảm bảo Trang phục đúng quy định tại các Phiên làm việc của Đại hội, cụ thể như sau:</p>
  <p><strong>1. Phiên thứ nhất:</strong></p>
<p>- Thời gian: Chiều ngày 19/12/2025.</p>
<p>- Trang phục:</p>
<p>+ Đại biểu Nam: Mặc áo Thanh niên Việt Nam, thắt cà vạt màu đỏ có huy hiệu Đoàn, Áo khoác Đại hội, quần tây sẫm màu, đi giày hoặc dép có quai hậu; đeo thẻ đại biểu trong suốt thời gian Đại hội.  </p>
<p>+ Đại biểu Nữ: Mặc áo Thanh niên Việt Nam, thắt cà vạt màu đỏ có huy hiệu Đoàn, Áo khoác Đại hội, quần tây hoặc váy sẫm màu (váy dài qua đầu gối), đi giày hoặc dép có quai hậu; đeo thẻ đại biểu trong suốt thời gian Đại hội.  </p>
<p><strong>2. Phiên trọng thể:</strong></p>
<p>- Thời gian: Sáng ngày 20/12/2025.</p>
<p>- Trang phục:</p>
<p>+ Đại biểu Nam: Mặc áo Thanh niên Việt Nam, thắt cà vạt màu đỏ có huy hiệu Đoàn, Áo Vest, đeo huy hiệu Đại hội, quần tây sẫm màu, đi giày hoặc dép có quai hậu; đeo thẻ đại biểu trong suốt thời gian Đại hội.  </p>
<p>+ Đại biểu Nữ: Mặc áo dài Thanh niên Việt Nam, đeo huy hiệu Đại hội, đi giày hoặc dép có quai hậu; đeo thẻ đại biểu trong suốt thời gian Đại hội.  </p>
<p>+ Đại biểu lực lượng vũ trang: Mặc trang phục của ngành theo quy định. </p>
<p>+ Đại biểu là người dân tộc thiểu số: Mặc trang phục truyền thống của dân tộc, đi giày hoặc dép có quai hậu. </p>
<p>Lưu ý: Cà vạt, huy điệu Đại hội, Áo khoác đồng phục sẽ được Ban tổ chức gửi trong phần quà tặng của Đại biểu. Đại biểu không mặc quần hoặc váy Jean, kaki.</p>

</div>

      ),
    },
    {
      icon: <FaHotel />,
      title: "Thông tin ăn – nghỉ",
      content: (
        <div className="whitespace-pre-line">
          <p> * Ban Tổ chức bố trí ăn nghỉ cho đại biểu tại Khách sạn nơi nghỉ của đại biểu trong thời gian diễn ra Đại hội, cụ thể:</p>
          <p> - Đoàn An Điều dưỡng 198 - số 2B Lữ Gia, phường Lâm Viên Đà Lạt</p>
          <p> - Nhà khách Tổng Liên đoàn - Số 01 Yersin, phường Xuân Hương Đà Lạt</p>
          <p> * Buổi cơm thân chào mừng thành công Đại hội: tại Nhà hàng Nhà khách Tổng Liên đoàn - Số 01 Yersin, phường Xuân Hương Đà Lạt</p>
        </div>
      ),
    },
    {
      icon: <FaPhoneAlt />,
      title: "Số điện thoại liên hệ",
      content: (
        <div className="whitespace-pre-line">
          <p><strong>Hậu cần:</strong> 09xx.xxx.xxx – Đồng chí Phan Xuân Tấn</p>
          <p><strong>Y tế:</strong> 09xx.xxx.xxx – Cán bộ B</p>
          <p><strong>Trực nơi nghỉ:</strong> 09xx.xxx.xxx</p>
        </div>
      ),
    },
  ];

  // Đóng card khi click ngoài container
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="p-4 sm:p-6 max-w-3xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-base sm:text-lg font-semibold text-center mb-6 text-sky-700">
        SỔ TAY THÔNG TIN ĐẠI HỘI
      </h1>

      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex(isOpen ? null : index);
                }}
                className="w-full flex items-center justify-between p-3 text-left group bg-sky-400 hover:bg-sky-500 rounded-t-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-yellow-100 text-yellow-400 flex items-center justify-center group-hover:bg-yellow-200">
                    {item.icon}
                  </div>
                  <h2 className="text-sm sm:text-base font-medium text-white">{item.title}</h2>
                </div>
                <FaChevronDown className={`text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </button>

              {isOpen && (
                <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-700 leading-relaxed bg-white">
                  {item.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
