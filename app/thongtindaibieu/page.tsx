"use client";

import { useState } from "react";
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

  const items = [
    {
      icon: <FaClock className="text-white text-3xl" />,
      title: "Thời gian tổ chức Đại hội",
      content: `Phiên 1: 15h00 – 17h30
Phiên 2: 08h00 – 11h20`,
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <FaGavel className="text-white text-3xl" />,
      title: "Nội quy, Quy chế Đại hội",
      content: `Đại biểu thực hiện nghiêm túc:
- Giờ giấc
- Trang phục
- Vị trí ngồi
Tuân thủ tuyệt đối hướng dẫn của Ban Tổ chức.`,
      color: "from-red-400 to-red-600",
    },
    {
      icon: <FaTshirt className="text-white text-3xl" />,
      title: "Trang phục tại Đại hội",
      content: `Phiên 1: Áo Thanh niên Việt Nam – quần sẫm màu
Các phiên còn lại: Thực hiện theo hướng dẫn của Ban Tổ chức.`,
      color: "from-green-400 to-green-600",
    },
    {
      icon: <FaHotel className="text-white text-3xl" />,
      title: "Thông tin ăn – nghỉ",
      content: `Nghỉ: Khách sạn …
Ăn: Nhà ăn …
Giờ ăn: Theo lịch thống nhất của Ban Tổ chức.`,
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <FaPhoneAlt className="text-white text-3xl" />,
      title: "Số điện thoại liên hệ",
      content: `Hậu cần: 09xx.xxx.xxx – Cán bộ A
Y tế: 09xx.xxx.xxx – Cán bộ B
Trực nơi nghỉ: 09xx.xxx.xxx`,
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        SỔ TAY THÔNG TIN ĐẠI BIỂU
      </h1>

      <div className="space-y-6">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`bg-gradient-to-r ${item.color} rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-full bg-white/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-white">
                    {item.title}
                  </h2>
                </div>
                <FaChevronDown
                  className={`text-white transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-white/90 whitespace-pre-line leading-relaxed bg-white/5 backdrop-blur-sm">
                  {item.content}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="h-10"></div>
    </div>
  );
}
