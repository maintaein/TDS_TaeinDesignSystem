import type { Preview } from '@storybook/react';
import { ThemeProvider, lightTheme } from '@designsystem/core';

// Global styles 적용
import '../stories/global.css';

// Storybook Wrapper - 테마 클래스 적용
function StoryWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={lightTheme} style={{ padding: '2rem', minHeight: '100vh' }}>
      {children}
    </div>
  );
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light">
        <StoryWrapper>
          <Story />
        </StoryWrapper>
      </ThemeProvider>
    ),
  ],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
