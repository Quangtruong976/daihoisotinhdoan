import ThamLuanFrames from "../components/ThamLuanFrames";

export default function PageThamLuan() {
  const phanI = [
    {
      stt: 1,
      donvi: "Ban Tổ chức Tỉnh uỷ",
      title: "Nâng cao chất lượng công tác bồi dưỡng, phát triển Đảng viên từ tổ chức Đoàn",
      link: "https://drive.google.com/file/d/1kmBuhjRVxlPQhlnT8yyvSp3_zib6EZWl/view?usp=share_link",
    },
    {
      stt: 2,
      donvi: "Sở Nội vụ",
      title: "Phối hợp trong triển khai thực hiện quản lý Nhà nước về thanh niên trên địa bàn tỉnh Lâm Đồng",
      link: "https://drive.google.com/file/d/1_9JNsFn5MyLl3Gk-LhA0W-ubFOXiM3GN/view?usp=share_link",
    }, {
      stt: 2,
      donvi: "Sở Khoa học và Công nghệ",
      title: "Tăng cường hỗ trợ và thúc đẩy phong trào khởi nghiệp đổi mới sáng tạo trong thanh niên tỉnh Lâm Đồng",
      link: "https://drive.google.com/file/d/1j5rpIh65jCMhrpZy7csjCJT3vfkX-E1v/view?usp=share_link",
    },
  ];

  const phanII = [
    {
      stt: 1,
      donvi: "Đoàn TN các cơ quan Đảng tỉnh",
      title: "Vai trò của Đoàn viên thanh niên trong tham gia bảo vệ nền tảng tư tưởng của Đảng, phản bác các quan điểm sai trái, thù địch trên không gian mạng trong thời kỳ mới",
      link: "https://drive.google.com/file/d/12_HG8XwcIpG38tPKzXPARZbVCemT1ji6/view?usp=share_link",
    },
    {
      stt: 2,
      donvi: "Xã Đoàn Bắc Ruộng",
      title: "Công tác tuyên truyền, giáo dục pháp luật, đạo đức, lối sống cho thanh niên: Các mô hình hiệu quả trong việc giáo dục thanh niên  sống đẹp, sống có ích, tuân thủ pháp luật, phòng chống tệ nạn xã hội",
      link: "https://drive.google.com/file/d/1QGEzUYQI_oL5TyqAkg8eQSfnPfQFzNwr/view?usp=share_link",
    }, {
      stt: 3,
      donvi: "Đoàn TN Quân sự tỉnh",
      title: "Vai trò của Đoàn viên thanh niên trong tham gia bảo vệ nền tảng tư tưởng của Đảng, phản bác các quan điểm sai trái, thù địch trên không gian mạng trong thời kỳ mới",
      link: "https://drive.google.com/file/d/1dRYslk-JSvmRFsFINuLrTb_gbm_hiSnJ/view?usp=share_link",
    }, {
      stt: 4,
      donvi: "xã Đoàn Quảng Trực",
      title: "Ý thức, trách nhiệm của đoàn viên, thanh niên trong tổ chức các hoạt động bảo tồn, phát huy bản sắc văn hóa truyền thống của các dân tộc thiểu số khu vực miền núi, biên giới tỉnh Lâm Đồng",
      link: "https://drive.google.com/file/d/1pi42B7M8u69VgxiUeFZVOswCWuL7xRaG/view?usp=share_link",
    }, {
      stt: 5,
      donvi: "xã Đoàn Hòa Ninh",
      title: "Phát huy vai trò xung kích của thanh niên trong tham gia chuyển đổi số",
      link: "https://drive.google.com/file/d/1a3kjy7ZsuLnzzE5Ag5QB7fMqB-SIWSzm/view?usp=share_link",
    }, {
      stt: 6,
      donvi: "xã Đoàn Đạ Huoai 2",
      title: "Xây dựng tổ chức Đoàn vững mạnh: Bàn về các giải pháp nâng cao chất lượng tổ chức cơ sở Đoàn, phát triển đoàn viên, bồi dưỡng đội ngũ cán bộ Đoàn nòng cốt có năng lực và phẩm chất.",
      link: "https://drive.google.com/file/d/1mkhUEux_iZGoDWL_vm6BoYTdQ_I07JqQ/view?usp=share_link",
    }, {
      stt: 7,
      donvi: "Đoàn Trường ĐH Phan Thiết",
      title: "Nâng cao năng lực hội nhập quốc tế cho đoàn viên, thanh niên tại trường Đại học Phan Thiết trong kỷ nguyên vươn mình của dân tộc",
      link: "https://drive.google.com/file/d/1seFNrhEx_EF7M5EaaFwrqYZRG_wVs7lD/view?usp=share_link",
    }, {
      stt: 8,
      donvi: "Đoàn phường 2 Bảo Lộc",
      title: "Vai trò của đoàn viên, thanh niên trong công tác hỗ trợ chính chính quyền địa phương 2 cấp giải quyết thủ tục hành chính công cho người dân. Vai trò của đoàn viên, thanh niên trong việc ứng dụng công nghệ số, đổi mới sáng tạo, chuyển đổi số",
      link: "https://drive.google.com/file/d/1ncZ0iemjRf1iXDlmdfvLAPC-ASzMpXBQ/view?usp=share_link",
    }, {
      stt: 9,
      donvi: "xã Đoàn KRông Nô",
      title: "Giải pháp Hỗ trợ thanh niên khởi nghiệp, lập nghiệp, phát triển các mô hình kinh tế hiệu quả",
      link: "https://drive.google.com/file/d/1cfZeiLXRIA3jmIYsLJtsdk_DWu_qUQ7B/view?usp=share_link",
    }, {
      stt: 10,
      donvi: "Đoàn phường Phú Thủy",
      title: "Vai trò của đoàn viên, thanh niê trong công tác hỗ trợ chính quyền địa phương 2 cấp giải quyết thủ tục hành chính công cho người dân. Vai trò của Đoàn viên, thanh niên trong việc ứng dụng công nghệ số, dổi mới sáng tạo, chuyển đổi số",
      link: "https://drive.google.com/file/d/1h0DTysf267-QdkAfN7cnavl2xfubkyGw/view?usp=share_link",
    }, {
      stt: 11,
      donvi: "xã Đoàn Phúc Thọ Lâm Hà",
      title: "Các giải pháp nhằm nâng cao công tác đoàn kết, tập hợp thanh niên tại khu vực địa bàn dân cư trong giai đoạn mới",
      link: "https://drive.google.com/file/d/1ahUT_BINRIivKsyrY9Sjayi2Y8s0zug7/view?usp=share_link",
    }, {
      stt: 12,
      donvi: "Đoàn Phường Xuân Hương Đà Lạt",
      title: "Phát huy vai trò xung kích của Đoàn Thanh niên trong thực hiện chuyển đổi số",
      link: "https://drive.google.com/file/d/1QVPVayrgOdBUVk9ACqt4HY9ptfHE_NvW/view?usp=share_link",
    }, {
      stt: 13,
      donvi: "Đoàn TN xã Đức Trọng",
      title: "Phát huy vai trò xung kích của Đoàn Thanh niên xã Đức Trọng trong thực hiện mô hình chính quyền địa phương 2 cấp",
      link: "https://drive.google.com/file/d/1ALd-ETENem1BzANJRwvr-UwmCnl1qPzI/view?usp=share_link",
    }, {
      stt: 14,
      donvi: "xã Đoàn Thuận An",
      title: "VÝ thức và trách nhiệm của đoàn viên, thanh niên trong bảo tồn và phát huy bản sắc văn hóa truyền thống các dân tộc thiểu số khu vực miền núi, biên giới tỉnh Lâm Đồng",
      link: "https://drive.google.com/file/d/1Hl0VxAG6boPlzktr1tumuneArGzZUdDU/view?usp=share_link",
    }, {
      stt: 15,
      donvi: "xã Đoàn Tân Hội",
      title: "Thực trạng và giải pháp nâng cao công tác đoàn kết, tập hợp thanh niên trên địa bàn dân cư trong giai đoạn hiện nay",
      link: "https://drive.google.com/file/d/1KMe3R_ixf6OlTy5jhXbPZDVdSuvu5yA1/view?usp=share_link",
    }, {
      stt: 16,
      donvi: "xã Đoàn Hàm Kiệm",
      title: "Xây dựng tổ chức Đoàn vững mạnh: Bàn về các giải pháp nâng cao chất lượng tổ chức cơ sở Đoàn, phát triển đoàn viên, bồi dưỡng đội ngũ cán bộ Đoàn nòng cốt có năng lực và phẩm chất",
      link: "https://drive.google.com/file/d/1I93D-FH182FJWuF2FzRChjZd1Y_TIyLV/view?usp=share_link",
    }, {
      stt: 17,
      donvi: "xã Đoàn Đắk Sắk",
      title: "Nâng cao hiệu quả các phong trào cách mạng, phát huy vai trò xung kích của đoàn viên, thanh niên trong tình hình mới",
      link: "https://drive.google.com/file/d/1UHWcRyfpWcXhZX1E-templzdZIaLGNFc/view?usp=share_link",
    }, {
      stt: 18,
      donvi: "xã Đoàn Tân Thành",
      title: "Đồng hành hỗ trợ thanh niên khởi nghiệp, lập nghiệp, phát triển các mô hình kinh tế hiệu quả.",
      link: "https://drive.google.com/file/d/16bfuNck79-3gqDsmc-fA1T_E2udhLHbM/view?usp=share_link",
    }, {
      stt: 19,
      donvi: "Đoàn TN xã Đức Linh",
      title: "các mô hình hiệu quả trong việc giáo dục thanh niên sống đẹp, sống có ích, tuân thủ pháp luật, phòng chống tệ nạn xã hội",
      link: "https://drive.google.com/file/d/1rHRpCFVDDp_fU5YdniSIySR-hWg2V75A/view?usp=share_link",
    }, {
      stt: 20,
      donvi: "Đoàn Phường Nam Gia Nghĩa",
      title: "Vai trò của thanh niên trong lập nghiệp, khởi nghiệp, xung kích, tình nguyện phát triển kinh tế và bảo vệ Tổ Quốc",
      link: "https://drive.google.com/file/d/1hogTIBIcADBdV7gLsPGSW1x37QBvbEjU/view?usp=share_link",
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
