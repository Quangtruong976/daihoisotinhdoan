"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaClock,
  FaGavel,
  FaTshirt,
  FaHotel,
  FaPhoneAlt,
  FaChevronDown,
} from "react-icons/fa";

export default function ThongTinDaiBieu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      icon: <FaClock />,
      title: "Thời gian tổ chức Đại hội",
      content: `Phiên 1: 15h00 – 17h30
Phiên 2: 08h00 – 11h20
Vui lòng có mặt trước 10 phút để ổn định chỗ ngồi.`,
    },
    {
      icon: <FaGavel />,
      title: "Nội quy, Quy chế Đại hội",
      content: `Đại biểu thực hiện nghiêm túc:
- Giờ giấc
- Trang phục
- Vị trí ngồi
Tuân thủ tuyệt đối hướng dẫn của Ban Tổ chức.`,
    },
    {
      icon: <FaTshirt />,
      title: "Trang phục tại Đại hội",
      content: `Phiên 1: Áo Thanh niên Việt Nam – quần sẫm màu
Các phiên còn lại: Thực hiện theo hướng dẫn của Ban Tổ chức.`,
    },
    {
      icon: <FaHotel />,
      title: "Thông tin ăn – nghỉ",
      content: `Nghỉ: Khách sạn …
Ăn: Nhà ăn …
Giờ ăn: Theo lịch thống nhất của Ban Tổ chức.`,
    },
    {
      icon: <FaPhoneAlt />,
      title: "Số điện thoại liên hệ",
      content: `Hậu cần: 09xx.xxx.xxx – Cán bộ A
Y tế: 09xx.xxx.xxx – Cán bộ B
Trực nơi nghỉ: 09xx.xxx.xxx`,
    },
  ];

  // Đóng card khi click ngoài container
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="p-4 sm:p-6 max-w-3xl mx-auto bg-gray-50 min-h-screen"
    >
      {/* Chữ Sổ tay nhỏ hơn */}
      <h1 className="text-base sm:text-lg font-semibold text-center mb-6 text-sky-500">
        SỔ TAY THÔNG TIN ĐẠI HỘI
      </h1>

      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
            >
              {/* Thanh tiêu đề card */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // tránh trigger click ngoài
                  setOpenIndex(isOpen ? null : index);
                }}
                className="w-full flex items-center justify-between p-3 text-left group bg-sky-400 hover:bg-sky-500 rounded-t-2xl"
              >
                <div className="flex items-center gap-3">
                  {/* Icon màu vàng */}
                  <div className="p-2 rounded-lg bg-yellow-100 text-yellow-400 flex items-center justify-center group-hover:bg-yellow-200">
                    {item.icon}
                  </div>
                  {/* Tiêu đề nhỏ hơn */}
                  <h2 className="text-sm sm:text-base font-medium text-white">
                    {item.title}
                  </h2>
                </div>
                <FaChevronDown
                  className={`text-white transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Nội dung chỉ hiển thị khi nhấn */}
              {isOpen && (
                <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-700 whitespace-pre-line leading-relaxed bg-white">
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
