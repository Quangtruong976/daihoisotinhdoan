import ThamLuanFrames from "../components/ThamLuanFrames";

export default function PageThamLuan() {
  const phanI = [
    {
      stt: 1,
      donvi: "Ban Tổ chức Tỉnh uỷ",
      title: "Nâng cao chất lượng công tác bồi dưỡng, phát triển Đảng viên từ tổ chức Đoàn",
      link: "https://docs.google.com/document/d/1odxYt9dwxakMFAC62GMYzzpbJZ5u7WKd/edit?usp=share_link&ouid=105710743425623209897&rtpof=true&sd=true",
    },
    {
      stt: 2,
      donvi: "Sở Nội vụ",
      title: "Phối hợp trong triển khai thực hiện quản lý Nhà nước về thanh niên trên địa bàn tỉnh Lâm Đồng",
      link: "https://docs.google.com/document/d/1QhNTBQZudTaEzuqDdinu3Se8X8uK6t1Z/edit?usp=share_link&ouid=105710743425623209897&rtpof=true&sd=true",
    }, {
      stt: 2,
      donvi: "Sở Khoa học và Công nghệ",
      title: "Tăng cường hỗ trợ và thúc đẩy phong trào khởi nghiệp đổi mới sáng tạo trong thanh niên tỉnh Lâm Đồng",
      link: "https://docs.google.com/document/d/1_eYUprn8z9GmlokkafxRrmlJxH9GETJf/edit?usp=share_link&ouid=105710743425623209897&rtpof=true&sd=true",
    },
  ];

  const phanII = [
    {
      stt: 1,
      donvi: "Đoàn TN các cơ quan Đảng tỉnh",
      title: "Vai trò của Đoàn viên thanh niên trong tham gia bảo vệ nền tảng tư tưởng của Đảng, phản bác các quan điểm sai trái, thù địch trên không gian mạng trong thời kỳ mới",
      link: "https://docs.google.com/document/d/1_1Y3z3LiNc7-aVZGz-X_OZVauirQh6rL/edit?usp=share_link&ouid=105710743425623209897&rtpof=true&sd=true",
    },
    {
      stt: 2,
      donvi: "Xã Đoàn Bắc Ruộng",
      title: "Công tác tuyên truyền, giáo dục pháp luật, đạo đức, lối sống cho thanh niên: Các mô hình hiệu quả trong việc giáo dục thanh niên  sống đẹp, sống có ích, tuân thủ pháp luật, phòng chống tệ nạn xã hội",
      link: "https://docs.google.com/document/d/1DciUhRj_FfSWP135cKkeTfTFx8r4DLGd/edit?usp=share_link&ouid=105710743425623209897&rtpof=true&sd=true",
    }, {
      stt: 3,
      donvi: "Xã Đoàn Tuy Phong",
      title: "Ý thức, trách nhiệm của đoàn viên,  thanh niên trong tổ chức các hoạt động phát huy bản sắc văn hóa truyền thống dân tộc",
      link: "https://drive.google.com/file/d/FILE_ID_2/view",
    }, {
      stt: 4,
      donvi: "xã Đoàn Quảng Trực",
      title: "Ý thức, trách nhiệm của đoàn viên, thanh niên trong tổ chức các hoạt động bảo tồn, phát huy bản sắc văn hóa truyền thống của các dân tộc thiểu số khu vực miền núi, biên giới tỉnh Lâm Đồng",
      link: "https://docs.google.com/document/d/16g50TS_Hy-RXrAD_Zc-i8wXLubmCM732/edit?usp=share_link&ouid=105710743425623209897&rtpof=true&sd=true",
    }, {
      stt: 5,
      donvi: "xã Đoàn Hòa Ninh",
      title: "Phát huy vai trò xung kích của thanh niên trong tham gia chuyển đổi số",
      link: "https://docs.google.com/document/d/1k8w-jUvbt4ttqe-HhvkkPGs_R2m1CFjS/edit?usp=share_link&ouid=105710743425623209897&rtpof=true&sd=true",
    }, {
      stt: 6,
      donvi: "xã Đoàn Đạ Huoai 2",
      title: "Xây dựng tổ chức Đoàn vững mạnh: Bàn về các giải pháp nâng cao chất lượng tổ chức cơ sở Đoàn, phát triển đoàn viên, bồi dưỡng đội ngũ cán bộ Đoàn nòng cốt có năng lực và phẩm chất.",
      link: "https://docs.google.com/document/d/1bKaYItzYPnTgBkKEBC140IqL9-FraGoP/edit?usp=share_link&ouid=105710743425623209897&rtpof=true&sd=true",
    }, {
      stt: 7,
      donvi: "Đoàn Trường ĐH Phan Thiết",
      title: "Nâng cao năng lực hội nhập quốc tế cho đoàn viên, thanh niên tại trường Đại học Phan Thiết trong kỷ nguyên vươn mình của dân tộc",
      link: "https://docs.google.com/document/d/1piKRs1wZg9hKBf4-N75TOsAvMSfmfEns/edit?usp=share_link&ouid=105710743425623209897&rtpof=true&sd=true",
    }, {
      stt: 8,
      donvi: "Đoàn phường 2 Bảo Lộc",
      title: "Vai trò của đoàn viên, thanh niên trong công tác hỗ trợ chính chính quyền địa phương 2 cấp giải quyết thủ tục hành chính công cho người dân. Vai trò của đoàn viên, thanh niên trong việc ứng dụng công nghệ số, đổi mới sáng tạo, chuyển đổi số",
      link: "https://docs.google.com/document/d/1PZSrcyH50SEY9RI-cbI5cYYCoyXgCnDe/edit?usp=share_link&ouid=105710743425623209897&rtpof=true&sd=true",
    }, {
      stt: 9,
      donvi: "xã Đoàn Quảng Hòa",
      title: "Ý thức, trách nhiệm của đoàn viên, thanh niên trong tổ chức các hoạt động bảo tồn, phát huy bản sắc văn hóa truyền thống các dân tộc thiểu số khu vực miền núi",
      link: "https://drive.google.com/file/d/FILE_ID_2/view",
    }, {
      stt: 10,
      donvi: "Đoàn phường Phú Thủy",
      title: "Vai trò của đoàn viên, thanh niê trong công tác hỗ trợ chính quyền địa phương 2 cấp giải quyết thủ tục hành chính công cho người dân. Vai trò của Đoàn viên, thanh niên trong việc ứng dụng công nghệ số, dổi mới sáng tạo, chuyển đổi số",
      link: "https://drive.google.com/file/d/FILE_ID_2/view",
    }, {
      stt: 11,
      donvi: "xã Đoàn Phúc Thọ Lâm Hà",
      title: "Các giải pháp nhằm nâng cao công tác đoàn kết, tập hợp thanh niên tại khu vực địa bàn dân cư trong giai đoạn mới",
      link: "https://drive.google.com/file/d/FILE_ID_2/view",
    }, {
      stt: 12,
      donvi: "Đoàn Phường Xuân Hương Đà Lạt",
      title: "Phát huy vai trò xung kích của Đoàn Thanh niên trong thực hiện chuyển đổi số",
      link: "https://drive.google.com/file/d/FILE_ID_2/view",
    }, {
      stt: 13,
      donvi: "Đoàn TN các cơ quan Đảng tỉnh",
      title: "Vai trò của Đoàn viên thanh niên trong tham gia bảo vệ nền tảng tư tưởng của Đảng, phản bác các quan điểm sai trái, thù địch trên không gian mạng trong thời kỳ mới",
      link: "https://drive.google.com/file/d/FILE_ID_2/view",
    }, {
      stt: 14,
      donvi: "xã Đoàn Thuận An",
      title: "VÝ thức và trách nhiệm của đoàn viên, thanh niên trong bảo tồn và phát huy bản sắc văn hóa truyền thống các dân tộc thiểu số khu vực miền núi, biên giới tỉnh Lâm Đồng",
      link: "https://drive.google.com/file/d/FILE_ID_2/view",
    }, {
      stt: 15,
      donvi: "xã Đoàn Tân Hội",
      title: "Thực trạng và giải pháp nâng cao công tác đoàn kết, tập hợp thanh niên trên địa bàn dân cư trong giai đoạn hiện nay",
      link: "https://drive.google.com/file/d/FILE_ID_2/view",
    }, {
      stt: 16,
      donvi: "xã Đoàn Hàm Kiệm",
      title: "Xây dựng tổ chức Đoàn vững mạnh: Bàn về các giải pháp nâng cao chất lượng tổ chức cơ sở Đoàn, phát triển đoàn viên, bồi dưỡng đội ngũ cán bộ Đoàn nòng cốt có năng lực và phẩm chất",
      link: "https://drive.google.com/file/d/FILE_ID_2/view",
    }, {
      stt: 17,
      donvi: "xã Đoàn Đắk Sắk",
      title: "Nâng cao hiệu quả các phong trào cách mạng, phát huy vai trò xung kích của đoàn viên, thanh niên trong tình hình mới",
      link: "https://drive.google.com/file/d/FILE_ID_2/view",
    }, {
      stt: 18,
      donvi: "xã Đoàn Tân Thành",
      title: "Đồng hành hỗ trợ thanh niên khởi nghiệp, lập nghiệp, phát triển các mô hình kinh tế hiệu quả.",
      link: "https://drive.google.com/file/d/FILE_ID_2/view",
    }, {
      stt: 19,
      donvi: "Đoàn Trường ĐH Phan Thiết",
      title: "Đồng hành, hỗ trợ thanh niên khởi nghiệp, lập nghiệp",
      link: "https://drive.google.com/file/d/FILE_ID_2/view",
    }, {
      stt: 20,
      donvi: "Đoàn Phường Nam Gia Nghĩa",
      title: "Vai trò của thanh niên trong lập nghiệp, khởi nghiệp, xung kích, tình nguyện phát triển kinh tế và bảo vệ Tổ Quốc",
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
