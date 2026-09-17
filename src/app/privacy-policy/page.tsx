import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Chính Sách Quyền Riêng Tư | Privacy Policy - OriginVN",
  description:
    "Chính sách quyền riêng tư và bảo vệ dữ liệu cá nhân của ứng dụng OriginVN (Song ngữ Anh - Việt / Bilingual Vietnamese & English).",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
