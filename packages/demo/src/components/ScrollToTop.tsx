import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // window 스크롤 초기화
    window.scrollTo(0, 0);

    // overflow: auto를 가진 모든 스크롤 컨테이너 초기화
    const scrollContainers = document.querySelectorAll('[style*="overflow"]');
    scrollContainers.forEach((container) => {
      if (container instanceof HTMLElement) {
        container.scrollTop = 0;
      }
    });

    // RootLayout의 .content 클래스를 가진 요소 초기화
    const contentElement = document.querySelector('main > div');
    if (contentElement instanceof HTMLElement) {
      contentElement.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}
