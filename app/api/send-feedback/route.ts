import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { category, name, unit, email, content } = await req.json();

    if (!category || !name || !unit || !email || !content) {
      return NextResponse.json({ success: false, message: "Thiếu dữ liệu" }, { status: 400 });
    }

    // Tạo transporter Gmail
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Hệ thống góp ý" <${process.env.SMTP_USER}>`,
      to: "tinhdoanlamdong2025@gmail.com", // nhận về Gmail
      subject: `[Góp ý Văn kiện] ${category}`,
      html: `
        <p><b>Người gửi:</b> ${name}</p>
        <p><b>Đơn vị:</b> ${unit}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Nội dung góp ý:</b></p>
        <p>${content.replace(/\n/g, "<br/>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Gửi góp ý thành công!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Lỗi gửi email" }, { status: 500 });
  }
}
