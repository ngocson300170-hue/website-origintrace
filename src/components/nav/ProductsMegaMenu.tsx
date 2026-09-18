import Image from "next/image";
import Link from "next/link";
import { productsNav, type NavProductItem } from "@/data/nav";
const imageIcons: Record<NavProductItem["iconKey"], string> = {
  saas: "/images/logos/saas-accounting-logo.png",
  chemops: "/images/logos/logo-chemops.jpg",
  aquaenv: "/images/logos/aquaenv-logo.png",
  originvn: "/images/logos/origintrace-leaf.jpg",
};

export default function ProductsMegaMenu() {
  return (
    <div className="absolute left-0 top-full w-[600px] bg-white rounded-2xl shadow-2xl border border-slate-100 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
      <div className="px-4">
        <div className="grid grid-cols-2 gap-4 items-start">
          {productsNav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-menu-card product-menu-card">
              <div className="flex items-center gap-2 mb-3">
                <span className="menu-icon">
                  <Image src={imageIcons[item.iconKey]} alt={item.title} width={28} height={28} />
                </span>
                <span className="font-semibold text-slate-800">{item.title}</span>
              </div>
              <p className="text-xs text-slate-500 mb-2">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
