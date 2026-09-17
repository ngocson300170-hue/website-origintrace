import type { Metadata } from "next";
import DeleteAccountClient from "./DeleteAccountClient";

export const metadata: Metadata = {
  title: "Yêu Cầu Xóa Tài Khoản & Dữ Liệu | Account Deletion - OriginVN",
  description:
    "Trang tiếp nhận yêu cầu xóa tài khoản và dữ liệu cá nhân trên ứng dụng OriginVN tuân thủ chính sách Google Play Store 2026.",
};

export default function DeleteAccountPage() {
  return <DeleteAccountClient />;
}
