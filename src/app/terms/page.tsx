import type { Metadata } from "next";
import Link from "next/link";
import BackLink from "@/components/ui/BackLink";
import { getSiteSettings } from "@/data/site-settings";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng – OriginTrace",
  description: "Điều khoản sử dụng website origintrace.vn và ứng dụng OriginVN – Nông Nghiệp Số.",
};

export default function TermsPage() {
  const settings = getSiteSettings();

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <BackLink />
      <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-green">Pháp lý</p>
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Điều khoản sử dụng</h1>
      <p className="text-slate-600 max-w-2xl text-lg mb-12">
        Áp dụng cho website origintrace.vn và ứng dụng di động OriginVN – Nông Nghiệp Số. Cập nhật
        lần cuối: 17/09/2026.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        <div className="rounded-xl p-5 text-sm bg-[#FFF7ED] border border-[#FED7AA] text-[#9A3412]">
          Đây là bản điều khoản cơ bản, soạn để đảm bảo website và ứng dụng có nội dung điều khoản
          sử dụng công khai. Nội dung nên được luật sư/bộ phận pháp chế rà soát trước khi coi là
          văn bản pháp lý chính thức, đầy đủ.
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3 text-slate-900">1. Phạm vi áp dụng</h2>
          <p>
            Điều khoản này áp dụng khi bạn truy cập website <strong>origintrace.vn</strong> hoặc sử
            dụng ứng dụng di động <strong>OriginVN – Nông Nghiệp Số</strong> do {settings.companyName} (MST:{" "}
            {settings.taxCode}) phát triển và vận hành. Bằng việc truy cập website hoặc cài đặt, sử
            dụng ứng dụng, bạn đồng ý với các điều khoản dưới đây.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3 text-slate-900">2. Về ứng dụng OriginVN – Nông Nghiệp Số</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Ứng dụng OriginVN hiện <strong>hoàn toàn miễn phí</strong>: không có gói trả phí,
              không có thuê bao, không có mua hàng trong ứng dụng, không thu phí để tạo hoặc sử
              dụng tài khoản.
            </li>
            <li>
              Tài khoản trên ứng dụng được cấp cho nông dân, kỹ sư nông nghiệp và hợp tác xã sau
              khi gửi đề nghị tham gia mạng lưới và được đội ngũ OriginVN xác minh, phê duyệt. Việc
              gửi đề nghị không tự động tạo tài khoản.
            </li>
            <li>
              Người dùng chịu trách nhiệm về tính chính xác của dữ liệu tự nhập (nhật ký canh tác,
              hình ảnh, thông tin lô đất) mà mình cung cấp qua ứng dụng.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3 text-slate-900">3. Quyền và trách nhiệm của người dùng</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Sử dụng website và ứng dụng đúng mục đích, không can thiệp trái phép vào hệ thống,
              không thu thập dữ liệu của người dùng khác.
            </li>
            <li>
              Cung cấp thông tin trung thực khi đăng ký, gửi đề nghị tham gia mạng lưới hoặc liên
              hệ hỗ trợ.
            </li>
            <li>Có quyền yêu cầu truy cập, chỉnh sửa hoặc xóa dữ liệu cá nhân theo Chính sách quyền riêng tư.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3 text-slate-900">4. Quyền sở hữu trí tuệ</h2>
          <p>
            Toàn bộ nội dung, thương hiệu, mã nguồn và giao diện của website và ứng dụng thuộc
            quyền sở hữu của {settings.companyName}, trừ khi có thỏa thuận khác bằng văn bản.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3 text-slate-900">5. Giới hạn trách nhiệm</h2>
          <p>
            Website và ứng dụng được cung cấp trên cơ sở &quot;hiện có&quot;. Chúng tôi nỗ lực đảm
            bảo hệ thống hoạt động ổn định nhưng không cam kết không có gián đoạn hoặc lỗi kỹ thuật.
            Chúng tôi không chịu trách nhiệm cho các thiệt hại phát sinh từ việc sử dụng sai mục
            đích hoặc do lỗi kết nối mạng, thiết bị của người dùng.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3 text-slate-900">6. Thay đổi điều khoản</h2>
          <p>
            Chúng tôi có thể cập nhật điều khoản này theo thời gian. Phiên bản mới sẽ được đăng tại
            địa chỉ này kèm ngày cập nhật.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3 text-slate-900">7. Liên hệ</h2>
          <p>
            Mọi câu hỏi về điều khoản sử dụng, vui lòng liên hệ{" "}
            <a href={`mailto:${settings.email}`} className="text-green font-semibold">
              {settings.email}
            </a>{" "}
            hoặc số điện thoại{" "}
            <a href={settings.phoneHref} className="text-green font-semibold">
              {settings.phone}
            </a>
            .
          </p>
          <p className="mt-2">
            Xem thêm:{" "}
            <Link href="/privacy-policy" className="text-green font-semibold">
              Chính sách quyền riêng tư
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
