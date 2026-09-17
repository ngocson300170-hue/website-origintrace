import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import BackLink from "@/components/ui/BackLink";
import IndustryBlock from "@/components/sections/IndustryBlock";
import { ArrowRight, FlaskConical, Sprout, Fish, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Giải pháp Ngành – OriginTrace",
  description:
    "Giải pháp truy xuất nguồn gốc chuyên biệt theo từng ngành: hóa chất, nông nghiệp, thủy sản. OriginTrace thiết kế giải pháp bám sát thực tế từng lĩnh vực.",
};

const industryCards = [
  { t: "Hóa chất", d: "Quản lý toàn diện", icon: FlaskConical },
  { t: "Nông nghiệp", d: "Truy xuất nguồn gốc", icon: Sprout },
  { t: "Thủy sản", d: "Giám sát chất lượng", icon: Fish },
  { t: "Tùy chỉnh", d: "Nhiều ngành khác", icon: Layers },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="hero-bg py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <BackLink />
              <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-green">Giải pháp Ngành</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Giải pháp chuyên biệt theo từng ngành
              </h1>
              <p className="text-slate-600 max-w-xl text-lg mb-8 leading-relaxed">
                Mỗi ngành có đặc thù vận hành và yêu cầu tuân thủ riêng — Origin Trace thiết kế giải
                pháp bám sát thực tế từng lĩnh vực.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=consulting#trial" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold">
                  <span>Liên hệ</span>
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
                <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 border-slate-200 hover:border-green hover:text-green transition-all">
                  <span>Tìm hiểu thêm</span>
                </Link>
              </div>
            </div>
            <Reveal className="relative">
              <div className="relative z-10 bg-gradient-to-br from-blue to-green rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {industryCards.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div key={c.t} className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center text-white">
                          <Icon size={30} strokeWidth={2} />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-1">{c.t}</h3>
                        <p className="text-white/70 text-sm">{c.d}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <IndustryBlock
        id="hoa-chat"
        label="Hóa chất"
        color="var(--color-blue)"
        title="Quản lý toàn diện vòng đời hóa chất"
        description="Quản lý toàn diện vòng đời hóa chất trong sản xuất công nghiệp — từ nhập kho, sử dụng đến xử lý chất thải nguy hại, đảm bảo an toàn lao động và tuân thủ pháp luật môi trường."
        points={[
          "Truy vết nguồn gốc và hạn dùng từng lô hóa chất",
          "Cảnh báo sớm rủi ro tồn kho, hết hạn",
          "Báo cáo sử dụng hóa chất theo quy định Sở TN&MT",
          "Quản lý chất thải nguy hại phát sinh",
        ]}
      />

      <IndustryBlock
        id="nong-nghiep"
        label="Nông nghiệp"
        color="var(--color-green)"
        title="Truy xuất nguồn gốc nông sản"
        description="Truy xuất nguồn gốc nông sản từ trang trại đến bàn ăn, giúp nông sản Việt Nam đáp ứng tiêu chuẩn xuất khẩu và xây dựng niềm tin với người tiêu dùng."
        points={[
          "Ghi nhận quy trình canh tác, phân bón, thuốc BVTV",
          "Mã QR truy xuất cho từng lô nông sản",
          "Định hướng phát triển: kết nối trực tiếp với nhà thu mua, xuất khẩu",
          "Định hướng phát triển: hỗ trợ đạt chứng nhận VietGAP, GlobalGAP",
        ]}
      />

      <IndustryBlock
        id="thuy-san"
        label="Thủy sản"
        color="var(--color-blue)"
        title="Giám sát chất lượng nước ao nuôi"
        description="Giám sát chất lượng nước ao nuôi và xử lý nước thải tại các cơ sở nuôi trồng thủy sản, đồng thời truy xuất nguồn gốc sản phẩm thủy sản xuất khẩu."
        points={[
          "Giám sát chỉ số môi trường ao nuôi theo thời gian thực",
          "Quản lý hệ thống xử lý nước thải tại ao hồ nuôi trồng",
          "Truy xuất nguồn gốc theo lô nuôi, vụ nuôi",
          "Đáp ứng tiêu chuẩn xuất khẩu thủy sản quốc tế",
        ]}
        last
      />

      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 mb-6 text-slate-500">
            <Layers size={22} strokeWidth={2} />
            <span className="text-sm font-semibold tracking-widest uppercase">Tùy chỉnh giải pháp</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ngành của bạn chưa có ở đây?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Origin Trace có thể tùy chỉnh giải pháp cho nhiều ngành sản xuất và chuỗi cung ứng khác
            nhau.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?product=consulting#trial" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold">
              <span>Liên hệ</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <Link href="/products" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold border-2 border-slate-200 hover:border-green hover:text-green transition-all">
              <span>Xem thêm sản phẩm</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
