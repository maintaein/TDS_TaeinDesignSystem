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
import { ComponentsOverviewPage } from '../pages/Components/ComponentsOverviewPage';
import { TextFieldPage } from '../pages/Components/TextField';
import { TextAreaPage } from '../pages/Components/TextArea';
import { CheckboxPage } from '../pages/Components/Checkbox';
import { SwitchPage } from '../pages/Components/Switch';
import { NumericSpinnerPage } from '../pages/Components/NumericSpinner';
import { AccessibilityPage } from '../pages/Guidelines';
import { ErrorPage } from '../pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage type="generic" />,
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
            element: <ComponentsOverviewPage />,
          },
          {
            path: 'text-field',
            element: <TextFieldPage />,
          },
          {
            path: 'text-area',
            element: <TextAreaPage />,
          },
          {
            path: 'checkbox',
            element: <CheckboxPage />,
          },
          {
            path: 'switch',
            element: <SwitchPage />,
          },
          {
            path: 'numeric-spinner',
            element: <NumericSpinnerPage />,
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
      {
        path: '*',
        element: <ErrorPage type="404" />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
