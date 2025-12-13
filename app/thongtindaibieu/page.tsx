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
      icon: <FaClock className="text-blue-500 text-2xl" />,
      title: "Thời gian tổ chức Đại hội",
      content: `Phiên 1: 15h00 – 17h30
Phiên 2: 08h00 – 11h20`,
    },
    {
      icon: <FaGavel className="text-red-500 text-2xl" />,
      title: "Nội quy, Quy chế Đại hội",
      content: `Đại biểu thực hiện nghiêm túc:
- Giờ giấc
- Trang phục
- Vị trí ngồi
Tuân thủ tuyệt đối hướng dẫn của Ban Tổ chức.`,
    },
    {
      icon: <FaTshirt className="text-green-500 text-2xl" />,
      title: "Trang phục tại Đại hội",
      content: `Phiên 1: Áo Thanh niên Việt Nam – quần sẫm màu
Các phiên còn lại: Thực hiện theo hướng dẫn của Ban Tổ chức.`,
    },
    {
      icon: <FaHotel className="text-purple-500 text-2xl" />,
      title: "Thông tin ăn – nghỉ",
      content: `Nghỉ: Khách sạn …
Ăn: Nhà ăn …
Giờ ăn: Theo lịch thống nhất của Ban Tổ chức.`,
    },
    {
      icon: <FaPhoneAlt className="text-orange-500 text-2xl" />,
      title: "Số điện thoại liên hệ",
      content: `Hậu cần: 09xx.xxx.xxx – Cán bộ A
Y tế: 09xx.xxx.xxx – Cán bộ B
Trực nơi nghỉ: 09xx.xxx.xxx`,
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        SỔ TAY THÔNG TIN ĐẠI BIỂU
      </h1>

      <div className="space-y-6">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center p-5 justify-between text-left group"
              >
                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    {item.icon}
                  </div>
                  <h2 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h2>
                </div>
                <FaChevronDown
                  className={`text-gray-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-blue-500" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 pb-6 text-gray-700 whitespace-pre-line leading-relaxed transition-max-height duration-500 ease-in-out ${
                  isOpen ? "max-h-96" : "max-h-0 overflow-hidden"
                }`}
              >
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
