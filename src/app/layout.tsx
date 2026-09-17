import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import PageProgress from "@/components/layout/PageProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700"],
});

const SITE_URL = "https://origintrace.vn";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OriginTrace – Giải pháp truy xuất nguồn gốc & chuyển đổi số",
    template: "%s",
  },
  description:
    "OriginTrace cung cấp giải pháp truy xuất nguồn gốc, dữ liệu sản phẩm và chuyển đổi số, giúp doanh nghiệp minh bạch thông tin, tối ưu vận hành và nâng cao giá trị sản phẩm.",
  icons: {
    icon: "/icons/favicon.svg",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <PageProgress />
      </body>
    </html>
  );
}
