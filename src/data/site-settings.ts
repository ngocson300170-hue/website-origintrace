// Nguồn dữ liệu tĩnh cho giai đoạn hiện tại (chưa có CMS).
// Giữ CÙNG SHAPE với bản Supabase-backed `getSiteSettings()` của dự án
// website-tienichdiaphuong-new — khi làm CMS sau này chỉ cần thay nội dung
// hàm này bằng truy vấn Supabase, không cần sửa nơi gọi.

export type SiteSettings = {
  siteName: string;
  companyName: string;
  taxCode: string;
  description: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
  mapEmbedSrc: string;
};

const siteSettings: SiteSettings = {
  siteName: "Origin Trace",
  companyName: "Công ty TNHH Origin Trace Việt Nam",
  taxCode: "3604112992",
  description: "Nền tảng truy xuất nguồn gốc thông minh, kết nối Việt Nam với thế giới.",
  phone: "0585 888 879",
  phoneHref: "tel:0585888879",
  email: "origintracevietnam@gmail.com",
  address: "518/1/25, Khu phố 6, Phường Tam Hiệp, TP. Đồng Nai",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=518%2F1%2F25%2C+Khu+ph%E1%BB%91+6%2C+Ph%C6%B0%E1%BB%9Dng+Tam+Hi%E1%BB%87p%2C+%C4%90%E1%BB%93ng+Nai&output=embed",
};

export function getSiteSettings(): SiteSettings {
  return siteSettings;
}
