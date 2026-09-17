export type NavProductItem = {
  href: string;
  title: string;
  description: string;
  iconKey: "saas" | "chemops" | "aquaenv" | "originvn";
};

export const productsNav: NavProductItem[] = [
  {
    href: "/products#saas-ke-toan",
    title: "SaaS Kế toán",
    description: "Quản lý kế toán tự động hóa",
    iconKey: "saas",
  },
  {
    href: "/chemops",
    title: "CHEMOPS",
    description: "Quản lý hóa chất công nghiệp",
    iconKey: "chemops",
  },
  {
    href: "/products#aquaenv",
    title: "AquaEnv",
    description: "Giám sát môi trường thủy sản",
    iconKey: "aquaenv",
  },
  {
    href: "/products#originvn",
    title: "OriginVN – Nông Nghiệp Số",
    description: "Ứng dụng di động miễn phí cho nông dân, HTX",
    iconKey: "originvn",
  },
];

export type NavIndustryItem = {
  href: string;
  title: string;
  description: string;
  iconKey: "hoa-chat" | "nong-nghiep" | "thuy-san";
};

export const industriesNav: NavIndustryItem[] = [
  {
    href: "/industries#hoa-chat",
    title: "Hóa chất",
    description: "Quản lý hóa chất công nghiệp",
    iconKey: "hoa-chat",
  },
  {
    href: "/industries#nong-nghiep",
    title: "Nông nghiệp",
    description: "Truy xuất nguồn gốc nông sản",
    iconKey: "nong-nghiep",
  },
  {
    href: "/industries#thuy-san",
    title: "Thủy sản",
    description: "Giám sát chất lượng nước",
    iconKey: "thuy-san",
  },
];

export const primaryNavLinks = [
  { href: "/government", label: "Hợp tác Nhà nước" },
  { href: "/about-us", label: "Về chúng tôi" },
  { href: "/contact", label: "Liên hệ" },
];

export const footerProductLinks = [
  { href: "/products#saas-ke-toan", label: "SaaS Kế toán" },
  { href: "/chemops", label: "CHEMOPS" },
  { href: "/products#aquaenv", label: "AquaEnv" },
  { href: "/products#originvn", label: "OriginVN – Nông Nghiệp Số" },
];

export const footerQuickLinks = [
  { href: "/about-us", label: "Về chúng tôi" },
  { href: "/government", label: "Hợp tác Nhà nước" },
  { href: "/contact", label: "Liên hệ" },
];
