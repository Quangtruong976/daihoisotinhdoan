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
          <p>(Đại biểu vui lòng có mặt trước 30 phút để ổn định tổ chức và vị trí chỗ ngồi)</p>
          <p><strong>2. Địa điểm:</strong> tại Hội trường Nhà Văn hóa Lao động tỉnh Lâm Đồng</p>
          <p><em>(Số 01 Trần Quốc Toản, phường Xuân Hương - Đà Lạt, tỉnh Lâm Đồng).</em></p>
          <p>👤 Ban Tổ chức sẽ đón tiếp đại biểu Đoàn các xã, phường, đặc khu, Đoàn trực thuộc về dự Đại hội từ 8 giờ 00’ đến 11 giờ 00’ ngày 19/12/2025 tại: Đoàn An Điều dưỡng 198 - số 2B Lữ Gia, phường Lâm Viên Đà Lạt và Nhà khách Tổng Liên đoàn - Số 01 Yersin, phường Xuân Hương Đà Lạt, tỉnh Lâm Đồng.</p>
        </div>
      ),
    },
    {
      icon: <FaGavel />,
      title: "Nội quy, Quy chế Đại hội",
      content: (
        <div className="whitespace-pre-line">
          <p><strong>1. Nội quy:</strong> Đại biểu thực hiện nghiêm túc:</p>
          <p>- Giờ giấc làm việc của Đại hội</p>
          <p>- Trang phục</p>
          <p>- Vị trí ngồi theo sơ đồ do Ban Tổ chức đã sắp xếp;</p>
          <p>Tuân thủ tuyệt đối hướng dẫn của Ban Tổ chức.</p>
        </div>
      ),
    },
    {
      icon: <FaTshirt />,
      title: "Trang phục tại Đại hội",
      content: (
        <div className="whitespace-pre-line">
          <p><strong>Phiên 1:</strong> Áo Thanh niên Việt Nam – quần sẫm màu</p>
          <p><strong>Các phiên còn lại:</strong> Thực hiện theo hướng dẫn của Ban Tổ chức.</p>
        </div>
      ),
    },
    {
      icon: <FaHotel />,
      title: "Thông tin ăn – nghỉ",
      content: (
        <div className="whitespace-pre-line">
          <p><strong>Nghỉ:</strong> Khách sạn …</p>
          <p><strong>Ăn:</strong> Nhà ăn …</p>
          <p><strong>Giờ ăn:</strong> Theo lịch thống nhất của Ban Tổ chức.</p>
        </div>
      ),
    },
    {
      icon: <FaPhoneAlt />,
      title: "Số điện thoại liên hệ",
      content: (
        <div className="whitespace-pre-line">
          <p><strong>Hậu cần:</strong> 09xx.xxx.xxx – Cán bộ A</p>
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
      <h1 className="text-base sm:text-lg font-semibold text-center mb-6 text-sky-500">
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
