import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { NavigationItem } from '../data/navigation';
import { navigationData } from '../data/navigation';
import * as styles from './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [expandedPaths, setExpandedPaths] = useState<string[]>([]);

  const toggleExpand = (path: string) => {
    setExpandedPaths((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const renderNavItem = (item: NavigationItem) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedPaths.includes(item.path);
    const active = isActive(item.path);

    if (hasChildren) {
      return (
        <div key={item.path} className={styles.navSection}>
          <div
            className={`${styles.navItem} ${active ? styles.navItemActive : ''}`}
            onClick={() => toggleExpand(item.path)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleExpand(item.path);
              }
            }}
          >
            <span>{item.label}</span>
            <svg
              className={`${styles.chevron} ${isExpanded ? styles.chevronExpanded : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isExpanded && item.children && (
            <div className={styles.navChildren}>
              {item.children.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  className={`${styles.navItem} ${isActive(child.path) ? styles.navItemActive : ''}`}
                  onClick={onClose}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.path}
        to={item.path}
        className={`${styles.navItem} ${active ? styles.navItemActive : ''}`}
        onClick={onClose}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <>
      {isOpen && <div className={styles.backdrop} onClick={onClose} />}
      <aside
        className={`${styles.sidebar} ${!isOpen ? styles.sidebarHidden : ''}`}
      >
        <nav className={styles.nav}>{navigationData.map(renderNavItem)}</nav>
      </aside>
    </>
  );
}
