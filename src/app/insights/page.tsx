import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import BackLink from "@/components/ui/BackLink";

export const metadata: Metadata = {
  title: "Insights – Tin tức & Góc nhìn Công nghệ",
  description:
    "OriginTrace cập nhật tin tức và góc nhìn công nghệ về truy xuất nguồn gốc, chuyển đổi số và quản lý dữ liệu cho doanh nghiệp.",
};

const placeholders = [
  { badge: "Tuân thủ luật", color: "text-green", slot: "Chuẩn bị nội dung", h: "Cập nhật quy định và hồ sơ truy xuất", d: "Khu vực dành cho các bài phân tích quy định, tiêu chuẩn và yêu cầu báo cáo." },
  { badge: "Case study", color: "text-blue", slot: "Sẵn sàng thêm case", h: "Câu chuyện triển khai thực tế", d: "Khu vực dành cho dự án, bối cảnh, giải pháp và kết quả khi có thông tin xác thực." },
  { badge: "Kiến thức ngành", color: "text-green", slot: "Đang biên soạn", h: "Hướng dẫn chuẩn hóa dữ liệu nguồn gốc", d: "Khu vực dành cho hướng dẫn vận hành, checklist dữ liệu và kinh nghiệm triển khai." },
];

export default function InsightsPage() {
  return (
    <>
      <section className="hero-bg py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <BackLink />
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-green">Blog / Tin tức</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Kiến thức & Case study</h1>
          <p className="text-slate-600 max-w-2xl text-lg">
            Cập nhật quy định pháp luật, kiến thức ngành và câu chuyện thành công từ khách hàng của
            Origin Trace.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-wrap gap-3 mb-12">
          <span className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-blue">Tất cả</span>
          {["Tuân thủ luật", "Case study", "Kiến thức ngành", "Sản phẩm"].map((c) => (
            <span key={c} className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 bg-slate-100">
              {c}
            </span>
          ))}
        </div>

        <Reveal stagger className="grid md:grid-cols-3 gap-6">
          {placeholders.map((post) => (
            <div key={post.h} className="card bg-white rounded-xl overflow-hidden block">
              <div className="h-40 bg-slate-100 flex items-center justify-center text-slate-400 text-sm">
                {post.slot}
              </div>
              <div className="p-5">
                <p className={`text-xs uppercase tracking-wide mb-2 ${post.color}`}>{post.badge}</p>
                <h3 className="font-semibold mb-2">{post.h}</h3>
                <p className="text-sm text-slate-600">{post.d}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <p className="text-center text-slate-500 text-sm mt-10">
          Các bài viết đang được biên soạn — quay lại sau để xem nội dung mới.
        </p>
      </section>
    </>
  );
}
