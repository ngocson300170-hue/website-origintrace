# OriginTrace Website (Next.js)

Bản dựng lại giao diện tĩnh `OriginTrace-website` bằng Next.js 16 + React 19 + TypeScript + Tailwind CSS 4, cùng kỹ thuật với dự án `website-tienichdiaphuong-new`.

Phạm vi hiện tại: **chỉ giao diện**, khớp nội dung/pixel với bản HTML tĩnh. Chưa có CMS/Supabase/database/admin — sẽ bổ sung ở giai đoạn sau khi được yêu cầu.

## Chạy local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy Cloudflare (Workers, qua OpenNext)

```bash
npm run pages:build
npm run pages:deploy
```
