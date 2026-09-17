"use client";

import { useState } from "react";
import clsx from "clsx";
import BackLink from "@/components/ui/BackLink";
import {
  Calendar,
  Clock,
  Mail,
  Globe,
  ShieldCheck,
  FileText,
  AlertCircle,
  Building2,
  MapPin,
} from "lucide-react";

type Lang = "both" | "vi" | "en";

const toc = [
  { id: "section-1", label: "1. Giới thiệu / Introduction" },
  { id: "section-2", label: "2. Dữ liệu thu thập / Data Collected" },
  { id: "section-3", label: "3. Quyền truy cập / Permissions" },
  { id: "section-4", label: "4. Mục đích / Purpose of Use" },
  { id: "section-5", label: "5. Lưu trữ & Bảo mật / Security" },
  { id: "section-6", label: "6. Xóa Tài khoản / Account Deletion" },
  { id: "section-7", label: "7. Quyền người dùng / User Rights" },
  { id: "section-8", label: "8. Trẻ em / Children's Privacy" },
  { id: "section-9", label: "9. Liên hệ / Contact Us" },
];

function Bilingual({ lang, vi, en }: { lang: Lang; vi: React.ReactNode; en: React.ReactNode }) {
  return (
    <>
      {lang !== "en" && <div className="space-y-3 leading-relaxed">{vi}</div>}
      {lang !== "vi" && (
        <div className={clsx("space-y-3 leading-relaxed", lang === "both" && "mt-4 pt-4 border-t border-dashed border-line")}>
          {lang === "both" && (
            <span className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-0.5 rounded uppercase tracking-wider mb-2">
              English Translation
            </span>
          )}
          <div className="text-slate-500">{en}</div>
        </div>
      )}
    </>
  );
}

const permissions = [
  {
    name: "Vị trí (Location - GPS)",
    purpose: "Xác định tọa độ thực địa lô đất, đóng dấu vị trí vào ảnh chụp nhật ký.",
    purposeEn: "Determine field coordinates & stamp GPS watermarks on log photos.",
    required: "Bắt buộc / Required",
  },
  {
    name: "Máy ảnh (Camera)",
    purpose: "Chụp hình ảnh cây trồng/sâu bệnh tại vườn và Quét mã QR truy xuất nông sản.",
    purposeEn: "Take crop/pest photos and scan traceability QR codes.",
    required: "Bắt buộc / Required",
  },
  {
    name: "Bộ nhớ (Storage)",
    purpose: "Lưu tạm ảnh nén nhật ký trên máy khi ngắt kết nối mạng (Chế độ Offline-First).",
    purposeEn: "Temporarily store log photos during offline mode.",
    required: "Khuyên dùng / Recommended",
  },
  {
    name: "Thông báo (Push Notifications)",
    purpose: "Gửi cảnh báo thời tiết nguy hiểm (mưa lớn, sương muối) và duyệt nhật ký.",
    purposeEn: "Send weather alerts and engineer log approvals.",
    required: "Tùy chọn / Optional",
  },
];

export default function PrivacyPolicyClient() {
  const [lang, setLang] = useState<Lang>("both");

  return (
    <div className="bg-bg-soft/50 min-h-screen">
      {/* Header / Hero Section */}
      <header className="bg-gradient-to-b from-[#F5FAF7] via-white to-white border-b border-line pt-8 pb-12 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-4">
            <BackLink />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green/10 text-green-dark border border-green/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-green" />
              Google Play &amp; Apple App Store Compliant
            </div>

            <h1 className="font-display text-3xl md:text-5xl font-bold text-ink mb-3 tracking-tight">
              Chính Sách Quyền Riêng Tư
              <span className="block text-xl md:text-2xl font-semibold text-slate-500 mt-1">
                Privacy Policy
              </span>
            </h1>

            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-6">
              Ứng dụng Quản lý Nông nghiệp Thông minh &amp; Truy xuất Nguồn gốc{" "}
              <strong className="text-ink">OriginVN</strong>
              <span className="block text-sm text-slate-400 mt-1 italic">
                OriginVN Smart Agriculture &amp; Traceability Mobile Application
              </span>
            </p>

            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 text-xs md:text-sm text-slate-600 mb-6 py-2 px-4 bg-white rounded-full border border-line shadow-xs w-fit mx-auto">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5 text-green" /> Version 1.0.0
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-green" /> Cập nhật: 27/08/2026
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Mail className="w-3.5 h-3.5 text-green" /> origintracevietnam@gmail.com
              </span>
            </div>

            {/* Language Switcher */}
            <div className="flex justify-center gap-2 flex-wrap">
              {(
                [
                  ["both", "🌐 Song Ngữ / Both"],
                  ["vi", "🇻🇳 Tiếng Việt"],
                  ["en", "🇬🇧 English"],
                ] as [Lang, string][]
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setLang(value)}
                  className={clsx(
                    "px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold border transition-all duration-150",
                    lang === value
                      ? "bg-green border-green text-white shadow-xs"
                      : "bg-white border-line text-slate-600 hover:bg-slate-50 hover:text-ink hover:border-slate-300"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area with Sticky TOC */}
      <div className="max-w-[1100px] mx-auto px-6 pt-10 pb-20 grid md:grid-cols-[280px_1fr] gap-8">
        {/* Table of Contents sidebar */}
        <nav className="md:sticky md:top-24 h-fit bg-white rounded-2xl p-5 border border-line shadow-xs">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 pb-2 border-b border-line">
            Mục Lục / Contents
          </h3>
          <ul className="space-y-1">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block text-slate-600 text-sm font-medium px-3 py-2 rounded-lg hover:bg-green/10 hover:text-green-dark transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}
        <main className="flex flex-col gap-6">
          {/* SECTION 1 */}
          <section id="section-1" className="bg-white rounded-2xl p-7 md:p-8 border border-line shadow-xs scroll-mt-24">
            <h2 className="font-display text-xl md:text-2xl font-bold text-ink mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-green/10 text-green font-bold inline-flex items-center justify-center text-sm shrink-0">
                1
              </span>
              Giới Thiệu Tổng Quan / Introduction
            </h2>
            <Bilingual
              lang={lang}
              vi={
                <>
                  <p>
                    <strong>OriginVN</strong> (gọi tắt là &quot;Chúng tôi&quot;, &quot;Ứng dụng&quot;)
                    cam kết bảo vệ tuyệt đối quyền riêng tư và an toàn dữ liệu cá nhân của người
                    dùng (bao gồm Nông dân, Kỹ sư nông nghiệp, Quản lý Hợp tác xã và Người tiêu
                    dùng truy xuất nguồn gốc).
                  </p>
                  <p>
                    Chính sách quyền riêng tư này giải thích rõ ràng cách chúng tôi thu thập, sử
                    dụng, lưu trữ, xử lý và bảo vệ thông tin khi bạn truy cập và sử dụng ứng dụng
                    di động OriginVN trên hệ điều hành Android (Google Play Store) và iOS (Apple
                    App Store).
                  </p>
                </>
              }
              en={
                <>
                  <p>
                    <strong>OriginVN</strong> (&quot;We&quot;, &quot;Our&quot;, or &quot;The
                    App&quot;) is committed to protecting your privacy and safeguarding your
                    personal data (including Farmers, Agricultural Engineers, Cooperative Managers,
                    and Consumers scanning QR codes).
                  </p>
                  <p>
                    This Privacy Policy clearly explains how we collect, use, store, process, and
                    protect your information when you access and use the OriginVN mobile
                    application on Android (Google Play Store) and iOS (Apple App Store).
                  </p>
                </>
              }
            />
            <div className="rounded-xl p-5 mt-5 border-l-4 border-blue bg-blue/5">
              <div className="flex items-center gap-2 font-bold text-ink mb-2">
                <FileText className="w-4 h-4 text-blue shrink-0" />
                <span>Phạm vi áp dụng / Scope of Application</span>
              </div>
              {lang !== "en" && (
                <p className="text-sm text-slate-700">
                  Bằng việc tải về, cài đặt và đăng nhập ứng dụng OriginVN, bạn đồng ý với các điều
                  khoản thu thập và xử lý dữ liệu được mô tả trong tài liệu này.
                </p>
              )}
              {lang !== "vi" && (
                <p className="text-sm text-blue italic mb-0">
                  By downloading, installing, and logging into the OriginVN application, you agree
                  to the collection and processing of your data as described in this policy.
                </p>
              )}
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="section-2" className="bg-white rounded-2xl p-7 md:p-8 border border-line shadow-xs scroll-mt-24">
            <h2 className="font-display text-xl md:text-2xl font-bold text-ink mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-green/10 text-green font-bold inline-flex items-center justify-center text-sm shrink-0">
                2
              </span>
              Dữ Liệu Thu Thập / Information We Collect
            </h2>
            <Bilingual
              lang={lang}
              vi={
                <>
                  <p>
                    Để vận hành các tính năng canh tác nông nghiệp, đóng dấu nhật ký thực địa và
                    truy xuất nguồn gốc nông sản, OriginVN thu thập các nhóm dữ liệu sau:
                  </p>
                  <h3 className="font-display font-bold text-ink mt-4 mb-2 text-base">A. Thông tin do bạn cung cấp trực tiếp:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Thông tin tài khoản:</strong> Họ và tên, Số điện thoại, Vai trò (Nông dân / Kỹ sư / Quản lý HTX), Tên Lô đất / Farm phụ trách.</li>
                    <li><strong>Nhật ký canh tác:</strong> Thông tin hoạt động bón phân, xịt thuốc BVTV, tưới tiêu, thu hoạch, hình ảnh chụp tại vườn.</li>
                  </ul>
                  <h3 className="font-display font-bold text-ink mt-4 mb-2 text-base">B. Thông tin được thu thập tự động từ thiết bị:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Vị trí địa lý (Precise GPS Location):</strong> Tọa độ Vĩ độ (Latitude) và Kinh độ (Longitude) thực tế ngoài đồng ruộng.</li>
                    <li><strong>Hình ảnh &amp; Máy ảnh (Camera &amp; Photos):</strong> Ảnh chụp hoạt động canh tác để nén và đóng dấu GPS Watermark (Vị trí, thời gian, tên lô).</li>
                    <li><strong>Thông tin kỹ thuật thiết bị:</strong> Model điện thoại, phiên bản hệ điều hành (Android/iOS), ID thiết bị cho mục đích nhận thông báo đẩy (Push Notifications) và sửa lỗi ứng dụng (Crash reports).</li>
                  </ul>
                </>
              }
              en={
                <>
                  <p>
                    To operate agricultural farming features, GPS watermark field logging, and
                    produce traceability, OriginVN collects the following data categories:
                  </p>
                  <h3 className="font-display font-bold mt-4 mb-2 text-base">A. Information Provided Directly By You:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Account Information:</strong> Full Name, Phone Number, User Role (Farmer / Engineer / Manager), Assigned Farm/Plot Name.</li>
                    <li><strong>Cultivation Logs:</strong> Farming activities (fertilizing, pesticide application, irrigation, harvest) and field photos.</li>
                  </ul>
                  <h3 className="font-display font-bold mt-4 mb-2 text-base">B. Information Collected Automatically From Devices:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Precise GPS Location:</strong> Real-time Latitude and Longitude coordinates in the field.</li>
                    <li><strong>Camera &amp; Photos:</strong> Photos taken to compress and stamp GPS Watermarks (Location, timestamp, plot code).</li>
                    <li><strong>Technical Device Information:</strong> Device model, OS version (Android/iOS), FCM Push Notification token, and crash reporting logs.</li>
                  </ul>
                </>
              }
            />
          </section>

          {/* SECTION 3 */}
          <section id="section-3" className="bg-white rounded-2xl p-7 md:p-8 border border-line shadow-xs scroll-mt-24">
            <h2 className="font-display text-xl md:text-2xl font-bold text-ink mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-green/10 text-green font-bold inline-flex items-center justify-center text-sm shrink-0">
                3
              </span>
              Quyền Truy Cập Thiết Bị / App Permissions
            </h2>
            {lang !== "en" && <p>OriginVN chỉ yêu cầu các quyền truy cập tối thiểu cần thiết để vận hành tính năng cốt lõi của ứng dụng:</p>}
            {lang !== "vi" && <p className="text-slate-500 italic">OriginVN requests only the minimum required device permissions to operate core functions:</p>}
            <div className="overflow-x-auto mt-5 rounded-xl border border-line">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-line">
                    <th className="text-left p-3.5 font-bold text-ink">Quyền truy cập / Permission</th>
                    <th className="text-left p-3.5 font-bold text-ink">Mục đích sử dụng / Purpose</th>
                    <th className="text-left p-3.5 font-bold text-ink whitespace-nowrap">Bắt buộc / Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {permissions.map((p, i) => (
                    <tr key={p.name} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="p-3.5 font-semibold text-ink whitespace-nowrap">{p.name}</td>
                      <td className="p-3.5 text-slate-600">
                        {lang !== "en" && <div>{p.purpose}</div>}
                        {lang !== "vi" && <div className="text-slate-400 italic text-xs mt-0.5">{p.purposeEn}</div>}
                      </td>
                      <td className="p-3.5 font-bold text-green-dark whitespace-nowrap">{p.required}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 4 */}
          <section id="section-4" className="bg-white rounded-2xl p-7 md:p-8 border border-line shadow-xs scroll-mt-24">
            <h2 className="font-display text-xl md:text-2xl font-bold text-ink mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-green/10 text-green font-bold inline-flex items-center justify-center text-sm shrink-0">
                4
              </span>
              Mục Đích Sử Dụng Thông Tin / How We Use Information
            </h2>
            <Bilingual
              lang={lang}
              vi={
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Xác thực &amp; Quản lý phiên làm việc:</strong> Đăng nhập số điện thoại qua mã OTP an toàn.</li>
                  <li><strong>Số hóa Nhật ký Canh tác Minh bạch:</strong> Đóng dấu GPS và thời gian chính xác lên hình ảnh thực địa nhằm minh bạch hóa nguồn gốc nông sản cho Hợp tác xã và Ngân hàng.</li>
                  <li><strong>Đồng bộ Offline-First:</strong> Lưu trữ tạm thời dữ liệu trên thiết bị khi mất sóng 3G/4G và tự động đồng bộ khi có kết nối mạng trở lại.</li>
                  <li><strong>Dự báo &amp; Cảnh báo Thời tiết Nông vụ:</strong> Gửi thông báo nhắc nhở hoãn phun thuốc BVTV khi có dự báo mưa lớn.</li>
                  <li><strong>Minh bạch hóa Truy xuất Nguồn gốc:</strong> Ghi nhận mã xác thực (hash) cho từng lô hàng, cho phép người tiêu dùng quét mã QR để kiểm tra.</li>
                </ol>
              }
              en={
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Authentication &amp; Session Management:</strong> Phone number login via secure SMS OTP.</li>
                  <li><strong>Digitizing Cultivation Logs:</strong> Embedding accurate GPS coordinates and timestamps onto field photos for supply chain transparency.</li>
                  <li><strong>Offline-First Synchronization:</strong> Storing data locally when offline and syncing automatically when network connection resumes.</li>
                  <li><strong>Weather Forecasts &amp; Agricultural Alerts:</strong> Dispatching notifications to halt pesticide spraying during heavy rainfall forecasts.</li>
                  <li><strong>Traceability Verification:</strong> Recording a verification hash for each shipment batch, allowing consumers to verify it via QR code scanning.</li>
                </ol>
              }
            />
          </section>

          {/* SECTION 5 */}
          <section id="section-5" className="bg-white rounded-2xl p-7 md:p-8 border border-line shadow-xs scroll-mt-24">
            <h2 className="font-display text-xl md:text-2xl font-bold text-ink mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-green/10 text-green font-bold inline-flex items-center justify-center text-sm shrink-0">
                5
              </span>
              Lưu Trữ &amp; Bảo Mật Dữ Liệu / Data Security &amp; Retention
            </h2>
            <Bilingual
              lang={lang}
              vi={
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Mã hóa đường truyền (Data in Transit):</strong> Toàn bộ dữ liệu truyền tải giữa Mobile App và Server đều được mã hóa bằng giao thức bảo mật HTTPS / TLS 1.3.</li>
                  <li><strong>Bảo mật lưu trữ trên máy (Device Security):</strong> Token đăng nhập được lưu trữ an toàn trong vùng mã hóa phần cứng của điện thoại (expo-secure-store).</li>
                  <li><strong>Không chia sẻ thương mại:</strong> Chúng tôi tuyệt đối không bán, cho thuê hoặc chia sẻ thông tin cá nhân của bạn cho bất kỳ bên thứ ba nào vì mục đích quảng cáo.</li>
                </ul>
              }
              en={
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Data Encryption in Transit:</strong> All data transmitted between Mobile App and Backend servers is encrypted using HTTPS / TLS 1.3.</li>
                  <li><strong>On-Device Hardware Encryption:</strong> Auth tokens are stored securely inside encrypted device storage (expo-secure-store).</li>
                  <li><strong>No Commercial Data Selling:</strong> We never sell, lease, or trade your personal information to third parties for marketing purposes.</li>
                </ul>
              }
            />
          </section>

          {/* SECTION 6 */}
          <section id="section-6" className="bg-white rounded-2xl p-7 md:p-8 border border-line shadow-xs scroll-mt-24">
            <h2 className="font-display text-xl md:text-2xl font-bold text-ink mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-green/10 text-green font-bold inline-flex items-center justify-center text-sm shrink-0">
                6
              </span>
              Chính Sách Xóa Tài Khoản &amp; Dữ Liệu / Account &amp; Data Deletion Policy
            </h2>
            <div className="rounded-xl p-5 mb-5 border-l-4 border-amber-500 bg-amber-50/70">
              <div className="flex items-center gap-2 font-bold text-amber-900 mb-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Quy định bắt buộc CH Play &amp; App Store / Google Play &amp; Apple Requirement</span>
              </div>
              {lang !== "en" && <p className="text-sm text-amber-900">Người dùng có quyền xóa hoàn toàn tài khoản và toàn bộ dữ liệu cá nhân của mình bất kỳ lúc nào thông qua 2 kênh trực tiếp:</p>}
              {lang !== "vi" && <p className="text-sm text-amber-800 italic mb-0">Users have the right to request full deletion of their account and personal data at any time via 2 direct channels:</p>}
            </div>

            <h3 className="font-display font-bold text-ink mt-5 mb-2 text-base">Kênh 1: Xóa tài khoản trực tiếp trong Ứng dụng / In-App Account Deletion</h3>
            <Bilingual
              lang={lang}
              vi={
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Mở ứng dụng <strong>OriginVN</strong> và đăng nhập vào tài khoản của bạn.</li>
                  <li>Chuyển sang tab <strong>Hồ sơ (Profile)</strong>.</li>
                  <li>Cuộn xuống dưới và nhấn vào nút <strong>&quot;Xóa tài khoản&quot; (Delete Account)</strong>.</li>
                  <li>Xác nhận yêu cầu. Tài khoản của bạn sẽ ngay lập tức được đăng xuất và chuyển sang trạng thái chờ hủy.</li>
                </ol>
              }
              en={
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Open the <strong>OriginVN</strong> app and log into your account.</li>
                  <li>Navigate to the <strong>Profile</strong> tab.</li>
                  <li>Scroll down and tap <strong>&quot;Delete Account&quot;</strong>.</li>
                  <li>Confirm request. Your account will immediately log out and queue for deletion.</li>
                </ol>
              }
            />

            <h3 className="font-display font-bold text-ink mt-5 mb-2 text-base">Kênh 2: Yêu cầu xóa qua Trang Web Public hoặc Email / External Deletion Request</h3>
            <Bilingual
              lang={lang}
              vi={
                <>
                  <p>Nếu bạn đã gỡ ứng dụng hoặc không thể đăng nhập vào điện thoại, bạn có thể gửi yêu cầu xóa ngoài ứng dụng bằng cách:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Truy cập trang yêu cầu xóa trực tuyến: <a href="/delete-account" className="text-green font-semibold hover:underline">https://origintrace.vn/delete-account</a></li>
                    <li>Hoặc gửi Email đến bộ phận kỹ thuật: <a href="mailto:origintracevietnam@gmail.com" className="text-green font-semibold hover:underline">origintracevietnam@gmail.com</a> với tiêu đề &quot;Yêu cầu xóa tài khoản OriginVN - [Số điện thoại của bạn]&quot;.</li>
                  </ul>
                </>
              }
              en={
                <>
                  <p>If you have uninstalled the app or cannot log in, you can request account deletion externally via:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Online Request Portal: <a href="/delete-account" className="text-green font-semibold hover:underline">https://origintrace.vn/delete-account</a></li>
                    <li>Or Email Technical Support: <a href="mailto:origintracevietnam@gmail.com" className="text-green font-semibold hover:underline">origintracevietnam@gmail.com</a> with subject &quot;OriginVN Account Deletion Request - [Your Phone Number]&quot;.</li>
                  </ul>
                </>
              }
            />

            <h3 className="font-display font-bold text-ink mt-5 mb-2 text-base">Quy trình xử lý dữ liệu khi xóa / Data Deletion Timeline:</h3>
            <Bilingual
              lang={lang}
              vi={
                <>
                  <p>Trong vòng <strong>30 ngày</strong> kể từ khi nhận được yêu cầu:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Toàn bộ thông tin định danh cá nhân (PII: Họ tên, Số điện thoại, Token, Mật khẩu) sẽ bị <strong>xóa vĩnh viễn</strong> khỏi hệ thống.</li>
                    <li>Các bản ghi nhật ký canh tác đã đóng góp cho Hợp tác xã sẽ được <strong>ẩn danh tính hoàn toàn (Anonymized)</strong> để giữ lại số liệu tổng hợp sản lượng chung.</li>
                  </ul>
                </>
              }
              en={
                <>
                  <p>Within <strong>30 days</strong> of receiving your deletion request:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All Personally Identifiable Information (PII: Name, Phone, Auth Tokens, Passwords) will be <strong>permanently deleted</strong>.</li>
                    <li>Cultivation logs contributed to the Cooperative will be <strong>fully anonymized</strong> for aggregate yield statistics.</li>
                  </ul>
                </>
              }
            />
          </section>

          {/* SECTION 7 */}
          <section id="section-7" className="bg-white rounded-2xl p-7 md:p-8 border border-line shadow-xs scroll-mt-24">
            <h2 className="font-display text-xl md:text-2xl font-bold text-ink mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-green/10 text-green font-bold inline-flex items-center justify-center text-sm shrink-0">
                7
              </span>
              Quyền Của Người Dùng / Your Legal Rights
            </h2>
            <Bilingual
              lang={lang}
              vi={
                <ul className="list-disc pl-6 space-y-2">
                  <li>Quyền xem, chỉnh sửa thông tin cá nhân trong mục Hồ sơ.</li>
                  <li>Quyền rút lại đồng ý cho phép truy cập Vị trí / Máy ảnh trên cài đặt hệ điều hành Android/iOS.</li>
                  <li>Quyền yêu cầu trích xuất dữ liệu nhật ký canh tác cá nhân.</li>
                  <li>Quyền yêu cầu xóa bỏ tài khoản vĩnh viễn.</li>
                </ul>
              }
              en={
                <ul className="list-disc pl-6 space-y-2">
                  <li>Right to access and rectify personal profile details.</li>
                  <li>Right to revoke Location/Camera permissions in Android/iOS settings.</li>
                  <li>Right to export personal farming logs.</li>
                  <li>Right to request permanent account erasure.</li>
                </ul>
              }
            />
          </section>

          {/* SECTION 8 */}
          <section id="section-8" className="bg-white rounded-2xl p-7 md:p-8 border border-line shadow-xs scroll-mt-24">
            <h2 className="font-display text-xl md:text-2xl font-bold text-ink mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-green/10 text-green font-bold inline-flex items-center justify-center text-sm shrink-0">
                8
              </span>
              Quyền Riêng Tư Trẻ Em / Children&apos;s Privacy
            </h2>
            <Bilingual
              lang={lang}
              vi={
                <p>
                  Ứng dụng OriginVN là nền tảng quản lý sản xuất nông nghiệp dành cho các đối tượng
                  nông dân, kỹ sư và quản lý chuyên nghiệp. Ứng dụng <strong>không hướng tới và
                  không cố ý thu thập</strong> dữ liệu cá nhân từ trẻ em dưới 13 tuổi (hoặc 16 tuổi
                  theo quy định địa phương).
                </p>
              }
              en={
                <p>
                  OriginVN is a professional agricultural management app intended for adult
                  farmers, engineers, and cooperative managers. We <strong>do not knowingly
                  collect or solicit</strong> personal data from children under 13 (or 16
                  depending on local jurisdiction).
                </p>
              }
            />
          </section>

          {/* SECTION 9 */}
          <section id="section-9" className="bg-white rounded-2xl p-7 md:p-8 border border-line shadow-xs scroll-mt-24">
            <h2 className="font-display text-xl md:text-2xl font-bold text-ink mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-green/10 text-green font-bold inline-flex items-center justify-center text-sm shrink-0">
                9
              </span>
              Thông Tin Liên Hệ / Contact Us
            </h2>
            {lang !== "en" && <p>Nếu bạn có câu hỏi hoặc yêu cầu hỗ trợ về bảo mật và quyền riêng tư, vui lòng liên hệ:</p>}
            {lang !== "vi" && <p className="text-slate-500 italic">If you have questions or support requests regarding privacy and security, contact us at:</p>}
            <div className="bg-slate-50 p-6 rounded-2xl mt-4 border border-line space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-green shrink-0 mt-0.5" />
                <p>
                  <strong className="text-ink">Đơn vị phát triển / Managing Body:</strong> OriginVN Platform Project
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-green shrink-0 mt-0.5" />
                <p>
                  <strong className="text-ink">Địa chỉ / Address:</strong> Huyện Hàm Thuận Bắc, Tỉnh Bình Thuận, Việt Nam
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-green shrink-0 mt-0.5" />
                <p>
                  <strong className="text-ink">Email kỹ thuật &amp; Bảo mật / Technical Support Email:</strong>{" "}
                  <a href="mailto:origintracevietnam@gmail.com" className="text-green font-semibold hover:underline">
                    origintracevietnam@gmail.com
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-green shrink-0 mt-0.5" />
                <p>
                  <strong className="text-ink">Website chính thức / Official Portal:</strong>{" "}
                  <a href="https://origintrace.vn" className="text-green font-semibold hover:underline">
                    https://origintrace.vn
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Thẻ Bảo Chứng Tuân Thủ Tiêu Chuẩn Store (Thay thế hoàn toàn cho footer phụ màu đen #0f172a) */}
          <div className="bg-gradient-to-br from-[#F5FAF7] to-white border border-[#DDEAE2] rounded-2xl p-7 text-center shadow-xs mt-2">
            <div className="w-12 h-12 rounded-full bg-green/10 text-green flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-ink text-base md:text-lg mb-1.5">
              Bảo Chứng Tuân Thủ Tiêu Chuẩn Bảo Mật Quốc Tế
            </h4>
            <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed mb-4">
              Tài liệu chính sách quyền riêng tư này được xây dựng và tuân thủ nghiêm ngặt theo các tiêu chuẩn bảo mật của{" "}
              <strong className="text-ink">Google Play Store &amp; Apple App Store Privacy Guidelines</strong>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-500 font-medium pt-3.5 border-t border-[#DDEAE2]">
              <span>© 2026 OriginVN Platform</span>
              <span className="text-slate-300">•</span>
              <span>All Rights Reserved</span>
              <span className="text-slate-300">•</span>
              <span>Phiên bản: 1.0.0</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
