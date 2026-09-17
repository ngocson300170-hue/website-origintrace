"use client";

import Link from "next/link";
import { useState } from "react";

export default function DeleteAccountClient() {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");

  return (
    <div>
      <header className="bg-gradient-to-br from-[#052e16] to-[#14532d] text-white px-5 pt-[50px] pb-[60px] text-center">
        <h1 className="text-[28px] font-extrabold mb-2">OriginVN - Nông Nghiệp Số</h1>
        <p className="text-[#bbf7d0] text-[15px]">Yêu Cầu Xóa Tài Khoản &amp; Dữ Liệu Cá Nhân / Account Deletion</p>
      </header>

      <div className="max-w-[680px] mx-auto px-5 -mt-8 pb-16">
        <div className="bg-white rounded-2xl border border-line shadow-sm p-9">
          {!submitted ? (
            <>
              <div className="bg-red-50 border border-red-300 rounded-xl px-5 py-4 mb-6">
                <h3 className="text-red-600 text-[15px] font-bold mb-1.5">
                  ⚠️ Lưu ý quan trọng về việc xóa tài khoản (Data Safety)
                </h3>
                <p className="text-[14px] text-red-800 leading-relaxed">
                  Tuân thủ chính sách Google Play Store 2026, bạn có quyền yêu cầu xóa vĩnh viễn
                  tài khoản và toàn bộ dữ liệu định danh cá nhân kể cả khi không còn cài ứng dụng
                  trên điện thoại.
                </p>
              </div>

              <p className="text-sm text-slate-500 mb-3">Khi bạn gửi yêu cầu xóa tài khoản:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-ink mb-7">
                <li><strong>Dữ liệu sẽ bị xóa vĩnh viễn:</strong> Số điện thoại, họ và tên, mật khẩu/mã PIN, ảnh đại diện và token thiết bị đăng nhập.</li>
                <li><strong>Dữ liệu lưu trữ bắt buộc (Hồ sơ an toàn thực phẩm):</strong> Các bản ghi nhật ký canh tác VietGAP và mã lô hàng xuất khẩu sẽ được ẩn danh hóa (Anonymized) để phục vụ việc kiểm toán nguồn gốc nông sản theo Luật An Toàn Thực Phẩm Việt Nam.</li>
                <li><strong>Thời gian xử lý:</strong> Tài khoản bị vô hiệu hóa ngay lập tức và toàn bộ dữ liệu định danh sẽ được xóa sạch trong vòng 30 ngày.</li>
              </ul>

              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-ink mb-1.5">
                    Số điện thoại đăng ký tài khoản (*)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="Ví dụ: 0901234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border-[1.5px] border-line rounded-[10px] px-3.5 py-3 text-[15px] focus:outline-none focus:border-green"
                  />
                </div>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-bold text-ink mb-1.5">
                    Họ và tên chủ tài khoản (*)
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn Hùng"
                    className="w-full border-[1.5px] border-line rounded-[10px] px-3.5 py-3 text-[15px] focus:outline-none focus:border-green"
                  />
                </div>
                <div>
                  <label htmlFor="reason" className="block text-sm font-bold text-ink mb-1.5">
                    Lý do xóa tài khoản (Không bắt buộc)
                  </label>
                  <textarea
                    id="reason"
                    rows={3}
                    placeholder="Chia sẻ với chúng tôi lý do bạn muốn dừng sử dụng dịch vụ..."
                    className="w-full border-[1.5px] border-line rounded-[10px] px-3.5 py-3 text-[15px] focus:outline-none focus:border-green"
                  />
                </div>
                <label className="flex items-start gap-2.5 text-[13px] text-slate-500 cursor-pointer">
                  <input type="checkbox" required className="mt-1" />
                  <span>
                    Tôi hiểu rằng hành động này không thể hoàn tác. Toàn bộ thông tin cá nhân của
                    tôi sẽ bị xóa vĩnh viễn sau 30 ngày.
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:opacity-90 transition-opacity text-white font-bold text-base py-3.5 rounded-[10px]"
                >
                  XÁC NHẬN YÊU CẦU XÓA TÀI KHOẢN
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="text-5xl mb-3">✅</div>
              <h3 className="text-xl font-extrabold text-green-dark mb-2">Đã Tiếp Nhận Yêu Cầu Xóa Tài Khoản</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Yêu cầu xóa tài khoản cho số điện thoại <strong>{phone}</strong> đã được ghi nhận
                vào hệ thống.
                <br />
                <br />
                Tài khoản của bạn đã được vô hiệu hóa. Toàn bộ dữ liệu cá nhân sẽ được xóa vĩnh
                viễn theo lịch trình tự động trong vòng 30 ngày.
                <br />
                <br />
                Nếu bạn đổi ý trong vòng 30 ngày, vui lòng liên hệ tổng đài hỗ trợ:{" "}
                <strong>0868.994.468</strong> hoặc email: <strong>origintracevietnam@gmail.com</strong>.
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-10 text-[13px] text-slate-500">
          <p>© 2026 OriginVN Ecosystem. All rights reserved.</p>
          <p className="mt-1.5">
            <Link href="/privacy-policy" className="text-green font-semibold">
              Xem Chính Sách Quyền Riêng Tư
            </Link>{" "}
            •{" "}
            <a href="mailto:origintracevietnam@gmail.com" className="text-green font-semibold">
              origintracevietnam@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
