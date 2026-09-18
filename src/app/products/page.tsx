import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import BackLink from "@/components/ui/BackLink";
import {
  RefreshCw,
  BarChart3,
  Receipt,
  Users,
  Cpu,
  AlertTriangle,
  ClipboardCheck,
  FileCheck2,
  QrCode,
  History,
  Globe,
  ShieldCheck,
  Camera,
  CheckCircle2,
  Sparkles,
  FlaskConical,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sản phẩm & Giải pháp Công nghệ – OriginTrace",
  description:
    "Khám phá các sản phẩm và giải pháp công nghệ của OriginTrace, từ SaaS Kế toán, CHEMOPS, AquaEnv đến nền tảng truy xuất nguồn gốc và quản lý dữ liệu.",
};

function FeatureCard({
  title,
  description,
  color,
  icon,
}: {
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="stripe-card bg-white rounded-2xl p-6 border border-[#f0f2f5] transition hover:-translate-y-1 hover:shadow-lg">
      <div className="w-[42px] h-[42px] rounded-[11px] flex items-center justify-center mb-4" style={{ background: `${color}1a` }}>
        {icon}
      </div>
      <h4 className="text-sm font-bold text-ink mb-1.5">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <section className="py-16 md:py-14">
        <div className="max-w-6xl mx-auto px-6">
          <BackLink />
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-2 text-green">Sản phẩm</p>
            <h1 className="text-4xl font-bold mb-4 text-ink">Bộ giải pháp toàn diện cho doanh nghiệp</h1>
            <p className="text-slate-500 text-[17px] leading-relaxed">
              4 nền tảng chuyên biệt, cùng chung một hệ sinh thái dữ liệu minh bạch — từ tài chính,
              hóa chất đến môi trường và truy xuất nguồn gốc.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "#saas-ke-toan", label: "SaaS Kế toán", src: "/images/logos/saas-accounting-logo.png" },
              { href: "/chemops", label: "CHEMOPS", src: "/images/logos/logo-chemops.jpg" },
              { href: "#aquaenv", label: "AquaEnv", src: "/images/logos/aquaenv-logo.png" },
              { href: "#originvn", label: "OriginVN – Nông Nghiệp Số", src: "/images/logos/origintrace-leaf.jpg" },
            ].map((p) => (
              <Link key={p.label} href={p.href} className="quicknav-pill flex items-center gap-2.5 px-[18px] py-3 rounded-xl border border-[#eef1f3] bg-white text-sm font-semibold text-ink transition hover:border-[#d8dde3] hover:-translate-y-0.5 hover:shadow-md">
                <span className="w-8 h-8 flex items-center justify-center relative text-blue">
                  <Image src={p.src} alt={p.label} fill className="object-contain" />
                </span>
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SAAS KẾ TOÁN */}
      <section id="saas-ke-toan" className="py-[88px] bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="mb-8">
              <div className="text-xs font-bold tracking-widest uppercase text-blue">Tài chính - Kế toán</div>
              <h2 className="text-[26px] font-bold text-ink mt-0.5">SaaS Kế toán</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
                  Quản lý tài chính doanh nghiệp toàn diện, tích hợp trực tiếp với MISA và các nền
                  tảng kế toán phổ biến tại Việt Nam.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <FeatureCard color="var(--color-blue)" title="Đồng bộ MISA" description="Kết nối 2 chiều tự động, không cần nhập liệu thủ công." icon={<RefreshCw size={20} strokeWidth={1.8} className="text-blue" />} />
                  <FeatureCard color="var(--color-blue)" title="Báo cáo thời gian thực" description="Tự động cập nhật số liệu tài chính theo thời gian thực." icon={<BarChart3 size={20} strokeWidth={1.8} className="text-blue" />} />
                  <FeatureCard color="var(--color-blue)" title="Hóa đơn & công nợ" description="Quản lý hóa đơn, công nợ tập trung trên một màn hình." icon={<Receipt size={20} strokeWidth={1.8} className="text-blue" />} />
                  <FeatureCard color="var(--color-blue)" title="Phân quyền chi nhánh" description="Phân quyền linh hoạt theo phòng ban, chi nhánh." icon={<Users size={20} strokeWidth={1.8} className="text-blue" />} />
                </div>
                <Link href="/contact?product=saas-ke-toan#trial" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] font-semibold text-[15px]">
                  Liên hệ
                </Link>
              </div>

              {/* Showcase SaaS Kế toán */}
              <div className="relative rounded-3xl border border-slate-200/80 shadow-md overflow-hidden w-full aspect-square flex items-center justify-center bg-white">
                <Image
                  src="/images/products/saas-accounting-dashboard-hd.jpg"
                  alt="Giao diện phần mềm SaaS Kế toán kết nối đồng bộ MISA theo thời gian thực"
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  quality={95}
                  className="object-cover w-full h-full block"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CHEMOPS */}
      <section id="chemops" className="py-[88px] bg-[#F7FBF8] border-y border-slate-100/80">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="mb-8">
              <div className="text-xs font-bold tracking-widest uppercase text-green">Hóa chất công nghiệp</div>
              <h2 className="text-[26px] font-bold text-ink mt-0.5">CHEMOPS</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
                  Nền tảng quản trị doanh nghiệp hóa chất toàn diện — từ vận hành nội bộ, AI thông
                  minh đến hệ sinh thái kết nối toàn ngành. Có lộ trình triển khai 3 giai đoạn chi
                  tiết trên trang riêng.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <FeatureCard color="var(--color-green)" title="Quản trị kho & SDS" description="Quản lý an toàn hóa chất, hạn dùng & phân loại theo chuẩn GHS." icon={<FlaskConical size={20} strokeWidth={1.8} className="text-green" />} />
                  <FeatureCard color="var(--color-green)" title="Kiểm soát tuân thủ" description="Tự động xuất báo cáo định kỳ nộp cơ quan quản lý Nhà nước." icon={<ShieldCheck size={20} strokeWidth={1.8} className="text-green" />} />
                  <FeatureCard color="var(--color-green)" title="AI định mức sản xuất" description="Tối ưu tỷ lệ pha chế, cảnh báo thất thoát và giảm hao hụt." icon={<Sparkles size={20} strokeWidth={1.8} className="text-green" />} />
                  <FeatureCard color="var(--color-green)" title="Lộ trình 3 giai đoạn" description="Từ số hóa nội bộ, ERP chuyên sâu đến sàn thương mại toàn ngành." icon={<Layers size={20} strokeWidth={1.8} className="text-green" />} />
                </div>
                <div className="flex flex-wrap gap-3.5">
                  <Link href="/chemops" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] font-semibold text-[15px]">
                    Xem chi tiết CHEMOPS →
                  </Link>
                  <Link href="/contact?product=chemops#trial" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] font-semibold text-[15px] border border-slate-300 text-ink hover:border-slate-400 bg-white transition-colors">
                    Liên hệ
                  </Link>
                </div>
              </div>

              {/* Showcase CHEMOPS */}
              <div className="relative rounded-3xl border border-slate-200/80 shadow-md overflow-hidden w-full aspect-square flex items-center justify-center bg-white">
                <Image
                  src="/images/products/chemops-dashboard-hd.jpg"
                  alt="Nền tảng quản trị doanh nghiệp hóa chất toàn diện CHEMOPS"
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  quality={95}
                  className="object-cover w-full h-full block"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AQUAENV */}
      <section id="aquaenv" className="py-[88px] bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="mb-8">
              <div className="text-xs font-bold tracking-widest uppercase text-blue">Môi trường - Nước thải</div>
              <h2 className="text-[26px] font-bold text-ink mt-0.5">AquaEnv</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
                  Giám sát nhà máy xử lý nước thải theo thời gian thực bằng SCADA, IoT và trí tuệ
                  nhân tạo — dự báo sự cố, tự động hóa báo cáo tuân thủ môi trường.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <FeatureCard color="var(--color-blue)" title="Kết nối SCADA/IoT" description="Giám sát cảm biến theo thời gian thực, mọi lúc mọi nơi." icon={<Cpu size={20} strokeWidth={1.8} className="text-blue" />} />
                  <FeatureCard color="var(--color-blue)" title="AI dự báo sự cố" description="Dự báo chất lượng nước và cảnh báo sự cố thiết bị sớm." icon={<AlertTriangle size={20} strokeWidth={1.8} className="text-blue" />} />
                  <FeatureCard color="var(--color-blue)" title="Sổ trực điện tử" description="Đối chiếu tự động với dữ liệu cảm biến thực tế." icon={<ClipboardCheck size={20} strokeWidth={1.8} className="text-blue" />} />
                  <FeatureCard color="var(--color-blue)" title="Báo cáo môi trường" description="Tự động lập báo cáo môi trường cuối năm." icon={<FileCheck2 size={20} strokeWidth={1.8} className="text-blue" />} />
                </div>
                <Link href="/contact?product=aquaenv#trial" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] font-semibold text-[15px]">
                  Liên hệ
                </Link>
              </div>

              {/* Showcase AquaEnv */}
              <div className="relative rounded-3xl border border-slate-200/80 shadow-md overflow-hidden w-full aspect-square flex items-center justify-center bg-white">
                <Image
                  src="/images/products/aquaenv-dashboard-hd.jpg"
                  alt="Hệ thống giám sát nhà máy xử lý nước thải AquaEnv bằng SCADA và IoT"
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  quality={95}
                  className="object-cover w-full h-full block"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ORIGINVN */}
      <section id="originvn" className="py-[88px] bg-[#F7FBF8] relative">
        <span id="origintrace" className="absolute -top-24 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="mb-8">
              <div className="text-xs font-bold tracking-widest uppercase text-green">Nông nghiệp số · Truy xuất nguồn gốc</div>
              <h2 className="text-[26px] font-bold text-ink mt-0.5">OriginVN – Nông Nghiệp Số</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
                  Ứng dụng di động triển khai nền tảng OriginTrace cho lĩnh vực nông nghiệp — giúp
                  nông dân, kỹ sư nông nghiệp và hợp tác xã ghi nhận nhật ký canh tác hàng ngày kèm
                  ảnh và tọa độ GPS, được kỹ sư xác minh thực địa, và tạo mã QR truy xuất nguồn gốc
                  cho lô hàng. Ứng dụng hiện <strong>hoàn toàn miễn phí</strong>, không có gói trả
                  phí hay mua hàng trong ứng dụng.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <FeatureCard color="var(--color-green)" title="Nhật ký canh tác điện tử" description="Ghi nhận hoạt động canh tác hàng ngày kèm ảnh và tọa độ GPS." icon={<Camera size={20} strokeWidth={1.8} className="text-green" />} />
                  <FeatureCard color="var(--color-green)" title="Xác minh bởi kỹ sư" description="Kỹ sư nông nghiệp xác minh thực địa trước khi dữ liệu được duyệt." icon={<CheckCircle2 size={20} strokeWidth={1.8} className="text-green" />} />
                  <FeatureCard color="var(--color-green)" title="QR truy xuất nguồn gốc" description="Tạo mã QR liên kết chuỗi nhật ký đã xác minh cho từng lô hàng." icon={<QrCode size={20} strokeWidth={1.8} className="text-green" />} />
                  <FeatureCard color="var(--color-green)" title="Miễn phí sử dụng" description="Không thu phí người dùng, không có gói trả phí hay mua hàng trong ứng dụng." icon={<Sparkles size={20} strokeWidth={1.8} className="text-green" />} />
                </div>
                <Link href="/contact?product=originvn#trial" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] font-semibold text-[15px]">
                  Gửi đề nghị tham gia mạng lưới
                </Link>
                <p className="text-xs text-slate-400 mt-3.5 max-w-md">
                  Dành cho nông dân, kỹ sư nông nghiệp, hợp tác xã và nông trại. Việc gửi đề nghị
                  hoàn toàn miễn phí và không tự động tạo tài khoản — đội ngũ OriginVN sẽ tiếp
                  nhận, xác minh và hướng dẫn cấp tài khoản nếu phù hợp.
                </p>
              </div>

              {/* MOCKUP APP ORIGINVN */}
              <div className="relative flex items-center justify-center p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-white to-emerald-50/40 border border-slate-200/80 shadow-sm overflow-hidden">
                {/* Background decorative glow */}
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-green/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue/5 rounded-full blur-3xl pointer-events-none" />

                {/* Smartphone Mockup */}
                <div className="relative z-10 w-full max-w-[280px] sm:max-w-[300px] md:max-w-[315px]">
                  <div className="relative p-2.5 sm:p-3 rounded-[38px] bg-slate-900 shadow-[0_25px_60px_-15px_rgba(11,30,59,0.22),0_12px_28px_-8px_rgba(0,166,81,0.2)] ring-1 ring-slate-800">
                    <div className="rounded-[28px] overflow-hidden bg-white shadow-inner">
                      <Image
                        src="/images/products/originvn-app.jpg"
                        alt="Giao diện ứng dụng di động OriginVN – Nông Nghiệp Số"
                        width={500}
                        height={1080}
                        quality={95}
                        className="w-full h-auto object-cover block"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-[100px]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-xs font-bold tracking-widest uppercase text-green mb-5">Chưa chắc bắt đầu từ đâu?</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Đội ngũ Origin Trace sẵn sàng tư vấn</h2>
            <p className="text-slate-500 text-[17px] mb-10 max-w-[480px] mx-auto">
              Chúng tôi sẽ tư vấn giải pháp phù hợp nhất với quy mô và ngành nghề của doanh nghiệp
              bạn.
            </p>
            <Link href="/contact?product=consulting#trial" className="btn-primary inline-block px-9 py-3.5 rounded-[10px] font-semibold text-[15px]">
              Liên hệ
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
