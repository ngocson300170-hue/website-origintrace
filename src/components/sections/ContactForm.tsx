"use client";

import { useState } from "react";
import clsx from "clsx";

const PRODUCT_OPTIONS = [
  "SaaS Kế toán",
  "CHEMOPS",
  "AquaEnv",
  "OriginVN – Nông Nghiệp Số",
] as const;

const PRODUCT_QUERY_MAP: Record<string, string> = {
  "saas": "SaaS Kế toán",
  "saas-ke-toan": "SaaS Kế toán",
  "chemops": "CHEMOPS",
  "aquaenv": "AquaEnv",
  "origintrace": "OriginVN – Nông Nghiệp Số",
  "originvn": "OriginVN – Nông Nghiệp Số",
  "consulting": "Chưa rõ, cần tư vấn",
  "tu-van": "Chưa rõ, cần tư vấn",
};

export default function ContactForm({
  className,
  variant = "full",
  initialProduct,
}: {
  className?: string;
  variant?: "home" | "full";
  initialProduct?: string;
}) {
  const preset = initialProduct ? PRODUCT_QUERY_MAP[initialProduct] : undefined;
  const [product, setProduct] = useState<string>(preset ?? PRODUCT_OPTIONS[0]);
  const isOriginVN = product.startsWith("OriginVN");
  const isFull = variant === "full";

  const heading = isOriginVN ? "Gửi đề nghị tham gia mạng lưới OriginVN" : "Liên hệ với chúng tôi";
  const submitLabel = isOriginVN ? "Gửi đề nghị tham gia" : isFull ? "Gửi liên hệ" : "Gửi liên hệ";

  return (
    <form
      className={clsx(
        "bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-4",
        className
      )}
      onSubmit={(e) => e.preventDefault()}
    >
      {isFull && <h3 className="font-semibold text-lg mb-2">{heading}</h3>}

      {isFull && isOriginVN && (
        <div className="rounded-[10px] border border-[#cfe9d8] bg-green/10 px-3.5 py-3 text-[13px] leading-relaxed text-ink">
          OriginVN là ứng dụng <strong>miễn phí</strong> dành cho nông dân, kỹ sư nông nghiệp và hợp
          tác xã. Gửi thông tin ở đây là <strong>gửi đề nghị tham gia mạng lưới</strong> — không
          phải đặt lịch mua giải pháp, và không tự động tạo tài khoản. Đội ngũ OriginVN sẽ liên hệ
          xác nhận.
        </div>
      )}

      <div className={clsx("grid gap-4", isFull && "sm:grid-cols-2")}>
        <div>
          <label className="text-sm font-medium text-slate-700 block mb-1">Họ và tên</label>
          <input
            type="text"
            placeholder="Nguyễn Văn A"
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700 block mb-1">Số điện thoại</label>
          <input
            type="tel"
            placeholder="09xx xxx xxx"
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green"
          />
        </div>
      </div>

      {isFull && (
        <div>
          <label className="text-sm font-medium text-slate-700 block mb-1">Email</label>
          <input
            type="email"
            placeholder="ban@congty.com"
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green"
          />
        </div>
      )}

      {isFull && (
        <div>
          <label className="text-sm font-medium text-slate-700 block mb-1">
            Tên doanh nghiệp / HTX / nông trại
          </label>
          <input
            type="text"
            placeholder="Công ty TNHH ABC"
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green"
          />
        </div>
      )}

      <div>
        <label className="text-sm font-medium text-slate-700 block mb-1">
          {isFull ? "Quan tâm sản phẩm nào?" : "Doanh nghiệp quan tâm sản phẩm nào?"}
        </label>
        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green"
        >
          {PRODUCT_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
          {isFull && <option>Chưa rõ, cần tư vấn</option>}
        </select>
      </div>

      {isFull && (
        <div>
          <label className="text-sm font-medium text-slate-700 block mb-1">Nội dung cần hỗ trợ</label>
          <textarea
            rows={3}
            placeholder="Mô tả ngắn gọn nhu cầu của bạn..."
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green"
          />
        </div>
      )}

      <button type="button" className="btn-primary w-full py-3 rounded-lg font-semibold">
        {submitLabel}
      </button>
    </form>
  );
}
