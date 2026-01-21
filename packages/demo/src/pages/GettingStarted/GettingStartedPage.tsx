import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@taein-designsystem/core';
import { CodeBlock } from '../../components/CodeBlock';
import * as styles from './GettingStartedPage.css';

export function GettingStartedPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>시작하기</h1>
      <p className={styles.description}>
        TDS를 프로젝트에 설치하고 사용하는 방법을 알아보세요.
      </p>

      {/* Installation Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. 설치</h2>
        <p className={styles.sectionDescription}>
          원하는 패키지 매니저를 사용하여 TDS를 설치하세요.
        </p>

        <div className={styles.installTabs}>
          <div className={styles.installOption}>
            <h3 className={styles.installTitle}>npm</h3>
            <CodeBlock
              code="npm install @taein-designsystem/core"
              language="bash"
              showLineNumbers={false}
            />
          </div>

          <div className={styles.installOption}>
            <h3 className={styles.installTitle}>pnpm</h3>
            <CodeBlock
              code="pnpm add @taein-designsystem/core"
              language="bash"
              showLineNumbers={false}
            />
          </div>

          <div className={styles.installOption}>
            <h3 className={styles.installTitle}>yarn</h3>
            <CodeBlock
              code="yarn add @taein-designsystem/core"
              language="bash"
              showLineNumbers={false}
            />
          </div>
        </div>
      </section>

      {/* Basic Usage Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. 기본 사용법</h2>
        <p className={styles.sectionDescription}>
          TDS 컴포넌트를 사용하려면 먼저 CSS를 import하고 컴포넌트를 가져옵니다.
        </p>

        <div className={styles.codeExample}>
          <h3 className={styles.exampleTitle}>CSS Import</h3>
          <p className={styles.exampleDescription}>
            애플리케이션의 진입점(main.tsx 또는 App.tsx)에서 CSS를 import합니다.
          </p>
          <CodeBlock
            code={`// main.tsx 또는 App.tsx
import '@taein-designsystem/core/styles.css';`}
            language="tsx"
            fileName="main.tsx"
          />
        </div>

        <div className={styles.codeExample}>
          <h3 className={styles.exampleTitle}>컴포넌트 Import</h3>
          <p className={styles.exampleDescription}>
            필요한 컴포넌트를 import하여 사용합니다.
          </p>
          <CodeBlock
            code={`import { Button, TextField, Modal } from '@taein-designsystem/core';

function App() {
  return (
    <div>
      <Button variant="primary">클릭하세요</Button>
      <TextField label="이름" placeholder="이름을 입력하세요" />
    </div>
  );
}`}
            language="tsx"
            fileName="App.tsx"
          />
        </div>
      </section>

      {/* TypeScript Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. TypeScript 설정</h2>
        <p className={styles.sectionDescription}>
          TDS는 TypeScript로 작성되었으며 모든 컴포넌트에 타입 정의가 포함되어 있습니다.
          별도의 @types 패키지를 설치할 필요가 없습니다.
        </p>

        <div className={styles.codeExample}>
          <h3 className={styles.exampleTitle}>타입 안전성</h3>
          <p className={styles.exampleDescription}>
            TypeScript는 자동으로 props를 검증하고 자동완성을 제공합니다.
          </p>
          <CodeBlock
            code={`import { Button, type ButtonProps } from '@taein-designsystem/core';

// Props 타입을 명시적으로 사용할 수 있습니다
const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

// 컴포넌트는 자동으로 타입을 추론합니다
function Example() {
  return (
    <Button
      variant="primary"  // 자동완성: 'primary' | 'dark' | 'danger' | 'light'
      size="md"          // 자동완성: 'sm' | 'md' | 'lg' | 'xl'
      onClick={() => {}}
    >
      클릭
    </Button>
  );
}`}
            language="tsx"
            fileName="Example.tsx"
          />
        </div>

        <div className={styles.infoBox}>
          <h4 className={styles.infoTitle}>💡 Tip</h4>
          <p className={styles.infoText}>
            VS Code를 사용하는 경우, Ctrl+Space(또는 Cmd+Space)를 눌러 사용 가능한 props와 값을 확인할 수 있습니다.
          </p>
        </div>
      </section>

      {/* Theme Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. 테마 적용</h2>
        <p className={styles.sectionDescription}>
          TDS는 라이트/다크 모드를 지원하는 내장 테마 시스템을 제공합니다.
        </p>

        <div className={styles.codeExample}>
          <h3 className={styles.exampleTitle}>ThemeProvider 설정</h3>
          <p className={styles.exampleDescription}>
            애플리케이션의 최상위에 ThemeProvider를 추가합니다.
          </p>
          <CodeBlock
            code={`import { ThemeProvider } from '@taein-designsystem/core';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      {/* 앱의 나머지 부분 */}
    </ThemeProvider>
  );
}`}
            language="tsx"
            fileName="App.tsx"
          />
        </div>

        <div className={styles.codeExample}>
          <h3 className={styles.exampleTitle}>테마 전환</h3>
          <p className={styles.exampleDescription}>
            useTheme Hook을 사용하여 프로그래밍 방식으로 테마를 전환할 수 있습니다.
          </p>
          <CodeBlock
            code={`import { useTheme, Button } from '@taein-designsystem/core';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button onClick={toggleTheme}>
      {theme === 'light' ? '🌙 다크' : '☀️ 라이트'} 모드
    </Button>
  );
}`}
            language="tsx"
            fileName="ThemeToggle.tsx"
          />
        </div>

        <div className={styles.infoBox}>
          <h4 className={styles.infoTitle}>ℹ️ 참고</h4>
          <p className={styles.infoText}>
            ThemeProvider는 사용자의 시스템 테마 설정(prefers-color-scheme)을 자동으로 감지합니다.
            defaultTheme을 지정하지 않으면 시스템 설정을 따릅니다.
          </p>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. 다음 단계</h2>
        <p className={styles.sectionDescription}>
          TDS를 설치했다면 이제 컴포넌트를 탐색하고 프로젝트에 적용해보세요.
        </p>

        <div className={styles.nextStepsGrid}>
          <Link to="/design-tokens/colors" className={styles.nextStepCard}>
            <div className={styles.nextStepIcon}>🎨</div>
            <h3 className={styles.nextStepTitle}>디자인 토큰</h3>
            <p className={styles.nextStepDescription}>
              색상, 타이포그래피, 간격 등 디자인 시스템의 기본 요소를 살펴보세요.
            </p>
          </Link>

          <Link to="/components" className={styles.nextStepCard}>
            <div className={styles.nextStepIcon}>🧩</div>
            <h3 className={styles.nextStepTitle}>컴포넌트</h3>
            <p className={styles.nextStepDescription}>
              27개의 검증된 컴포넌트와 사용 예시를 확인하세요.
            </p>
          </Link>

          <Link to="/patterns" className={styles.nextStepCard}>
            <div className={styles.nextStepIcon}>📐</div>
            <h3 className={styles.nextStepTitle}>패턴</h3>
            <p className={styles.nextStepDescription}>
              실전 UI 패턴으로 빠르게 애플리케이션을 구축하세요.
            </p>
          </Link>

          <Link to="/guidelines/accessibility" className={styles.nextStepCard}>
            <div className={styles.nextStepIcon}>♿</div>
            <h3 className={styles.nextStepTitle}>접근성</h3>
            <p className={styles.nextStepDescription}>
              WCAG 2.2 AA 기준을 준수하는 접근성 가이드를 확인하세요.
            </p>
          </Link>
        </div>
      </section>

      {/* Help Section */}
      <section className={styles.section}>
        <div className={styles.helpBox}>
          <h3 className={styles.helpTitle}>도움이 필요하신가요?</h3>
          <p className={styles.helpText}>
            문제가 발생하거나 질문이 있으시면 GitHub Issues에 문의해주세요.
          </p>
          <div className={styles.helpActions}>
            <a
              href="https://github.com/your-repo/issues"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button variant="primary">GitHub Issues</Button>
            </a>
            <Button variant="light" onClick={() => navigate('/component-test')}>
              컴포넌트 테스트
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
