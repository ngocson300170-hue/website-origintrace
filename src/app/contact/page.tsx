import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import { getSiteSettings } from "@/data/site-settings";
import BackLink from "@/components/ui/BackLink";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Liên hệ OriginTrace – Tư vấn Giải pháp Công nghệ",
  description:
    "Liên hệ OriginTrace để được tư vấn về truy xuất nguồn gốc, chuyển đổi số, quản lý dữ liệu và các giải pháp công nghệ phù hợp với nhu cầu doanh nghiệp.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;
  const settings = getSiteSettings();

  return (
    <>
      <section className="hero-bg py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <BackLink />
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-green">Liên hệ</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Sẵn sàng bắt đầu cùng Origin Trace?</h1>
          <p className="text-slate-600 max-w-2xl text-lg">
            Để lại thông tin hoặc liên hệ trực tiếp — đội ngũ chúng tôi phản hồi trong vòng 24 giờ
            làm việc.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="space-y-4 text-slate-700 mb-6">
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

            <div className="rounded-2xl overflow-hidden border border-slate-100 h-64">
              <iframe
                src={settings.mapEmbedSrc}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ Origin Trace Việt Nam"
              />
            </div>
          </div>

          <ContactForm className="lg:col-span-7" variant="full" initialProduct={product} />
        </div>
      </section>
    </>
  );
}
