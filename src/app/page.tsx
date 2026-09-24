import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  Sparkles,
  Code2,
  Palette,
  ArrowRight,
  GitBranch,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-background py-12">
      <div className="container mx-auto max-w-5xl px-4">

        {/* 헤더 섹션 */}
        <section className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Rocket className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold tracking-tight">
              Claude Next.js Starter Kit
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Next.js · TypeScript · TailwindCSS v4 · shadcn/ui · lucide-react
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <Badge>Next.js</Badge>
            <Badge variant="secondary">TailwindCSS v4</Badge>
            <Badge variant="outline">shadcn/ui</Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="secondary">lucide-react</Badge>
          </div>
        </section>

        {/* 기능 카드 그리드 */}
        <section className="mb-12 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-2">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>TailwindCSS v4</CardTitle>
              <CardDescription>CSS 기반 설정, tailwind.config 없음</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                  @import &quot;tailwindcss&quot;
                </code>{" "}
                와{" "}
                <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                  @theme {"{}"}
                </code>{" "}
                블록으로 CSS 변수를 직접 관리합니다.
              </p>
            </CardContent>
            <CardFooter>
              <Badge variant="secondary" className="gap-1">
                <Zap className="h-3 w-3" />
                v4
              </Badge>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>shadcn/ui</CardTitle>
              <CardDescription>복사 가능한 컴포넌트 시스템</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Button, Card, Badge 등 접근성을 갖춘 Base UI 기반 컴포넌트를
                CSS 변수와 함께 사용합니다.
              </p>
            </CardContent>
            <CardFooter>
              <Badge variant="secondary" className="gap-1">
                <Zap className="h-3 w-3" />
                Base UI
              </Badge>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>lucide-react</CardTitle>
              <CardDescription>SVG 아이콘 라이브러리</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                1,500개 이상의 픽셀 퍼펙트 아이콘을 React 컴포넌트로 제공합니다.
                Tree-shaking으로 최적화됩니다.
              </p>
            </CardContent>
            <CardFooter>
              <Badge variant="secondary" className="gap-1">
                <Zap className="h-3 w-3" />
                SVG
              </Badge>
            </CardFooter>
          </Card>
        </section>

        {/* Button 데모 섹션 */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Button 컴포넌트 데모</CardTitle>
              <CardDescription>shadcn/ui Button의 다양한 variant</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button>
                  <Rocket className="mr-2 h-4 w-4" />
                  Default
                </Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">
                  <GitBranch className="mr-2 h-4 w-4" />
                  Outline
                </Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">
                  Link
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button disabled>Disabled</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* TailwindCSS v4 CSS 변수 색상 팔레트 */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>TailwindCSS v4 스타일링 예시</CardTitle>
              <CardDescription>
                CSS 변수와 @theme 블록 기반 동적 스타일 — tailwind.config 파일 없음
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-4">
                  <h3 className="mb-3 font-semibold text-card-foreground">CSS 변수 색상 팔레트</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "primary", cls: "bg-primary" },
                      { label: "secondary", cls: "bg-secondary border border-border" },
                      { label: "muted", cls: "bg-muted border border-border" },
                      { label: "accent", cls: "bg-accent border border-border" },
                      { label: "destructive", cls: "bg-destructive" },
                    ].map(({ label, cls }) => (
                      <div key={label} className="flex flex-col items-center gap-1">
                        <div className={`h-8 w-8 rounded ${cls}`} />
                        <span className="text-xs text-muted-foreground">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <h3 className="mb-3 font-semibold text-card-foreground">lucide-react 아이콘</h3>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Rocket className="h-6 w-6" />
                    <Sparkles className="h-6 w-6" />
                    <Code2 className="h-6 w-6" />
                    <Palette className="h-6 w-6" />
                    <GitBranch className="h-6 w-6" />
                    <Zap className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA 섹션 */}
        <section className="text-center">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl text-primary-foreground">
                시작할 준비가 되셨나요?
              </CardTitle>
              <CardDescription className="text-primary-foreground/70">
                이 스타터킷을 기반으로 프로젝트를 시작하세요
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-center gap-4">
              <Button variant="secondary" size="lg">
                <GitBranch className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                문서 보기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardFooter>
          </Card>
        </section>

      </div>
    </div>
  );
}
