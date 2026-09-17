import Link from "next/link";
import { industriesNav } from "@/data/nav";
import { HoaChatIcon, NongNghiepIcon, ThuySanIcon } from "./icons";

const icons = {
  "hoa-chat": HoaChatIcon,
  "nong-nghiep": NongNghiepIcon,
  "thuy-san": ThuySanIcon,
};

export default function IndustriesMegaMenu() {
  return (
    <div className="absolute left-0 top-full w-[500px] bg-white rounded-2xl shadow-2xl border border-slate-100 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
      <div className="px-4">
        <div className="grid grid-cols-3 gap-4">
          {industriesNav.map((item) => {
            const Icon = icons[item.iconKey];
            return (
              <Link key={item.href} href={item.href} className="nav-menu-card industry-menu-card">
                <span className="menu-icon">
                  <Icon />
                </span>
                <span className="font-semibold text-slate-800">{item.title}</span>
                <p className="text-xs text-slate-500 mt-1">{item.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
