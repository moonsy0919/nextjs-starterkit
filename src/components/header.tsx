import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_LINKS, siteConfig } from "@/config/site";

/** 사이트 공통 상단 헤더 (로고, 네비게이션, 버전, 테마 토글) */
export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold text-foreground">
            {siteConfig.name}
          </Link>
          <nav className="flex items-center gap-4">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">{siteConfig.version}</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
