"use client";
import { FaClock, FaGavel, FaTshirt, FaHotel, FaPhoneAlt } from "react-icons/fa";

export default function ThongTinDaiBieu() {
  const items = [
    {
      icon: <FaClock className="text-blue-600 text-4xl" />,
      title: "Thời gian tổ chức Đại hội",
      content: "Phiên 1: Từ 15h00p - 17h30p,\n Phiên 2: Từ 8h00p - 11h20p ",
    
    },
    {
      icon: <FaGavel className="text-red-600 text-4xl" />,
      title: "Nội quy, Quy chế Đại hội",
      content:
        "Đại biểu thực hiện nghiêm túc giờ giấc, trang phục, vị trí ngồi; \n tuân thủ hướng dẫn của Ban Tổ chức.",
    },
    {
      icon: <FaTshirt className="text-green-600 text-4xl" />,
      title: "Trang phục tại Đại hội",
      content:
        "Phiên thứ 1: Áo thanh niên Việt Nam – quần sẫm màu. \n Ngày làm việc còn lại: Trang phục theo hướng dẫn.",
    },
    {
      icon: <FaHotel className="text-purple-600 text-4xl" />,
      title: "Thông tin địa điểm ăn – nghỉ",
      content:
        "Đại biểu nghỉ tại khách sạn …; Ăn tại Nhà ăn …; Giờ ăn theo lịch của Ban Tổ chức.",
    },
    {
      icon: <FaPhoneAlt className="text-orange-600 text-4xl" />,
      title: "Số điện thoại liên hệ",
      content:
        "Hậu cần: 09xx.xxx.xxx – Cán bộ A\nY tế: 09xx.xxx.xxx – Cán bộ B\nTrực các điểm nghỉ: 09xx.xxx.xxx",
    },
  ];

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        SỔ TAY THÔNG TIN ĐẠI BIỂU
      </h1>

      <div className="grid gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl bg-white shadow hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              {item.icon}
              <div>
                <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-10"></div>
    </div>
  );
}
