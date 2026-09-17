import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import BackLink from "@/components/ui/BackLink";
import { Cloud, Boxes, Network, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "CHEMOPS – Nền tảng quản trị doanh nghiệp hóa chất",
  description:
    "CHEMOPS là nền tảng quản trị doanh nghiệp hóa chất toàn diện — vận hành nội bộ, AI thông minh và hệ sinh thái kết nối toàn ngành.",
};

const features = [
  {
    title: "Mô hình Cloud SaaS",
    description: "Cho thuê phần mềm online — đăng ký nhanh, triển khai gọn, tự động cập nhật, chi phí tối ưu.",
    icon: <Cloud size={22} strokeWidth={1.8} className="text-green" />,
  },
  {
    title: "Truy xuất Blockchain",
    description: "Ghi nhận toàn bộ vòng đời lô hóa chất — minh bạch, khó giả mạo và có thể kiểm chứng.",
    icon: <Boxes size={22} strokeWidth={1.8} className="text-green" />,
  },
  {
    title: "Hệ sinh thái dữ liệu",
    description: "Kết nối toàn chuỗi giá trị từ sản xuất, ngân hàng, vận chuyển đến cơ quan quản lý.",
    icon: <Network size={22} strokeWidth={1.8} className="text-green" />,
  },
];

export default function ChemopsPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <BackLink />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-green mb-3">Hóa chất công nghiệp</div>
              <h1 className="text-[42px] font-bold text-ink leading-tight mb-4">
                Nền tảng quản trị doanh nghiệp hóa chất toàn diện
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                Từ quản trị nội bộ đến hệ sinh thái dữ liệu ngành — giúp doanh nghiệp hóa chất vận
                hành minh bạch, hiệu quả và tăng trưởng bền vững.
              </p>
              <Link
                href="/contact?product=chemops#trial"
                className="btn-primary inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-semibold text-base h-14"
              >
                Liên hệ
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
            <Reveal className="flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square">
                <Image src="/images/logos/logo-chemops.jpg" alt="CHEMOPS" fill className="object-contain" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F7FBF8]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal stagger className="grid sm:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="stripe-card bg-white rounded-2xl p-6 border border-[#f0f2f5]">
                <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center mb-4 bg-green/10">
                  {f.icon}
                </div>
                <h4 className="font-bold text-ink mb-1.5">{f.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-[100px]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-sm font-semibold tracking-widest uppercase text-green mb-5">Liên hệ tư vấn</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn sàng số hóa vận hành hóa chất?</h2>
            <p className="text-slate-500 text-lg mb-10 max-w-[480px] mx-auto">
              Hơn 500 doanh nghiệp hóa chất đang vận hành trên CHEMOPS. Bắt đầu hành trình chuyển
              đổi số ngay hôm nay.
            </p>
            <Link href="/contact?product=chemops#trial" className="btn-primary inline-block px-9 py-3.5 rounded-[10px] font-semibold text-[15px]">
              Liên hệ
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
