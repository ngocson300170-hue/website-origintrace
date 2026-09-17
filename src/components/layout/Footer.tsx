import Image from "next/image";
import Link from "next/link";
import { getSiteSettings } from "@/data/site-settings";
import { footerProductLinks, footerQuickLinks } from "@/data/nav";

import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const settings = getSiteSettings();

  return (
    <footer className="bg-slate-900 text-white/80 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 mb-10">
        <div>
          <Image
            src="/images/logos/logo-symbol-header.png"
            alt="Origin Trace"
            className="footer-logo h-12 w-auto mb-4"
            width={48}
            height={48}
          />
          <p className="text-sm text-white/60 leading-relaxed">{settings.description}</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Liên hệ</h4>
          <ul className="space-y-3 text-sm footer-contact-list">
            <li>
              <span className="footer-list-icon" aria-hidden="true">
                <Phone size={15} strokeWidth={2} />
              </span>
              <a href={settings.phoneHref} className="hover:text-white transition-colors">
                {settings.phone}
              </a>
            </li>
            <li>
              <span className="footer-list-icon" aria-hidden="true">
                <Mail size={15} strokeWidth={2} />
              </span>
              <a href={`mailto:${settings.email}`} className="hover:text-white transition-colors">
                {settings.email}
              </a>
            </li>
            <li>
              <span className="footer-list-icon" aria-hidden="true">
                <MapPin size={15} strokeWidth={2} />
              </span>
              <span>{settings.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Sản phẩm</h4>
          <ul className="space-y-3 text-sm footer-link-list">
            {footerProductLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Liên kết nhanh</h4>
          <ul className="space-y-3 text-sm footer-link-list">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 pt-6 border-t border-white/10 text-xs text-white/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          © 2026 {settings.companyName}. MST: {settings.taxCode}.
        </p>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Chính sách bảo mật
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Điều khoản sử dụng
          </Link>
          <Link href="/delete-account" className="hover:text-white transition-colors">
            Xóa tài khoản
          </Link>
        </div>
      </div>
    </footer>
  );
}
