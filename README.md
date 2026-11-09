# luan-site – Astro + Cloudflare Workers

## Chạy local
```bash
npm install
npm run dev          # http://localhost:4321
```

## Sửa nội dung
- Profile, kinh nghiệm, kỹ năng: `src/data/profile.ts`
- Ảnh: `public/avatar.jpg`
- Bài blog: thêm file `.md` vào `src/content/blog/` (copy `_template.md`, đổi `draft: false`)

## Deploy
- Thủ công: `npx wrangler login` rồi `npm run deploy`
- Tự động: push lên GitHub, nối repo trong Cloudflare Dashboard > Workers & Pages > Create > Import a repository
  - Build command: `npm run build`
  - Deploy command: `npx wrangler deploy`

Sau khi gắn domain riêng, sửa `site` trong `astro.config.mjs` và dòng Sitemap trong `public/robots.txt`.
