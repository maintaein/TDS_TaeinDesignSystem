import { test, expect } from '@playwright/test';

test.describe('페이지 네비게이션', () => {
  test('메인 페이지가 로드된다', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/TDS/i);
  });

  test('시작하기 페이지로 이동한다', async ({ page }) => {
    await page.goto('/getting-started');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      '시작하기'
    );
  });

  test('컴포넌트 개요 페이지로 이동한다', async ({ page }) => {
    await page.goto('/components/overview');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('디자인 토큰 - 색상 페이지로 이동한다', async ({ page }) => {
    await page.goto('/design-tokens/colors');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('사이드바 네비게이션이 동작한다', async ({ page }) => {
    await page.goto('/');
    const sidebar = page.locator('nav');
    await expect(sidebar).toBeVisible();
  });

  test('404 페이지가 표시된다', async ({ page }) => {
    await page.goto('/nonexistent-page');
    await expect(page.getByText(/찾을 수 없|404|존재하지 않/)).toBeVisible();
  });
});

test.describe('테마 전환', () => {
  test('테마 토글 버튼이 존재한다', async ({ page }) => {
    await page.goto('/');
    const themeToggle = page.getByRole('button', {
      name: /테마|다크|라이트|theme/i,
    });
    await expect(themeToggle).toBeVisible();
  });
});

test.describe('반응형 레이아웃', () => {
  test('모바일 뷰에서 사이드바가 숨겨진다', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    // 모바일에서는 사이드바가 기본적으로 숨겨짐
    await expect(page.locator('nav')).toBeHidden();
  });

  test('데스크톱 뷰에서 사이드바가 표시된다', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    await expect(page.locator('nav')).toBeVisible();
  });
});
