import { useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Breadcrumb } from './Breadcrumb';
import { ScrollToTop } from '../components/ScrollToTop';
import { useMediaQuery, breakpoints } from '../hooks/useMediaQuery';
import * as styles from './RootLayout.css';

export function RootLayout() {
  const isCompact = useMediaQuery(breakpoints.compact);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    if (isCompact) {
      setIsSidebarOpen(false);
    }
  }, [isCompact]);

  return (
    <div className={styles.root}>
      <ScrollToTop />
      <a href="#main-content" className={styles.skipToContent}>
        본문으로 건너뛰기
      </a>
      <Header onMenuClick={toggleSidebar} showMenuButton={isCompact} />
      <div className={styles.body}>
        <Sidebar
          isOpen={isCompact ? isSidebarOpen : true}
          overlay={isCompact}
          onClose={closeSidebar}
        />
        {isCompact && isSidebarOpen && (
          <div
            className={styles.backdrop}
            onClick={closeSidebar}
            aria-hidden="true"
          />
        )}
        <main id="main-content" className={styles.mainContent}>
          <Breadcrumb />
          <div className={styles.content}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
