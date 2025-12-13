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

  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-center mb-8 text-sky-400">
        SỔ TAY THÔNG TIN ĐẠI BIỂU
      </h1>

      <div className="space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left group"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="p-3 rounded-lg bg-sky-100 group-hover:bg-sky-200 text-sky-400 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                </div>
                <FaChevronDown
                  className={`text-gray-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-sky-400" : ""
                  }`}
                />
              </button>

              <div
                className={`px-4 sm:px-6 pb-4 sm:pb-6 text-gray-700 whitespace-pre-line leading-relaxed transition-max-height duration-500 ease-in-out ${
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
