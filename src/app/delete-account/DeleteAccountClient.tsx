"use client";

import Link from "next/link";
import { useState } from "react";
import BackLink from "@/components/ui/BackLink";
import {
  ShieldCheck,
  AlertTriangle,
  Trash2,
  FileText,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  HelpCircle,
} from "lucide-react";

export default function DeleteAccountClient() {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [reason, setReason] = useState("");

  return (
    <div className="bg-bg-soft/50 min-h-screen">
      {/* Header / Hero Section */}
      <header className="bg-gradient-to-b from-[#F5FAF7] via-white to-white border-b border-line pt-8 pb-12 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-4">
            <BackLink />
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green/10 text-green-dark border border-green/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <ShieldCheck size={16} className="text-green" />
              Tuân thủ chính sách Google Play Store 2026
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-ink mb-3 tracking-tight font-heading">
              Yêu Cầu Xóa Tài Khoản &amp; Dữ Liệu Cá Nhân
            </h1>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Ứng dụng OriginVN – Nông Nghiệp Số (Account &amp; Data Deletion Request)
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Card */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 sm:p-10">
          {!submitted ? (
            <>
              {/* Important Alert Box */}
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 mb-8">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-amber-900 text-sm font-bold mb-1">
                      Lưu ý quan trọng về việc xóa tài khoản (Data Safety)
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-800/90 leading-relaxed">
                      Tuân thủ chính sách bảo vệ dữ liệu Google Play Store 2026, bạn có quyền yêu cầu xóa vĩnh viễn
                      tài khoản và toàn bộ dữ liệu định danh cá nhân kể cả khi không còn cài ứng dụng trên điện thoại.
                    </p>
                  </div>
                </div>
              </div>

              {/* Policy Highlights Cards */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                  Quy trình và phạm vi xử lý dữ liệu:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Trash2 size={16} strokeWidth={2} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-slate-800 block mb-0.5">
                        Dữ liệu sẽ bị xóa vĩnh viễn
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Số điện thoại, họ và tên, mật khẩu/mã PIN, ảnh đại diện và token thiết bị đăng nhập.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
                    <div className="w-8 h-8 rounded-lg bg-blue/10 text-blue flex items-center justify-center shrink-0 mt-0.5">
                      <FileText size={16} strokeWidth={2} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-slate-800 block mb-0.5">
                        Dữ liệu lưu trữ bắt buộc (Hồ sơ an toàn thực phẩm)
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Các bản ghi nhật ký canh tác VietGAP và mã lô hàng xuất khẩu sẽ được ẩn danh hóa (Anonymized) để phục vụ kiểm toán theo Luật An Toàn Thực Phẩm Việt Nam.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={16} strokeWidth={2} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-slate-800 block mb-0.5">
                        Thời gian xử lý
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Tài khoản bị vô hiệu hóa ngay lập tức và toàn bộ dữ liệu định danh sẽ được xóa sạch tự động trong vòng 30 ngày.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Số điện thoại đăng ký tài khoản <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="Ví dụ: 0901234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Họ và tên chủ tài khoản <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn Hùng"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Lý do xóa tài khoản <span className="text-xs text-slate-400 font-normal">(Không bắt buộc)</span>
                  </label>
                  <textarea
                    id="reason"
                    rows={3}
                    placeholder="Chia sẻ với chúng tôi lý do bạn muốn dừng sử dụng dịch vụ..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      required
                      className="mt-0.5 w-4 h-4 rounded border-slate-300 text-green focus:ring-green"
                    />
                    <span>
                      Tôi hiểu rằng hành động này không thể hoàn tác. Toàn bộ thông tin cá nhân của tôi sẽ bị xóa vĩnh viễn sau 30 ngày.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                >
                  <Trash2 size={18} />
                  <span>Xác nhận yêu cầu xóa tài khoản</span>
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-6 sm:py-8">
              <div className="w-16 h-16 rounded-2xl bg-green/10 text-green flex items-center justify-center mx-auto mb-5 shadow-inner">
                <CheckCircle2 size={36} strokeWidth={2.2} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 font-heading">
                Đã Tiếp Nhận Yêu Cầu Xóa Tài Khoản
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto mb-8">
                Yêu cầu xóa tài khoản cho số điện thoại <strong className="text-slate-900 font-semibold">{phone}</strong> đã được ghi nhận vào hệ thống an toàn.
              </p>

              <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-5 text-left mb-8 space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-green/20 text-green-dark flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">1</div>
                  <p>Tài khoản của bạn đã được <strong>vô hiệu hóa ngay lập tức</strong> trên toàn hệ thống.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-green/20 text-green-dark flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">2</div>
                  <p>Toàn bộ dữ liệu cá nhân sẽ được <strong>xóa vĩnh viễn theo lịch trình tự động trong vòng 30 ngày</strong>.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-green/20 text-green-dark flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">3</div>
                  <p>Nếu bạn đổi ý trong vòng 30 ngày, vui lòng liên hệ bộ phận hỗ trợ kỹ thuật để phục hồi.</p>
                </div>
              </div>

              <div className="bg-blue/5 border border-blue/15 rounded-2xl p-5 text-left text-xs sm:text-sm">
                <h4 className="font-semibold text-slate-900 mb-2.5 flex items-center gap-2">
                  <HelpCircle size={16} className="text-blue" />
                  Kênh hỗ trợ khẩn cấp:
                </h4>
                <div className="grid sm:grid-cols-2 gap-3 text-slate-600">
                  <a href="tel:0868994468" className="flex items-center gap-2 hover:text-blue transition-colors">
                    <Phone size={15} className="text-blue" />
                    <span>Hotline: <strong>0868.994.468</strong></span>
                  </a>
                  <a href="mailto:origintracevietnam@gmail.com" className="flex items-center gap-2 hover:text-blue transition-colors">
                    <Mail size={15} className="text-blue" />
                    <span>Email: <strong>origintracevietnam@gmail.com</strong></span>
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold"
                >
                  Trở về trang chủ
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Helper Links */}
        <div className="text-center mt-6 text-xs text-slate-400">
          <Link href="/privacy-policy" className="hover:text-green transition-colors underline underline-offset-4">
            Xem Chính Sách Quyền Riêng Tư đầy đủ
          </Link>
        </div>
      </div>
    </div>
  );
}
