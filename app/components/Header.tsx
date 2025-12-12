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

        <Link href="/sodo" className="top-menu-btn">Sơ đồ chổ ngồi</Link>
        <span className="separator">I</span>

        <Link href="/diemdanh" className="top-menu-btn">Điểm danh</Link>
        <span className="separator">I</span>
        <Link href="/GopYVanKien" className="top-menu-btn">Góp ý Văn kiện</Link>
        <span className="separator">I</span>
        <Link href="/danhsachtothaoluan" className="top-menu-btn">Danh sách chia tổ thảo luận</Link>
        <span className="separator">I</span>

        <Link href="/thongtindaibieu" className="top-menu-btn">Thông tin đại biểu</Link>
      </nav>
    </>
  );
}
