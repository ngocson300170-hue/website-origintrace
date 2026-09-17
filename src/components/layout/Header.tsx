"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import ProductsMegaMenu from "@/components/nav/ProductsMegaMenu";
import IndustriesMegaMenu from "@/components/nav/IndustriesMegaMenu";
import MobileNav from "./MobileNav";

import { ChevronDown } from "lucide-react";

const DropdownArrow = () => (
  <ChevronDown className="dropdown-arrow" size={16} strokeWidth={2.2} aria-hidden="true" />
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={clsx("site-header", scrolled && "scrolled")}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="site-brand" aria-label="Origin Trace">
          <Image
            src="/images/logos/logo-symbol-header.png"
            alt=""
            className="site-logo-img"
            width={48}
            height={48}
            priority
          />
          <span className="site-brand-text">
            <span className="brand-origin">Origin</span> <span className="brand-trace">Trace</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-[15px] font-medium text-slate-700">
          <div className="relative group py-2 -my-2">
            <Link href="/products" className="nav-link hover:text-green inline-flex items-center gap-1 transition-colors">
              Sản phẩm
              <DropdownArrow />
            </Link>
            <ProductsMegaMenu />
          </div>
          <div className="relative group py-2 -my-2">
            <Link href="/industries" className="nav-link hover:text-green inline-flex items-center gap-1 transition-colors">
              Giải pháp ngành
              <DropdownArrow />
            </Link>
            <IndustriesMegaMenu />
          </div>
          <Link href="/government" className="nav-link hover:text-green transition-colors">
            Hợp tác Nhà nước
          </Link>
          <Link href="/about-us" className="nav-link hover:text-green transition-colors">
            Về chúng tôi
          </Link>
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/contact?product=consulting#trial"
            className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap"
          >
            Liên hệ
          </Link>
          <button
            type="button"
            className={clsx("mobile-menu-toggle", "lg:hidden", mobileOpen && "is-open")}
            aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobileNav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onNavigate={() => setMobileOpen(false)} />
    </header>
  );
}
