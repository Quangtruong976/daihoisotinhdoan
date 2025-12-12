"use client";
import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaClock,
  FaGavel,
  FaTshirt,
  FaHotel,
  FaPhoneAlt,
} from "react-icons/fa";

export default function ThongTinDaiBieu() {
  const items = [
    {
      icon: <FaClock className="text-blue-700 text-3xl" />,
      title: "Thời gian tổ chức Đại hội",
      content:
        "Đại hội diễn ra trong 02 ngày, từ ngày … đến ngày … tại Hội trường …",
    },
    {
      icon: <FaGavel className="text-red-700 text-3xl" />,
      title: "Nội quy, Quy chế Đại hội",
      content:
        "- Thực hiện đúng giờ giấc.\n- Tuân thủ hướng dẫn của Ban Tổ chức.\n- Trang phục nghiêm túc, lịch sự.\n- Ngồi đúng vị trí quy định theo sơ đồ.\n- Không tự ý rời vị trí trong giờ làm việc.",
    },
    {
      icon: <FaTshirt className="text-green-700 text-3xl" />,
      title: "Trang phục tại Đại hội",
      content:
        "Ngày khai mạc: Áo thanh niên Việt Nam – quần sẫm màu.\nNgày làm việc tiếp theo: Trang phục theo hướng dẫn của Ban Tổ chức.",
    },
    {
      icon: <FaHotel className="text-purple-700 text-3xl" />,
      title: "Thông tin địa điểm ăn – nghỉ",
      content:
        "Đại biểu nghỉ tại khách sạn …\nĂn tại Nhà ăn …\nGiờ ăn theo lịch của Ban Tổ chức.",
    },
    {
      icon: <FaPhoneAlt className="text-orange-700 text-3xl" />,
      title: "Số điện thoại liên hệ",
      content:
        "Hậu cần: 09xx.xxx.xxx – Cán bộ A\nY tế: 09xx.xxx.xxx – Cán bộ B\nĐiểm nghỉ: 09xx.xxx.xxx",
    },

    // ======= Bạn thêm nội dung mới ở đây thoải mái =======
    // {
    //   icon: <FaClock className="text-blue-700 text-3xl" />,
    //   title: "Tiêu đề mới",
    //   content: "Nội dung mới của bạn…",
    // },
    // =====================================================
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#004AAD] tracking-wide">
        SỔ TAY THÔNG TIN ĐẠI BIỂU
      </h1>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-4"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-lg font-semibold text-gray-800">
                  {item.title}
                </span>
              </div>

              {openIndex === idx ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaChevronDown className="text-gray-600" />
              )}
            </button>

            {openIndex === idx && (
              <div className="px-6 pb-4 text-gray-700 whitespace-pre-line leading-relaxed">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="h-10" />
    </div>
  );
}
