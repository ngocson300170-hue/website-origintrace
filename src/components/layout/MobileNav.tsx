"use client";

import Link from "next/link";
import clsx from "clsx";
import { primaryNavLinks } from "@/data/nav";

export default function MobileNav({
  open,
  onNavigate,
}: {
  open: boolean;
  onNavigate: () => void;
}) {
  return (
    <nav
      id="mobileNav"
      className={clsx("mobile-nav", "lg:hidden", open && "is-open")}
      aria-label="Menu chính"
    >
      <Link href="/products" onClick={onNavigate}>
        Sản phẩm
      </Link>
      <Link href="/industries" onClick={onNavigate}>
        Giải pháp ngành
      </Link>
      {primaryNavLinks.map((link) => (
        <Link key={link.href} href={link.href} onClick={onNavigate}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
