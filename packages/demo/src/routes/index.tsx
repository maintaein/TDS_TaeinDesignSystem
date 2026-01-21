import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { IntroductionPage } from '../pages/Introduction/IntroductionPage';
import { GettingStartedPage } from '../pages/GettingStarted/GettingStartedPage';
import { ComponentTestPage } from '../pages/ComponentTest';
import { ColorsPage } from '../pages/DesignTokens/ColorsPage';
import { TypographyPage } from '../pages/DesignTokens/TypographyPage';
import { SpacingPage } from '../pages/DesignTokens/SpacingPage';
import { ShadowsPage } from '../pages/DesignTokens/ShadowsPage';
import { AnimationPage } from '../pages/DesignTokens/AnimationPage';
import { AccessibilityPage } from '../pages/Guidelines';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <IntroductionPage />,
      },
      {
        path: 'getting-started',
        element: <GettingStartedPage />,
      },
      {
        path: 'component-test',
        element: <ComponentTestPage />,
      },
      {
        path: 'design-tokens',
        children: [
          {
            path: 'colors',
            element: <ColorsPage />,
          },
          {
            path: 'typography',
            element: <TypographyPage />,
          },
          {
            path: 'spacing',
            element: <SpacingPage />,
          },
          {
            path: 'shadows',
            element: <ShadowsPage />,
          },
          {
            path: 'animation',
            element: <AnimationPage />,
          },
        ],
      },
      {
        path: 'components',
        children: [
          {
            path: 'overview',
            element: <div>컴포넌트 개요 (준비 중)</div>,
          },
        ],
      },
      {
        path: 'patterns',
        children: [
          {
            path: 'overview',
            element: <div>패턴 개요 (준비 중)</div>,
          },
        ],
      },
      {
        path: 'guidelines',
        children: [
          {
            path: 'design-principles',
            element: <div>디자인 원칙 (준비 중)</div>,
          },
          {
            path: 'accessibility',
            element: <AccessibilityPage />,
          },
          {
            path: 'performance',
            element: <div>성능 (준비 중)</div>,
          },
        ],
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
