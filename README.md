# Quota Tracker

Dashboard quản lý chi phí thuê bao trực tuyến, hạn mức tài khoản AI và theo dõi token burn-down theo thời gian thực.

- **Production URL:** [https://quota.minkoi.org](https://quota.minkoi.org)
- **Repository:** [https://github.com/johnnyhoang/quota-tracker](https://github.com/johnnyhoang/quota-tracker)
- **Developer:** [johnnyhoang](https://github.com/johnnyhoang)

---

## Tính năng chính

1. **Token Wallet & AI Quota Tracking:**
   - Quản lý hạn mức sử dụng (RPM, RPD, TPM, TPD) cho các provider: OpenAI, Anthropic, Gemini, DeepSeek, Groq, OpenRouter...
   - Theo dõi token burn-down rate và dự báo thời gian cạn quota.
   - Quản lý API Key an toàn và phân quyền người dùng theo vai trò.

2. **Payment & Subscription Schedules:**
   - Theo dõi lịch thanh toán định kỳ cho các dịch vụ SaaS, Hosting, AI Subscriptions.
   - Nhắc nhở hạn thanh toán và thống kê tổng chi phí hàng tháng/năm.

3. **Bảo mật & Phân quyền:**
   - Tích hợp Supabase Auth (Google & GitHub OAuth).
   - Phân quyền chi tiết (Admin / Viewer) với Row Level Security (RLS).

---

## Tech Stack

- **Frontend:** React 19, Vite 8, TypeScript, Tailwind CSS, Lucide Icons
- **Backend & Database:** Supabase PostgreSQL, Row Level Security (RLS), Supabase Realtime
- **Deployment:** Vercel Edge Network ([https://quota.minkoi.org](https://quota.minkoi.org))

---

## Cài đặt & Phát triển cục bộ

```bash
# Cài đặt dependencies
npm install

# Khởi chạy dev server
npm run dev

# Build production
npm run build

# Kiểm tra lint
npm run lint
```
