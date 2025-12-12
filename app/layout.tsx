import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./style.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Đại hội Đoàn TNCS Hồ Chí Minh tỉnh Lâm Đồng lần thứ I",
  icons: {
    icon: "/favicon.ico?v=2",
    apple: "/icon-192.png"
  },
  manifest: "/manifest.json",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* Header dùng chung cho mọi trang */}
        <Header />

        {/* Nội dung riêng của từng trang */}
        <main style={{ flexGrow: 1 }}>
          {children}
        </main>

        {/* Footer dùng chung */}
        <footer className="footer">@2025 - Tỉnh đoàn Lâm Đồng</footer>
      </body>
    </html>
  );
}
