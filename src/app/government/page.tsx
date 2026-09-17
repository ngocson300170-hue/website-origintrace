import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import BackLink from "@/components/ui/BackLink";

export const metadata: Metadata = {
  title: "Giải pháp Công nghệ cho Cơ quan Nhà nước – OriginTrace",
  description:
    "OriginTrace phát triển các giải pháp công nghệ và dữ liệu hỗ trợ cơ quan nhà nước trong quản lý, minh bạch thông tin, truy xuất nguồn gốc và chuyển đổi số.",
};

export default function GovernmentPage() {
  return (
    <>
      <section className="hero-bg py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <BackLink />
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-green">Hợp tác Nhà nước</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Đồng hành cùng cơ quan quản lý</h1>
          <p className="text-slate-600 max-w-2xl text-lg">
            Origin Trace hợp tác với các cơ quan Nhà nước trong các dự án đối tác công-tư (PPP) và
            đề tài khoa học công nghệ, hướng tới hạ tầng dữ liệu truy xuất nguồn gốc minh bạch cho
            Việt Nam.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-green">Định hướng hợp tác</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Sẵn sàng hợp tác với cơ quan quản lý</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Origin Trace hiện đang trao đổi với các cơ quan quản lý và đơn vị nghiên cứu về những
            mô hình hợp tác công-tư (PPP) và đề tài khoa học công nghệ phù hợp. Các dự án, đề tài
            và case study cụ thể sẽ được cập nhật tại đây khi có thông tin chính thức.
          </p>
        </Reveal>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Đại diện cơ quan Nhà nước cần hợp tác?</h2>
        <p className="text-slate-600 mb-6 max-w-xl mx-auto">
          Origin Trace sẵn sàng trao đổi về các mô hình hợp tác PPP, đề tài nghiên cứu và thí điểm
          địa phương.
        </p>
        <Link href="/contact" className="btn-primary inline-block px-7 py-3.5 rounded-lg font-semibold">
          Liên hệ hợp tác
        </Link>
      </section>
    </>
  );
}
