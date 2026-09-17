"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackLink({ fallback = "/" }: { fallback?: string }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (document.referrer && document.referrer.includes(window.location.host)) {
          router.back();
        } else {
          router.push(fallback);
        }
      }}
      className="inline-flex items-center gap-2 mb-6 text-blue bg-transparent border-none cursor-pointer text-sm font-medium"
    >
      <ArrowLeft size={16} strokeWidth={2} />
      Quay lại
    </button>
  );
}
