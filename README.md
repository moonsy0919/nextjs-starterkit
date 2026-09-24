# Next.js Starter Kit

Next.js 16, TypeScript, TailwindCSS v4, shadcn/ui 기반의 스타터킷입니다.

## 기술 스택

| 구분 | 사용 기술 |
|---|---|
| 프레임워크 | Next.js 16 (App Router, Turbopack) |
| 언어 | TypeScript 5 |
| 스타일링 | TailwindCSS v4 (`globals.css`의 CSS 변수와 `@theme`로 관리) |
| UI 컴포넌트 | shadcn/ui (`base-nova` 스타일, `@base-ui/react` 기반) |
| 아이콘 | lucide-react |
| 테마 | next-themes (라이트/다크/시스템) |
| 린트 | ESLint 9 + eslint-config-next |

## 시작하기

Node.js 20.9 이상이 필요합니다.

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

## 스크립트

| 명령어 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과물 실행 |
| `npm run lint` | ESLint 검사 |

## 폴더 구조

```
src/
├── app/            # App Router (layout, page, globals.css)
├── components/     # 공통 컴포넌트 (header, footer, theme-*)
│   └── ui/         # shadcn/ui 컴포넌트
├── config/         # 사이트 설정 (site.ts: 이름, 버전, 네비게이션)
└── lib/            # 유틸리티 (cn 등)
```

## 자주 하는 작업

**페이지 추가**: `src/app/<경로>/page.tsx`를 만들고, 헤더에 노출하려면 `src/config/site.ts`의 `NAV_LINKS`에 항목을 추가합니다.

**사이트 정보 변경**: `src/config/site.ts`의 `siteConfig`를 수정합니다. `githubUrl`을 채우면 푸터에 GitHub 링크가 표시됩니다.

**shadcn/ui 컴포넌트 추가**:

```bash
npx shadcn@latest add <컴포넌트 이름>
```

**테마 색상 변경**: `src/app/globals.css`의 `:root`(라이트)와 `.dark`(다크) 블록에서 CSS 변수를 수정합니다.

## 참고

- 이 프로젝트의 Next.js는 기존 지식과 다른 변경점이 있습니다. 코드를 작성하기 전에 `node_modules/next/dist/docs/`의 해당 문서를 확인하세요.
- Claude Code용 프로젝트 지침은 `CLAUDE.md`와 `AGENTS.md`에 있습니다.
