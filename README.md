# TDS — Taein Design System

일관된 UI와 효율적인 개발을 위해 만든 경량 React 디자인 시스템입니다.
가볍고, 배우기 쉽고, AI 친화적인 컴포넌트 라이브러리를 지향합니다.

[![npm version](https://img.shields.io/npm/v/@taein-designsystem/core)](https://www.npmjs.com/package/@taein-designsystem/core)
[![license](https://img.shields.io/npm/l/@taein-designsystem/core)](./LICENSE)

## 특징

- **31개 컴포넌트** — Button, Modal, Card 등 실무에 필요한 UI 컴포넌트
- **~165KB 패키지** — 런타임 의존성 2개(vanilla-extract, clsx)만 사용
- **Zero-runtime CSS** — Vanilla Extract 기반, 빌드 타임에 CSS 생성
- **Tree-shakable** — 사용하는 컴포넌트만 번들에 포함
- **TypeScript** — 엄격 모드, `any` 미사용, 완전한 타입 지원
- **접근성** — 시맨틱 HTML, ARIA, 키보드 네비게이션, 포커스 관리
- **Light/Dark 테마** — ThemeProvider 기반 테마 전환
- **AI 친화** — llms.txt 제공, 일관된 API 패턴

## 설치

```bash
npm install @taein-designsystem/core
# 또는
pnpm add @taein-designsystem/core
# 또는
yarn add @taein-designsystem/core
```

### 요구 사항

- `react` ^19.0.0 이상
- `react-dom` ^19.0.0 이상 (react와 같은 메이저 버전)

## 사용법

### 1. CSS import

```tsx
// 앱 엔트리 파일 (main.tsx 등)
import '@taein-designsystem/core/styles.css';
```

### 2. ThemeProvider 설정

```tsx
import { ThemeProvider } from '@taein-designsystem/core';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <YourApp />
    </ThemeProvider>
  );
}
```

### 3. 컴포넌트 사용

```tsx
import { Button, TextField, Card } from '@taein-designsystem/core';

function LoginForm() {
  return (
    <Card variant="outlined" padding="lg">
      <TextField label="이메일" placeholder="email@example.com" />
      <TextField label="비밀번호" type="password" />
      <Button variant="primary" size="lg" fullWidth>
        로그인
      </Button>
    </Card>
  );
}
```

## 컴포넌트 목록

| 카테고리 | 컴포넌트 |
|----------|----------|
| **버튼** | Button, IconButton, SegmentedButtons |
| **입력** | TextField, TextArea, Checkbox, Switch, Slider, NumericSpinner |
| **표시** | Text, Badge, Chip, Avatar, Icon |
| **피드백** | Loader, LoadingSpinner, Skeleton, Snackbar, Tooltip |
| **오버레이** | Modal, BottomSheet, SideSheet, Popover |
| **레이아웃** | Card, List, BoardRow, Divider, Border, HeaderBar |
| **폼** | FormField |

## 디자인 토큰

Vanilla Extract 기반의 디자인 토큰 시스템을 제공합니다.

| 토큰 | 설명 |
|------|------|
| **Colors** | Primary, Gray, Semantic (success, warning, error) |
| **Typography** | Font family, size, weight, line-height |
| **Spacing** | 8pt Grid 기반 (4px 단위) |
| **Shadows** | 5단계 (sm, base, md, lg, xl) |
| **Animation** | Duration, Easing |
| **Border Radius** | 7단계 (none ~ full) |

```tsx
import { themeContract } from '@taein-designsystem/core';

// 커스텀 스타일에서 토큰 사용
import { style } from '@vanilla-extract/css';

const customStyle = style({
  color: themeContract.color.primary.main,
  padding: themeContract.spacing[4],
  borderRadius: themeContract.borderRadius.md,
});
```

## 프로젝트 구조

```
designsystem/
├── packages/
│   ├── core/          # 디자인 시스템 라이브러리 (@taein-designsystem/core)
│   ├── demo/          # 데모 및 문서 앱
│   └── docs/          # Storybook
├── LICENSE
└── README.md
```

## 기술 스택

| 구분 | 기술 |
|------|------|
| UI | React 18/19 |
| 언어 | TypeScript 5.9 (strict) |
| 스타일링 | Vanilla Extract CSS |
| 빌드 | Vite 7 |
| 테스트 | Vitest + Testing Library |
| 패키지 매니저 | pnpm workspace |

## 로컬 개발

```bash
# 의존성 설치
pnpm install

# core 패키지 빌드
pnpm build:all

# 테스트 실행
pnpm test

# 타입 체크
pnpm typecheck

# 데모 앱 실행
cd packages/demo && pnpm dev
```

## AI 지원

TDS는 AI 도구와의 협업을 위해 다음을 제공합니다:

- **llms.txt** — 컴포넌트 요약 정보 (NPM 패키지에 포함)
- **llms-full.txt** — 전체 Props 인터페이스 및 예제 코드

## 라이선스

[MIT](./LICENSE) © Taein
