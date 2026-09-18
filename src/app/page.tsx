import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/ContactForm";
import { getSiteSettings } from "@/data/site-settings";
import { ArrowRight, Phone, Mail, MapPin, Check, Sparkles } from "lucide-react";

export default function HomePage() {
  const settings = getSiteSettings();

  return (
    <>
      {/* HERO */}
      <div className="hero-bg relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-12 gap-12 items-center relative">
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6 bg-green/10 text-green-dark">
              Nền tảng truy xuất nguồn gốc cho doanh nghiệp
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Một nền tảng để
              <br />
              <span className="text-green">truy xuất, kiểm soát</span>
              <br />
              <span className="text-blue">và chứng minh nguồn gốc</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Origin Trace giúp doanh nghiệp chuẩn hóa dữ liệu lô hàng, định danh bằng QR, theo dõi
              chuỗi cung ứng và xuất hồ sơ minh bạch cho khách hàng, đối tác và cơ quan quản lý.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact?product=consulting#trial" className="btn-primary px-7 py-3.5 rounded-lg font-semibold">
                Liên hệ
              </Link>
              <Link href="/products" className="btn-outline px-7 py-3.5 rounded-lg font-semibold">
                Khám phá sản phẩm
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <strong className="ml-2 text-xs font-semibold text-slate-500">Origin Trace Console</strong>
              </div>
              <div className="grid grid-cols-[64px_1fr]">
                <aside className="flex flex-col items-center gap-5 py-6 border-r border-slate-100 bg-slate-50">
                  <Image src="/images/logos/origintrace-leaf.jpg" alt="Origin Trace" width={30} height={30} className="rounded" />
                  <span className="text-[11px] font-semibold text-green">Lô hàng</span>
                  <span className="text-[11px] text-slate-400">QR</span>
                  <span className="text-[11px] text-slate-400">Hồ sơ</span>
                  <span className="text-[11px] text-slate-400">Báo cáo</span>
                </aside>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-[11px] text-slate-400">Ảnh minh họa giao diện</p>
                      <h3 className="font-semibold text-sm">Truy xuất lô hàng</h3>
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-green/10 text-green-dark">
                      Đang đồng bộ
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div>
                      <strong className="block text-lg">1,248</strong>
                      <span className="text-[11px] text-slate-400">Mã QR</span>
                    </div>
                    <div>
                      <strong className="block text-lg">98.7%</strong>
                      <span className="text-[11px] text-slate-400">Hồ sơ đủ</span>
                    </div>
                    <div>
                      <strong className="block text-lg">12</strong>
                      <span className="text-[11px] text-slate-400">Cảnh báo</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    {[
                      { label: "Sản xuất", status: "Hoàn tất" },
                      { label: "Kiểm định", status: "Đạt" },
                      { label: "Vận chuyển", status: "Realtime" },
                      { label: "Bàn giao", status: "Chờ xác nhận" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between py-1.5 border-b border-slate-50 last:border-0">
                        <span className="text-slate-500">{row.label}</span>
                        <strong className="text-slate-700">{row.status}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PLATFORM FLOW */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <Reveal className="lg:col-span-4">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-blue">Nền tảng</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-snug">
              Từ dữ liệu rời rạc đến hồ sơ nguồn gốc có thể chứng minh
            </h2>
            <p className="text-slate-600 mb-6">
              Origin Trace không chỉ tạo mã QR. Nền tảng giúp doanh nghiệp thu thập, chuẩn hóa và
              trình bày dữ liệu truy xuất theo một luồng vận hành nhất quán.
            </p>
            <Link href="/contact?product=consulting#trial" className="btn-outline inline-flex px-6 py-3 rounded-lg font-semibold text-sm">
              Trao đổi bài toán của bạn
            </Link>
          </Reveal>
          <Reveal stagger className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {[
              { i: "01", t: "Định danh lô hàng", d: "Tạo mã QR/serial cho sản phẩm, lô hàng hoặc tài sản cần theo dõi." },
              { i: "02", t: "Ghi nhận sự kiện", d: "Lưu lại các mốc sản xuất, kiểm định, vận chuyển, nhập kho và bàn giao." },
              { i: "03", t: "Kiểm tra minh bạch", d: "Cho phép khách hàng, đối tác hoặc nội bộ quét để xem thông tin được phân quyền." },
              { i: "04", t: "Xuất hồ sơ báo cáo", d: "Tổng hợp lịch sử dữ liệu thành hồ sơ phục vụ đối soát, kiểm tra và tuân thủ." },
            ].map((step) => (
              <div key={step.i} className="platform-step">
                <div className="platform-step-index">{step.i}</div>
                <h3 className="text-[1.08rem] font-extrabold mb-1.5">{step.t}</h3>
                <p className="text-slate-500 text-[0.96rem] leading-relaxed">{step.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* SẢN PHẨM */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-green">Sản phẩm</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-snug">
                Bộ giải pháp
                <br />
                toàn diện cho
                <br />
                doanh nghiệp
              </h2>
              <p className="text-slate-600 mb-4">
                4 nền tảng chuyên biệt, cùng chung một hệ sinh thái dữ liệu minh bạch — từ tài
                chính đến môi trường.
              </p>
              <div className="mb-6">
                <Link href="/products" className="inline-flex items-center gap-2 text-blue font-semibold text-sm">
                  Xem tất cả sản phẩm
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
              </div>
              <Link href="/contact?product=consulting#trial" className="btn-outline inline-block px-6 py-3 rounded-lg font-semibold text-sm">
                Liên hệ
              </Link>
            </div>
          </Reveal>

          <Reveal stagger className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            <Link href="/products#aquaenv" className="card sm:row-span-2 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 mb-6 relative">
                  <Image src="/images/logos/aquaenv-logo.png" alt="AquaEnv" fill className="object-contain" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-blue/10 text-blue">
                  Môi trường
                </span>
                <h3 className="font-semibold text-xl mt-4 mb-3">AquaEnv</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Giám sát nhà máy xử lý nước thải theo thời gian thực bằng SCADA, IoT và trí tuệ
                  nhân tạo — dự báo sự cố, tự động hóa báo cáo tuân thủ môi trường.
                </p>
              </div>
            </Link>

            <Link href="/chemops" className="card rounded-2xl p-7">
              <div className="w-12 h-12 mb-5 relative">
                <Image src="/images/logos/logo-chemops.jpg" alt="CHEMOPS" fill className="object-contain" />
              </div>
              <h3 className="font-semibold text-lg mb-2">CHEMOPS</h3>
              <p className="text-slate-600 text-sm">
                Quản lý vận hành và sử dụng hóa chất trong sản xuất công nghiệp, đảm bảo an toàn và
                tuân thủ.
              </p>
            </Link>

            <Link href="/products#saas-ke-toan" className="card rounded-2xl p-7">
              <div className="w-12 h-12 mb-5 relative">
                <Image src="/images/logos/saas-accounting-logo.png" alt="SaaS Kế toán" fill className="object-contain" />
              </div>
              <h3 className="font-semibold text-lg mb-2">SaaS Kế toán</h3>
              <p className="text-slate-600 text-sm">
                Quản lý tài chính doanh nghiệp, tích hợp trực tiếp với MISA và các nền tảng kế toán
                phổ biến.
              </p>
            </Link>

            <Link
              href="/products#originvn"
              className="card sm:col-span-2 rounded-2xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-white via-[#F7FBF8] to-emerald-50/50 border border-slate-200/80 overflow-hidden relative group block"
            >
              {/* Background ambient glow */}
              <div className="absolute -right-8 -bottom-8 w-60 h-60 bg-green/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
                <div className="md:col-span-7">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-green/10 text-green-dark mb-4">
                    <Sparkles size={13} className="text-green" />
                    <span>Ứng dụng di động · Miễn phí</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-ink mb-3 group-hover:text-green-dark transition-colors">
                    OriginVN – Nông Nghiệp Số
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6">
                    Số hóa quy trình canh tác, nhật ký đồng ruộng định vị GPS và tự động cấp mã QR truy xuất nguồn gốc lô hàng — hoàn toàn miễn phí cho nông dân, kỹ sư và hợp tác xã.
                  </p>
                  <div className="space-y-2.5 mb-6 text-sm text-slate-700">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-green/10 flex items-center justify-center text-green shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span>Nhật ký canh tác & ảnh chụp định vị GPS thực địa</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-green/10 flex items-center justify-center text-green shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span>Xác minh độc lập bởi kỹ sư nông nghiệp</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-green/10 flex items-center justify-center text-green shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span>Tạo mã QR truy xuất nguồn gốc từng lô hàng</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-green font-bold text-sm group-hover:translate-x-1.5 transition-transform">
                    <span>Khám phá ứng dụng OriginVN</span>
                    <ArrowRight size={16} strokeWidth={2} />
                  </span>
                </div>

                <div className="md:col-span-5 flex items-center justify-center">
                  <div className="w-full max-w-[220px] sm:max-w-[240px] md:max-w-[250px] transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="p-2 sm:p-2.5 rounded-[34px] bg-slate-900 shadow-[0_20px_45px_-10px_rgba(11,30,59,0.2),0_8px_20px_-6px_rgba(0,166,81,0.2)] ring-1 ring-slate-800">
                      <div className="rounded-[26px] overflow-hidden bg-white shadow-inner">
                        <Image
                          src="/images/products/originvn-app.jpg"
                          alt="Giao diện ứng dụng OriginVN – Nông Nghiệp Số"
                          width={500}
                          height={1080}
                          quality={95}
                          className="w-full h-auto object-cover block"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>

      {/* TÍNH NĂNG NỔI BẬT */}
      <div className="py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <Reveal className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-blue">Tính năng</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-snug">
                  Những năng lực
                  <br />
                  cần có cho một
                  <br />
                  hệ thống truy xuất
                </h2>
                <p className="text-slate-600">
                  Tập trung vào khả năng vận hành thật: dữ liệu tập trung, cảnh báo kịp thời, phân
                  quyền rõ ràng và báo cáo có thể sử dụng.
                </p>
              </div>
            </Reveal>

            <Reveal stagger className="lg:col-span-8 relative">
              <div className="space-y-6">
                {[
                  { i: "01", t: "Truy xuất realtime", d: "Theo dõi trạng thái lô hàng, vị trí, chứng từ và ngoại lệ trong cùng một luồng dữ liệu." },
                  { i: "02", t: "Cảnh báo và tự động hóa", d: "Nhắc việc khi dữ liệu thiếu, hồ sơ sắp hết hạn hoặc quy trình có dấu hiệu bất thường." },
                  { i: "03", t: "Dashboard đa điểm vận hành", d: "Quản lý nhiều nhà máy, kho, vùng nguyên liệu hoặc chi nhánh trên cùng một màn hình." },
                  { i: "04", t: "Hồ sơ tuân thủ", d: "Lưu lịch sử dữ liệu, chứng từ và nhật ký thao tác để phục vụ kiểm tra khi cần." },
                  { i: "05", t: "Tích hợp hệ thống sẵn có", d: "Kết nối với kế toán, kho, cảm biến, biểu mẫu nội bộ hoặc chatbot hỗ trợ vận hành." },
                  { i: "06", t: "Báo cáo cho đối tác và cơ quan quản lý", d: "Xuất dữ liệu theo nhu cầu đối soát, nghiệm thu, kiểm tra chất lượng hoặc báo cáo định kỳ." },
                ].map((item) => (
                  <div key={item.i} className="card bg-white rounded-xl p-6 flex gap-4 items-start">
                    <span className="hidden sm:flex w-11 h-11 rounded-full items-center justify-center text-xs font-bold text-white shrink-0 bg-gradient-to-br from-blue to-green">
                      {item.i}
                    </span>
                    <div>
                      <h3 className="font-semibold mb-1">{item.t}</h3>
                      <p className="text-sm text-slate-600">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* COMPLIANCE */}
      <div className="compliance-band">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-green">Chuẩn hóa & tuân thủ</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Hồ sơ truy xuất được thiết kế để kiểm tra được</h2>
              <p className="text-slate-600">
                Dữ liệu nguồn gốc chỉ có giá trị khi có thể kiểm chứng. Origin Trace giúp gom dữ
                liệu vận hành thành hồ sơ có cấu trúc, có lịch sử và có quyền truy cập rõ ràng.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
              {[
                { n: "01", t: "Nhật ký dữ liệu", d: "Lưu lại sự kiện và thay đổi quan trọng trong vòng đời lô hàng." },
                { n: "02", t: "Phân quyền xem", d: "Tách thông tin nội bộ, đối tác và người quét QR ngoài thị trường." },
                { n: "03", t: "Báo cáo linh hoạt", d: "Chuẩn bị dữ liệu cho đối soát, nghiệm thu, kiểm tra và quản trị." },
              ].map((c) => (
                <div key={c.n} className="compliance-card">
                  <span>{c.n}</span>
                  <h3 className="mt-3 mb-1.5 text-ink font-extrabold">{c.t}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* HỢP TÁC NHÀ NƯỚC */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Reveal className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-green">Hợp tác Nhà nước</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Đồng hành cùng cơ quan quản lý</h2>
            <p className="text-slate-600 mb-6">
              Origin Trace hợp tác với các cơ quan Nhà nước trong các dự án đối tác công-tư (PPP)
              và đề tài khoa học công nghệ, hướng tới xây dựng hạ tầng dữ liệu truy xuất nguồn gốc
              minh bạch cho ngành nông nghiệp, thủy sản và công nghiệp Việt Nam.
            </p>
            <div className="border-l-4 pl-5 py-1 border-green">
              <p className="italic text-slate-700 mb-2">
                Khu vực này đã sẵn sàng để bổ sung case study, kết quả triển khai và trích dẫn từ
                đối tác khi có thông tin chính thức.
              </p>
              <p className="text-sm text-slate-500">— Hồ sơ hợp tác đang được cập nhật</p>
            </div>
            <div className="mt-5">
              <Link href="/government" className="inline-flex items-center gap-2 text-green font-semibold text-sm">
                Xem tất cả dự án hợp tác
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden border border-[#DDEAE2] bg-[#F5FAF7] shadow-[0_20px_50px_rgba(11,30,59,0.06),0_10px_20px_rgba(31,122,61,0.05)] transition-all duration-300 hover:shadow-xl">
              <Image
                src="/images/government-ecosystem-v2.jpg"
                alt="Origin Trace Data Hub – Kết nối hệ sinh thái dữ liệu minh bạch giữa Cơ quan Nhà nước, Viện / Trung tâm, Doanh nghiệp, Địa phương và Đơn vị kiểm định"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 680px"
                quality={95}
                className="object-contain w-full h-full block"
                priority
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* VỀ CHÚNG TÔI (rút gọn) */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Reveal className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 lg:order-2">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-blue">Về chúng tôi</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Origin Trace Việt Nam</h2>
            <p className="text-slate-600 mb-4">
              <strong>Tầm nhìn:</strong> Trở thành nền tảng Truy xuất nguồn gốc thông minh hàng đầu
              Đông Nam Á, kết nối nguồn gốc Việt Nam với thị trường toàn cầu.
            </p>
            <p className="text-slate-600">
              <strong>Sứ mệnh:</strong> Kiến tạo nền tảng AI truy xuất nguồn gốc thông minh, kết nối
              chuỗi cung ứng hóa chất, nông nghiệp, thủy sản và sản phẩm Việt Nam với thị trường
              toàn cầu — minh bạch, tuân thủ và bền vững.
            </p>
            <div className="mt-5">
              <Link href="/about-us" className="inline-flex items-center gap-2 text-blue font-semibold text-sm">
                Tìm hiểu thêm về chúng tôi
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 lg:order-1 relative">
            <div className="relative rounded-2xl p-10 flex items-center justify-center bg-bg-soft border border-line">
              <Image src="/images/logos/logo.png" alt="Origin Trace" width={220} height={220} className="w-48 h-auto" />
            </div>
          </div>
        </Reveal>
      </div>


      {/* LIÊN HỆ / FORM */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-green">Liên hệ</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn sàng minh bạch hóa chuỗi cung ứng?</h2>
            <div className="space-y-4 text-slate-700">
              <p className="flex items-center gap-3 text-lg font-semibold text-blue">
                <Phone size={20} strokeWidth={2} />
                {settings.phone}
              </p>
              <p className="flex items-center gap-3">
                <Mail size={20} strokeWidth={2} className="text-green" />
                {settings.email}
              </p>
              <p className="flex items-start gap-3">
                <MapPin size={20} strokeWidth={2} className="text-green shrink-0 mt-0.5" />
                {settings.address}
              </p>
            </div>
          </div>

          <ContactForm className="lg:col-span-7" variant="home" />
        </div>
      </div>
    </>
  );
}
