import ThamLuanFrames from "../components/ThamLuanFrames";

export default function PageThamLuan() {
  const phanI = [
    {
      stt: 1,
      donvi: "Ban Tổ chức Tỉnh uỷ",
      title: "Nâng cao chất lượng công tác bồi dưỡng, phát triển Đảng viên từ tổ chức Đoàn",
      link: "https://drive.google.com/file/d/FILE_ID_1/view",
    },
  ];

  const phanII = [
    {
      stt: 1,
      donvi: "Đoàn TNCS Hồ Chí Minh xã Bắc Ruộng",
      title: "Công tác tuyên truyền, giáo dục pháp luật, đạo đức, lối sống cho thanh niên",
      link: "https://drive.google.com/file/d/FILE_ID_2/view",
    },
  ];

  return (
    <>
      <ThamLuanFrames
        title="I. Góp ý, định hướng nhiệm vụ, giải pháp công tác Đoàn của các sở, ban, ngành"
        cotDonVi="Sở, ban, ngành"
        cotNoiDung="Bài viết"
        thamluans={phanI}
      />

      <ThamLuanFrames
        title="II. Tham luận của các cơ sở Đoàn trực thuộc Tỉnh đoàn"
        cotDonVi="Tên đơn vị"
        cotNoiDung="Nội dung tham luận"
        thamluans={phanII}
      />
    </>
  );
}
