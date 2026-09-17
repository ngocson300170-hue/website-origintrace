import type { Metadata } from "next";
import Link from "next/link";
import clsx from "clsx";
import Reveal from "@/components/ui/Reveal";
import BackLink from "@/components/ui/BackLink";
import { Compass, Target, CheckCircle2, ShieldCheck, Sprout, Handshake, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Về OriginTrace – Công nghệ, Dữ liệu & Đổi mới sáng tạo",
  description:
    "Tìm hiểu về OriginTrace, định hướng phát triển công nghệ, dữ liệu và các giải pháp số nhằm hỗ trợ doanh nghiệp, tổ chức và cơ quan quản lý.",
};

const timeline = [
  {
    year: "2023",
    color: "text-green",
    dot: "bg-green",
    title: "Khởi tạo Origin Trace",
    d: "Nhận thấy nhu cầu cấp thiết về truy xuất nguồn gốc trong chuỗi cung ứng Việt Nam, chúng tôi bắt đầu xây dựng nền tảng AI thông minh với mục tiêu kết nối nguồn gốc Việt Nam với thị trường toàn cầu.",
  },
  {
    year: "2024",
    color: "text-blue",
    dot: "bg-blue",
    title: "Ra mắt 4 nền tảng chuyên biệt",
    d: "Phát triển và ra mắt 4 nền tảng chuyên biệt: SaaS Kế toán, CHEMOPS, AquaEnv và OriginVN – Nông Nghiệp Số, phục vụ đầy đủ nhu cầu từ tài chính đến môi trường trong chuỗi cung ứng.",
  },
  {
    year: "2025",
    color: "text-green",
    dot: "bg-green",
    title: "Mở rộng thị trường",
    d: "Bắt đầu mở rộng ra thị trường quốc tế, mang giải pháp truy xuất nguồn gốc Việt Nam ra thế giới, đồng thời hợp tác với các đối tác chiến lược.",
  },
];

const coreValues = [
  { title: "Minh bạch", d: "Dữ liệu rõ ràng, có thể kiểm chứng ở mọi khâu.", icon: CheckCircle2 },
  { title: "Tuân thủ", d: "Bám sát quy định pháp luật trong nước và quốc tế.", icon: ShieldCheck },
  { title: "Bền vững", d: "Hướng tới lợi ích dài hạn cho môi trường và cộng đồng.", icon: Sprout },
  { title: "Đối tác", d: "Cùng nhau tạo ra giá trị cho toàn bộ hệ sinh thái.", icon: Handshake },
];

const team = [
  { title: "Đội ngũ Kỹ thuật", d: "Chuyên gia AI, Machine Learning và Big Data" },
  { title: "Đội ngũ Sản phẩm", d: "Thiết kế trải nghiệm người dùng tối ưu" },
  { title: "Đội ngũ Ngành hàng", d: "Chuyên gia hóa chất, nông nghiệp, thủy sản" },
];

export default function AboutUsPage() {
  return (
    <>
      <section className="hero-bg py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <BackLink />
              <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-green">Về Origin Trace</p>
              <h1 className="font-bold mb-6 leading-tight text-4xl md:text-5xl">
                Nền tảng AI truy xuất nguồn gốc cho <span className="text-green">chuỗi cung ứng Việt Nam</span>
              </h1>
              <p className="text-slate-600 mb-8">
                Chúng tôi xây dựng hạ tầng dữ liệu giúp doanh nghiệp Việt minh bạch nguồn gốc, chuẩn
                hóa vận hành và kết nối đáng tin cậy với thị trường toàn cầu.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=consulting#trial" className="btn-primary px-7 py-3 rounded-lg font-semibold">
                  Liên hệ
                </Link>
                <Link href="/products" className="btn-outline px-7 py-3 rounded-lg font-semibold">
                  Khám phá sản phẩm
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-line bg-white p-8">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted">Mission</span>
                <strong className="block text-xl mt-2 mb-2">Minh bạch hóa dữ liệu nguồn gốc</strong>
                <p className="text-slate-600 text-sm">
                  Một nền tảng chung cho truy xuất, tuân thủ, báo cáo và hợp tác ngành.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal stagger className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { v: "500+", l: "Doanh nghiệp tin dùng" },
              { v: "4", l: "Nền tảng chuyên biệt" },
              { v: "99.9%", l: "Độ chính xác truy xuất" },
              { v: "24/7", l: "Hỗ trợ kỹ thuật" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-5xl md:text-6xl font-bold mb-2">{s.v}</div>
                <p className="text-slate-600">{s.l}</p>
              </div>
            ))}
          </Reveal>
          <p className="text-center text-xs text-slate-400 mt-6">
            *Số liệu tổng hợp nội bộ toàn bộ nền tảng Origin Trace, đang được kiểm chứng và cập nhật
            định kỳ.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-green">Sứ mệnh & Tầm nhìn</p>
            <h2 className="text-3xl md:text-4xl font-bold">Chúng tôi đang xây dựng</h2>
          </Reveal>
          <Reveal stagger className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-10 bg-gradient-to-br from-green/10 to-green/5">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-green/15 text-green">
                <Compass size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green">Tầm nhìn</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Trở thành nền tảng Truy xuất nguồn gốc thông minh hàng đầu Đông Nam Á, kết nối nguồn
                gốc Việt Nam với thị trường toàn cầu, xây dựng chuỗi cung ứng minh bạch, bền vững.
              </p>
            </div>
            <div className="rounded-2xl p-10 bg-gradient-to-br from-blue/10 to-blue/5">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-blue/15 text-blue">
                <Target size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue">Sứ mệnh</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Kiến tạo nền tảng AI truy xuất nguồn gốc thông minh, kết nối chuỗi cung ứng hóa
                chất, nông nghiệp, thủy sản và sản phẩm Việt Nam với thị trường toàn cầu — minh
                bạch, tuân thủ và bền vững.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-green">Giá trị cốt lõi</p>
            <h2 className="text-3xl md:text-4xl font-bold">Điều chúng tôi theo đuổi</h2>
          </Reveal>
          <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card bg-white rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 mx-auto bg-green/10 text-green">
                    <Icon size={26} strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{v.title}</h3>
                  <p className="text-slate-600">{v.d}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-green">Câu chuyện của chúng tôi</p>
            <h2 className="text-3xl md:text-4xl font-bold">Hành trình phát triển</h2>
          </Reveal>
          <Reveal className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />
              {timeline.map((t, i) => (
                <div key={t.year} className={clsx("relative pl-20", i < timeline.length - 1 && "pb-12")}>
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white ${t.dot}`} />
                  <div className={`text-sm font-semibold mb-2 ${t.color}`}>{t.year}</div>
                  <h3 className="text-xl font-bold mb-3">{t.title}</h3>
                  <p className="text-slate-600">{t.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-green">Đội ngũ</p>
            <h2 className="text-3xl md:text-4xl font-bold">Người đứng sau công nghệ</h2>
          </Reveal>
          <Reveal className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-xl text-slate-600">
              Đội ngũ Origin Trace gồm các chuyên gia AI, kỹ sư phần mềm và chuyên gia ngành hàng,
              cùng chung cam kết kiến tạo giải pháp truy xuất nguồn gốc thông minh cho Việt Nam.
            </p>
          </Reveal>
          <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.title} className="card bg-white rounded-2xl p-6 text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-green to-blue text-white">
                  <User size={32} strokeWidth={2} />
                </div>
                <h3 className="font-bold text-lg mb-2">{m.title}</h3>
                <p className="text-sm text-slate-600">{m.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sẵn sàng bắt đầu?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Hãy cùng nhau kiến tạo chuỗi cung ứng minh bạch, bền vững cho Việt Nam.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact?product=consulting#trial" className="btn-primary px-8 py-4 rounded-lg font-semibold">
                Liên hệ
              </Link>
              <Link href="/contact" className="btn-outline px-8 py-4 rounded-lg font-semibold">
                Liên hệ
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
