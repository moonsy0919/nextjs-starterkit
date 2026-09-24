import { expect, test } from "@playwright/test";

test("홈페이지가 렌더링된다", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Next\.js Starter Kit/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("헤더 링크로 소개 페이지로 이동한다", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "소개" }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole("heading", { name: "소개" })).toBeVisible();
});

test("테마 토글이 다크 모드를 켜고 끈다", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  const html = page.locator("html");
  await page.getByRole("button", { name: "테마 전환" }).click();
  await expect(html).toHaveClass(/dark/);
  await page.getByRole("button", { name: "테마 전환" }).click();
  await expect(html).not.toHaveClass(/dark/);
});
