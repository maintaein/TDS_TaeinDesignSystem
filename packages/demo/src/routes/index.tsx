import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { IntroductionPage } from '../pages/Introduction/IntroductionPage';
import { GettingStartedPage } from '../pages/GettingStarted/GettingStartedPage';

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
        path: 'design-tokens',
        children: [
          {
            path: 'colors',
            element: <div>색상 페이지 (준비 중)</div>,
          },
          {
            path: 'typography',
            element: <div>타이포그래피 페이지 (준비 중)</div>,
          },
          {
            path: 'spacing',
            element: <div>간격 페이지 (준비 중)</div>,
          },
          {
            path: 'shadows',
            element: <div>그림자 페이지 (준비 중)</div>,
          },
          {
            path: 'animation',
            element: <div>애니메이션 페이지 (준비 중)</div>,
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
            element: <div>접근성 (준비 중)</div>,
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
