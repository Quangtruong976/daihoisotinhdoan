import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Ứng dụng Đại hội Tỉnh đoàn Lâm Đồng</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li><Link href="/program" className="text-blue-600">Chương trình Đại hội</Link></li>
        <li><Link href="/documents" className="text-blue-600">Văn kiện Đại hội</Link></li>
        <li><Link href="/forum" className="text-blue-600">Diễn đàn Đại hội</Link></li>
        <li><Link href="/contributions" className="text-blue-600">Tham luận</Link></li>
        <li><Link href="/delegates" className="text-blue-600">Danh sách đại biểu</Link></li>
        <li><Link href="/seating" className="text-blue-600">Sơ đồ chỗ ngồi</Link></li>
        <li><Link href="/feedback" className="text-blue-600">Góp ý văn kiện</Link></li>
      </ul>
    </div>
  );
}
