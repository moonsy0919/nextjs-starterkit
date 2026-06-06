import { ExternalLink } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <p className="text-sm text-muted-foreground">
          Next.js · shadcn/ui · TailwindCSS v4로 구축되었습니다. 소스코드는{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 underline underline-offset-2 transition-colors hover:text-foreground"
          >
            GitHub
            <ExternalLink className="h-3 w-3" />
          </a>
          에서 확인 가능합니다.
        </p>
        <p className="text-sm text-muted-foreground">
          &copy;{year}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
