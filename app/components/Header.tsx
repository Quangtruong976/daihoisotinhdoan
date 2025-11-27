// app/components/Header.tsx
import Link from "next/link";


export default function Header() {
  return (
    <>
      <div className="banner">
        <img src="/bg.png" alt="Banner Đại hội" className="banner-img" />
      </div>

      <nav className="top-menu">
        <Link href="/" className="top-menu-btn">Home</Link>
        <span className="separator">I</span>
        <Link href="/chuongtrinh" className="top-menu-btn">Chương trình</Link>
        <span className="separator">I</span>
        <Link href="/vankien" className="top-menu-btn">Văn kiện Đại hội</Link>
        <span className="separator">I</span>
        <Link href="/sodo" className="top-menu-btn">Sơ đồ đại biểu</Link>
        <span className="separator">I</span>
        <Link href="/diemdanh" className="top-menu-btn">Điểm danh</Link>
        <span className="separator">I</span>
        <Link href="/dangnhap" className="top-menu-btn">Đăng nhập</Link>
      </nav>
    </>
  );
}
