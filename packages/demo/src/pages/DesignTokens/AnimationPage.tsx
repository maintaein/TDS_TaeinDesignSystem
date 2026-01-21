import { useState } from 'react';
import { Button } from '@taein-designsystem/core';
import { CodeBlock } from '../../components/CodeBlock';
import * as styles from './AnimationPage.css';

const durations = [
  { name: 'fast', value: '150ms', description: '빠른 전환 (hover, focus)' },
  { name: 'base', value: '200ms', description: '기본 전환' },
  { name: 'slow', value: '300ms', description: '느린 전환 (slide, fade)' },
  { name: 'slower', value: '500ms', description: '매우 느린 전환 (복잡한 애니메이션)' },
];

const easings = [
  { name: 'ease', value: 'ease', description: '표준 easing' },
  { name: 'easeIn', value: 'ease-in', description: '천천히 시작' },
  { name: 'easeOut', value: 'ease-out', description: '천천히 끝' },
  { name: 'easeInOut', value: 'ease-in-out', description: '천천히 시작하고 끝' },
  { name: 'linear', value: 'linear', description: '일정한 속도' },
];

export function AnimationPage() {
  const [activeDuration, setActiveDuration] = useState('base');
  const [activeEasing, setActiveEasing] = useState('ease');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimate = () => {
    setIsAnimating(true);
    const duration =
      activeDuration === 'fast'
        ? 150
        : activeDuration === 'base'
        ? 200
        : activeDuration === 'slow'
        ? 300
        : 500;
    setTimeout(() => setIsAnimating(false), duration);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>애니메이션</h1>
      <p className={styles.description}>
        TDS의 애니메이션 시스템은 일관된 Duration과 Easing을 통해 자연스러운
        모션을 제공합니다. 사용자 경험을 해치지 않는 미묘한 애니메이션을
        지향합니다.
      </p>

      {/* Duration */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Duration (지속 시간)</h2>
        <p className={styles.sectionDescription}>
          상황에 따라 적절한 애니메이션 속도를 선택하여 자연스러운 전환을
          만듭니다.
        </p>

        <div className={styles.durationGrid}>
          {durations.map((duration) => (
            <div key={duration.name} className={styles.durationCard}>
              <div className={styles.durationHeader}>
                <span className={styles.durationName}>duration.{duration.name}</span>
                <span className={styles.durationValue}>{duration.value}</span>
              </div>
              <p className={styles.durationDescription}>{duration.description}</p>
              <CodeBlock
                code={`transition: all ${duration.value} ease;`}
                language="css"
                showLineNumbers={false}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Easing */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Easing (가속도 곡선)</h2>
        <p className={styles.sectionDescription}>
          Easing 함수는 애니메이션의 속도 변화를 제어하여 더 자연스러운
          움직임을 만듭니다.
        </p>

        <div className={styles.easingList}>
          {easings.map((easing) => (
            <div key={easing.name} className={styles.easingRow}>
              <span className={styles.easingName}>easing.{easing.name}</span>
              <span className={styles.easingValue}>{easing.value}</span>
              <span className={styles.easingDescription}>{easing.description}</span>

              <div className={styles.easingCurve}>
                <svg viewBox="0 0 100 100" className={styles.easingCurveSvg}>
                  <line
                    x1="0"
                    y1="100"
                    x2="100"
                    y2="0"
                    stroke="#e5e7eb"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                  <path
                    d={
                      easing.name === 'ease'
                        ? 'M 0 100 C 25 80, 25 20, 100 0'
                        : easing.name === 'easeIn'
                        ? 'M 0 100 C 42 100, 58 50, 100 0'
                        : easing.name === 'easeOut'
                        ? 'M 0 100 C 42 50, 58 0, 100 0'
                        : easing.name === 'easeInOut'
                        ? 'M 0 100 C 42 100, 58 0, 100 0'
                        : 'M 0 100 L 100 0'
                    }
                    stroke="#2563eb"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Demo */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>인터랙티브 데모</h2>
        <p className={styles.sectionDescription}>
          Duration과 Easing을 조합하여 애니메이션을 직접 테스트해보세요.
        </p>

        <div className={styles.demoContainer}>
          <div className={styles.demoControls}>
            <div className={styles.demoControlGroup}>
              <h3 className={styles.demoControlTitle}>Duration</h3>
              <div className={styles.demoButtonGroup}>
                {durations.map((duration) => (
                  <Button
                    key={duration.name}
                    variant={activeDuration === duration.name ? 'primary' : 'light'}
                    size="sm"
                    onClick={() => setActiveDuration(duration.name)}
                  >
                    {duration.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className={styles.demoControlGroup}>
              <h3 className={styles.demoControlTitle}>Easing</h3>
              <div className={styles.demoButtonGroup}>
                {easings.map((easing) => (
                  <Button
                    key={easing.name}
                    variant={activeEasing === easing.name ? 'primary' : 'light'}
                    size="sm"
                    onClick={() => setActiveEasing(easing.name)}
                  >
                    {easing.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.demoPlayground}>
            <div
              className={isAnimating ? styles.demoBoxAnimated : styles.demoBox}
              style={{
                transitionDuration:
                  activeDuration === 'fast'
                    ? '150ms'
                    : activeDuration === 'base'
                    ? '200ms'
                    : activeDuration === 'slow'
                    ? '300ms'
                    : '500ms',
                transitionTimingFunction:
                  activeEasing === 'ease'
                    ? 'ease'
                    : activeEasing === 'easeIn'
                    ? 'ease-in'
                    : activeEasing === 'easeOut'
                    ? 'ease-out'
                    : activeEasing === 'easeInOut'
                    ? 'ease-in-out'
                    : 'linear',
              }}
            />
          </div>

          <div className={styles.demoAction}>
            <Button variant="primary" onClick={handleAnimate}>
              애니메이션 실행
            </Button>
          </div>

          <CodeBlock
            code={`transition: transform ${
              activeDuration === 'fast'
                ? '150ms'
                : activeDuration === 'base'
                ? '200ms'
                : activeDuration === 'slow'
                ? '300ms'
                : '500ms'
            } ${
              activeEasing === 'ease'
                ? 'ease'
                : activeEasing === 'easeIn'
                ? 'ease-in'
                : activeEasing === 'easeOut'
                ? 'ease-out'
                : activeEasing === 'easeInOut'
                ? 'ease-in-out'
                : 'linear'
            };`}
            language="css"
            showLineNumbers={false}
          />
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>사용 가이드라인</h2>

        <div className={styles.guidelineList}>
          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>성능</h3>
            <p className={styles.guidelineText}>
              transform과 opacity만 애니메이션하여 60fps를 유지합니다.
              width, height, top, left는 피합니다.
            </p>
          </div>

          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>접근성</h3>
            <p className={styles.guidelineText}>
              prefers-reduced-motion을 존중합니다. 사용자가 모션을 줄이도록
              설정했다면 애니메이션을 비활성화합니다.
            </p>
          </div>

          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>적절한 속도</h3>
            <p className={styles.guidelineText}>
              너무 빠르면(100ms 이하) 눈에 보이지 않고, 너무 느리면(500ms
              이상) 답답합니다. 대부분 200-300ms가 적절합니다.
            </p>
          </div>

          <div className={styles.guidelineRow}>
            <h3 className={styles.guidelineTitle}>의미 있는 모션</h3>
            <p className={styles.guidelineText}>
              애니메이션은 사용자의 주의를 끌거나 상태 변화를 알리는 등 명확한
              목적이 있어야 합니다. 장식용 애니메이션은 피합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
