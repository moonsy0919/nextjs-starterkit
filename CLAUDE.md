# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 주요 명령어

```bash
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 검사
```

테스트 설정 없음 — 테스트 추가 시 패키지 먼저 설치 필요.

## 기술 스택 및 버전 주의사항

- **Next.js 16.3.6** — 학습 데이터 기준과 다른 breaking changes 포함. 반드시 `node_modules/next/dist/docs/` 문서를 먼저 읽을 것 (AGENTS.md 지시).
- **React 19.2.4** — `params`가 Promise로 변경됨: `const { id } = await params` 방식으로 사용.
- **TailwindCSS v4** — `tailwind.config.js` 없음. CSS 변수와 `@theme {}` 블록으로 `globals.css`에서 직접 관리.
- **shadcn/ui** — `npx shadcn@latest add <component>`로 컴포넌트 추가. 스타일은 `base-nova`(Radix UI가 아닌 `@base-ui/react` 기반), 아이콘은 lucide.

## 아키텍처

```
src/
├── app/                   # App Router 루트
│   ├── layout.tsx         # 전역 레이아웃: ThemeProvider, Header, Footer 래핑
│   ├── page.tsx           # 홈페이지
│   ├── about/page.tsx     # 소개 페이지
│   ├── docs/page.tsx      # 문서 페이지
│   └── globals.css        # TailwindCSS v4 진입점 + CSS 변수(라이트/다크 테마)
├── config/
│   └── site.ts            # siteConfig(이름·설명·버전·GitHub URL)와 NAV_LINKS의 단일 출처
├── components/
│   ├── ui/                # shadcn/ui 컴포넌트 (직접 수정 가능)
│   ├── header.tsx         # 서버 컴포넌트, config/site.ts의 NAV_LINKS로 네비게이션 구성
│   ├── footer.tsx         # 서버 컴포넌트, siteConfig.githubUrl이 비어 있으면 GitHub 링크 숨김
│   ├── theme-provider.tsx # "use client" — next-themes 래퍼
│   └── theme-toggle.tsx   # "use client" — 다크/라이트 전환 버튼
└── lib/
    └── utils.ts           # cn() 유틸리티 (clsx + tailwind-merge)
```

**컴포넌트 기본 원칙**: 레이아웃과 페이지는 기본적으로 Server Component. 상태/이벤트/브라우저 API가 필요할 때만 `"use client"` 추가.

## 스타일링 규칙

테마 색상은 `globals.css`의 `:root` / `.dark` 블록에서 CSS 변수로 정의. Tailwind 클래스(`bg-primary`, `text-muted-foreground` 등)는 이 변수를 참조함. `@theme inline {}` 블록에서 Tailwind ↔ CSS 변수 매핑.

새 shadcn 컴포넌트 추가:
```bash
npx shadcn@latest add <component-name>
```

## 빠른 내비게이션을 위한 주의사항

클라이언트 측 내비게이션을 즉시 반응하게 하려면 Suspense만으로는 부족 — 라우트 세그먼트에서 `export const instant = true`로 검증을 켜야 하며, `next.config.ts`에서 `cacheComponents`가 활성화되어 있어야 동작함(현재 미활성). 상세 내용은 `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.md`와 `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/02-route-segment-config/instant.md` 참조.
