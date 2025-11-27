import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { category, name, unit, email, content } = data;

    // Tạo transporter
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
      to: process.env.SMTP_USER, // gửi về email quản trị
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

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
