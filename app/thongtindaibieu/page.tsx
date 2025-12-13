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
      icon: <FaClock className="text-blue-600 text-3xl" />,
      title: "Thời gian tổ chức Đại hội",
      content: `Phiên 1: 15h00 – 17h30
Phiên 2: 08h00 – 11h20`,
    },
    {
      icon: <FaGavel className="text-red-600 text-3xl" />,
      title: "Nội quy, Quy chế Đại hội",
      content: `Đại biểu thực hiện nghiêm túc:
- Giờ giấc
- Trang phục
- Vị trí ngồi
Tuân thủ tuyệt đối hướng dẫn của Ban Tổ chức.`,
    },
    {
      icon: <FaTshirt className="text-green-600 text-3xl" />,
      title: "Trang phục tại Đại hội",
      content: `Phiên 1: Áo Thanh niên Việt Nam – quần sẫm màu
Các phiên còn lại: Thực hiện theo hướng dẫn của Ban Tổ chức.`,
    },
    {
      icon: <FaHotel className="text-purple-600 text-3xl" />,
      title: "Thông tin ăn – nghỉ",
      content: `Nghỉ: Khách sạn …
Ăn: Nhà ăn …
Giờ ăn: Theo lịch thống nhất của Ban Tổ chức.`,
    },
    {
      icon: <FaPhoneAlt className="text-orange-600 text-3xl" />,
      title: "Số điện thoại liên hệ",
      content: `Hậu cần: 09xx.xxx.xxx – Cán bộ A
Y tế: 09xx.xxx.xxx – Cán bộ B
Trực nơi nghỉ: 09xx.xxx.xxx`,
    },
  ];

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        SỔ TAY THÔNG TIN ĐẠI BIỂU
      </h1>

      <div className="space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border rounded-xl bg-white shadow"
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <div className="flex items-center gap-4">
                  {item.icon}
                  <h2 className="text-lg font-semibold">
                    {item.title}
                  </h2>
                </div>
                <FaChevronDown
                  className={`transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 text-gray-700 whitespace-pre-line leading-relaxed">
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
