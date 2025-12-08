"use client";
import { useState } from "react";
import Link from "next/link";

export default function DiemDanhPage() {
  // Số lượng cứng (bạn có thể chỉnh theo danh sách thật)
  const tongSo = 250;

  const [coMat, setCoMat] = useState(0);

  const vang = tongSo - coMat;
  const tile = ((coMat / tongSo) * 100).toFixed(1);

  const duDieuKien = coMat >= tongSo * (2 / 3);

  return (
    <div className="main-container p-4 max-w-[600px] mx-auto">
      <h2 className="text-xl font-bold text-center text-blue-900 mb-4">
        Thống kê điểm danh Đại biểu
      </h2>

      <div className="p-4 rounded-xl shadow-lg bg-white border border-gray-300 mb-6">
        <p><b>Ngày/ Phiên:</b> Phiên thứ nhất</p>
        <p><b>Tổng số đại biểu:</b> {tongSo}</p>
        <p><b>Có mặt:</b> {coMat}</p>
        <p><b>Vắng:</b> {vang}</p>
        <p><b>Tỷ lệ có mặt:</b> {tile}%</p>

        <p className="mt-2 font-bold text-lg">
          {duDieuKien ? (
            <span className="text-green-700">
              ✔ Đại hội đủ điều kiện để tiến hành
            </span>
          ) : (
            <span className="text-red-600">
              ✘ Đại hội chưa đủ điều kiện để tiến hành
            </span>
          )}
        </p>
      </div>

      {/* Nút chuyển sang trang nhập điểm danh */}
      <Link
        href="/diemdanh/nhap"
        className="block text-center bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-lg shadow-md font-semibold"
      >
        Điểm danh đại biểu
      </Link>
    </div>
  );
}
