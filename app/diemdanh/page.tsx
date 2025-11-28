"use client";

import { useEffect, useState } from "react";

type DiemDanhInfo = {
  hoTen: string;
  donVi: string;
  email: string;
  ngay: string;
  phien: string;
};

const DIEN_BIEU_TONG = 350;

export default function DiemDanh() {
  const [hoTen, setHoTen] = useState("");
  const [donVi, setDonVi] = useState("");
  const [email, setEmail] = useState("");
  const [ngay, setNgay] = useState("");
  const [phien, setPhien] = useState("");
  const [listDiemDanh, setListDiemDanh] = useState<DiemDanhInfo[]>([]);

  // Load danh sách từ server khi component mount
  useEffect(() => {
    fetch("/api/diemdanh")
      .then((res) => res.json())
      .then((data) => setListDiemDanh(data.diemDanhList || []));
  }, []);

  const handleSubmit = async () => {
    if (!hoTen || !donVi || !email || !ngay || !phien) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    const res = await fetch("/api/diemdanh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hoTen, donVi, email, ngay, phien }),
    });

    const data = await res.json();

    if (res.ok) {
      setListDiemDanh(data.diemDanhList);
      setHoTen("");
      setDonVi("");
      setEmail("");
    } else {
      alert(data.error);
    }
  };

  // Thống kê tổng
  const soCoMat = listDiemDanh.length;
  const soVang = DIEN_BIEU_TONG - soCoMat;
  const soChuaDiemDanh = DIEN_BIEU_TONG - soCoMat;

  // Thống kê theo phiên
  const phien1List = listDiemDanh.filter((d) => d.phien === "Phiên thứ 1");
  const phien2List = listDiemDanh.filter((d) => d.phien === "Phiên trọng thể");

  return (
    <div className="diemdanh-container">
      <h3 className="diemdanh-title">Yêu cầu điểm danh</h3>

      <div className="diemdanh-form">
        <label>
          Chọn ngày điểm danh:
          <select value={ngay} onChange={(e) => setNgay(e.target.value)}>
            <option value="">-- Chọn ngày --</option>
            <option value="18/12/2025">18/12/2025</option>
            <option value="19/12/2025">19/12/2025</option>
          </select>
        </label>

        <label>
          Chọn phiên:
          <select value={phien} onChange={(e) => setPhien(e.target.value)}>
            <option value="">-- Chọn phiên --</option>
            <option value="Phiên thứ 1">Phiên thứ 1</option>
            <option value="Phiên trọng thể">Phiên trọng thể</option>
          </select>
        </label>

        <label>
          Họ tên:
          <input
            type="text"
            value={hoTen}
            onChange={(e) => setHoTen(e.target.value)}
          />
        </label>

        <label>
          Đơn vị:
          <input
            type="text"
            value={donVi}
            onChange={(e) => setDonVi(e.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <button className="btn-card" onClick={handleSubmit}>
          Điểm danh
        </button>
      </div>

      <div className="diemdanh-stats">
        <h4>Thống kê tổng</h4>
        <p>Tổng số đại biểu: {DIEN_BIEU_TONG}</p>
        <p>Số đại biểu có mặt: {soCoMat}</p>
        <p>Số đại biểu vắng: {soVang}</p>
        <p>Số đại biểu chưa điểm danh: {soChuaDiemDanh}</p>

        <h4 className="mt-4">Thống kê theo phiên</h4>
        <p>Phiên thứ 1: {phien1List.length} đại biểu</p>
        <p>Phiên trọng thể: {phien2List.length} đại biểu</p>

        {/* Bảng chi tiết từng phiên */}
        <h4 className="mt-3">Danh sách đại biểu - Phiên thứ 1</h4>
        <table className="diemdanh-table">
          <thead>
            <tr>
              <th>Họ tên</th>
              <th>Đơn vị</th>
              <th>Email</th>
              <th>Ngày</th>
            </tr>
          </thead>
          <tbody>
            {phien1List.map((d, idx) => (
              <tr key={idx}>
                <td>{d.hoTen}</td>
                <td>{d.donVi}</td>
                <td>{d.email}</td>
                <td>{d.ngay}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h4 className="mt-3">Danh sách đại biểu - Phiên trọng thể</h4>
        <table className="diemdanh-table">
          <thead>
            <tr>
              <th>Họ tên</th>
              <th>Đơn vị</th>
              <th>Email</th>
              <th>Ngày</th>
            </tr>
          </thead>
          <tbody>
            {phien2List.map((d, idx) => (
              <tr key={idx}>
                <td>{d.hoTen}</td>
                <td>{d.donVi}</td>
                <td>{d.email}</td>
                <td>{d.ngay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
