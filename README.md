# voice-first-saas-journey

# 6‑Month Builder Track  
*20 hrs/week ≈ 520 hrs total*  

A single through‑line project—**Voice‑First SaaS Starter**—evolves each month so your knowledge compounds instead of fragmenting.

---

## Month 1: Foundations that Stick  
**Milestone:** Ship a static “Hello Voice” site  

- **Skills & Topics**  
  - HTML & CSS refresh (flex, grid, responsive layout)  
  - Git basics: branches, commits, pull requests  
  - JavaScript → TypeScript mindset  
  - Node.js runtime & npm scripts  
  - Web Speech API playground  

- **Weekly Time Split**  
  - 8 h: guided build‑along  
  - 6 h: solo coding  
  - 3 h: reading docs/tutorials  
  - 3 h: blog post or reflection  

- **Success Metrics**  
  - ≥ 30 Git commits  
  - Deployed on Vercel  
  - One technical blog post explaining a Web Speech API feature  

- **Key Resources**  
  - The Odin Project – Foundations  
  - Josh Comeau’s CSS for Developers  
  - GitHub Learning Lab  

---

## Month 2: Frontend Fluency (Next.js + Tailwind)  
**Milestone:** Convert static site into React/Next.js app  

- **Skills & Topics**  
  - Next.js routing (Pages vs App Router)  
  - Tailwind “utility‑first” patterns  
  - Build a reusable Voice widget as a React hook  
  - Unit testing with Vitest  

- **Weekly Time Split**  
  - 9 h: feature development  
  - 5 h: tutorial follow‑along  
  - 3 h: write & run tests  
  - 3 h: public demo + write‑up  

- **Success Metrics**  
  - Lighthouse score ≥ 90  
  - ≥ 80% manually typed code (track with WakaTime)  
  - Published npm package for the voice hook  

- **Key Resources**  
  - Fireship Next.js 13 Crash Course  
  - Tailwind UI Patterns  
  - Kent C. Dodds Testing JavaScript  

---

## Month 3: Backend Fundamentals (API & Database)  
**Milestone:** Add REST/WebSocket API and database support  

- **Skills & Topics**  
  - Choose between Express.js or tRPC  
  - PostgreSQL with Supabase  
  - Magic‑link authentication  
  - Environment variables & configuration  

- **Weekly Time Split**  
  - 8 h: API implementation  
  - 4 h: database schema & SQL  
  - 4 h: auth & security basics  
  - 4 h: write docs & blog post  

- **Success Metrics**  
  - End‑to‑end tests passing (Playwright)  
  - 100+ test users registered  
  - Schema diagram + Architecture Decision Record in repo  

- **Key Resources**  
  - Supabase “Build a SaaS” playlist  
  - tRPC official docs  
  - SQLBolt interactive lessons  

---

## Month 4: Voice AI Deep‑Dive  
**Milestone:** Build a real‑time STT → LLM → TTS loop  

- **Skills & Topics**  
  - OpenAI Whisper & timestamp extraction  
  - Streaming transcripts with Socket.IO  
  - Prompt engineering for voice commands  
  - Edge deployment considerations  

- **Weekly Time Split**  
  - 10 h: feature spike & prototype  
  - 4 h: research & reading  
  - 3 h: latency optimization  
  - 3 h: record/share demo  

- **Success Metrics**  
  - End‑to‑end latency < 1.5 s  
  - 15 scripted voice commands working  
  - Write a “How I Cut Latency” deep‑dive post  

- **Key Resources**  
  - OpenAI Whisper docs + Faster‑Whisper repo  
  - AssemblyAI blog on real‑time STT  
  - Supabase Edge Functions guide  

---

## Month 5: Full SaaS Architecture & Payments  
**Milestone:** Turn your prototype into a paid product  

- **Skills & Topics**  
  - Multi‑tenant design patterns  
  - Stripe subscriptions & webhooks  
  - Role‑based access control  
  - Monitoring & error tracking (Sentry)  

- **Weekly Time Split**  
  - 9 h: core feature build  
  - 5 h: infrastructure & CI/CD  
  - 3 h: analytics/dashboard setup  
  - 3 h: marketing page & copywriting  

- **Success Metrics**  
  - Functional checkout flow (test mode)  
  - ≥ 95% uptime in health checks  
  - Published changelog & pricing page  

- **Key Resources**  
  - Stripe’s SaaS integration guide  
  - Railway or Fly.io deployment docs  
  - PostHog product analytics  

---

## Month 6: Launch, Learn, Leverage  
**Milestone:** Public launch with growth loops  

- **Skills & Topics**  
  - Launch to Product Hunt & social threads  
  - User‑feedback loops (Intercom + DB triggers)  
  - In‑app “AI co‑pilot” onboarding tutorial  
  - Long‑form case study writing  

- **Weekly Time Split**  
  - 8 h: polish & bug fixes  
  - 4 h: launch operations  
  - 4 h: content creation (case study, threads)  
  - 4 h: retrospective & roadmap planning  

- **Success Metrics**  
  - 100+ sign‑ups OR 10 paying users  
  - 2 guest podcast appearances or major threads  
  - Publish a 6‑month retrospective blog  

- **Key Resources**  
  - LaunchKit Product Hunt checklist  
  - Growth.Design onboarding teardown  
  - Your own marketing superpowers  

---

## Cross‑Cutting Systems (Weekly)  
1. **Public Dev‑Log**  
   - *Why:* Accountability & reputation  
   - *When:* Monday goals + Friday reflection (2× 30 min)  

2. **Weekly Demo Call**  
   - *Why:* External feedback, avoid yak‑shaving  
   - *When:* Sunday evening with a builder friend (1 h)  

3. **Metrics Dashboard**  
   - *Why:* Track momentum, course‑correct  
   - *When:* Review on Friday (15 min)  

4. **Knowledge Garden**  
   - *Why:* Reinforce retention & connections  
   - *When:* Capture 3 atomic notes/day in Obsidian  

---

## Obstacles → Mitigations  
- **Context‑switch fatigue**  
  - Focus on one module at a time; park side ideas on a “Later” board  

- **AI over‑autocompleting**  
  - “You type first” rule; track authored % with WakaTime  

- **Plateaus / boredom**  
  - Monthly showcase deadlines; alternate “build” & “teach” weeks  

- **Debug rabbit‑holes**  
  - 20‑minute rule → ask Discord/Stack Overflow after 20 min stuck  

---

## How to Document for Retention  
1. **Design Doc before Code**  
   - 5‑sentence problem statement + 5‑sentence solution overview  

2. **README‑Driven Development**  
   - Update README at each milestone  

3. **Weekend Brain Dump**  
   - Free‑write surprises; publish best bits in newsletter/blog  

4. **Atomic Zettels**  
   - One concept per note; interlink heavily; review weekly  

---

## Why This Plan Compounds  
You shared a ladder: **Fundamentals → Build a SaaS → 10× with AI**.  
This roadmap mirrors that progression **in one evolving codebase**, so every new concept lands in a live product—never isolated tutorials.  
Weekly writing & shipping turns your marketing strengths into a flywheel: each article doubles as both proof of skill and inbound for your SaaS.
