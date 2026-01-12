import { Link, useLocation } from 'react-router-dom';
import { navigationData } from '../data/navigation';
import type { NavigationItem } from '../data/navigation';
import * as styles from './Breadcrumb.css';

export function Breadcrumb() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const findLabel = (path: string): string => {
    const findInItems = (items: NavigationItem[]): string | null => {
      for (const item of items) {
        if (item.path === path) {
          return item.label;
        }
        if (item.children) {
          const found = findInItems(item.children);
          if (found) return found;
        }
      }
      return null;
    };

    const label = findInItems(navigationData);
    return label || path;
  };

  if (pathSegments.length === 0) {
    return null;
  }

  const breadcrumbs = pathSegments.map((_segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    const label = findLabel(path);
    return { path, label };
  });

  breadcrumbs.unshift({ path: '/', label: '홈' });

  return (
    <nav className={styles.breadcrumb} aria-label="breadcrumb">
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        return (
          <div key={crumb.path} className={styles.breadcrumbItem}>
            {index > 0 && (
              <span className={styles.separator} aria-hidden="true">
                /
              </span>
            )}
            {isLast ? (
              <span className={styles.breadcrumbCurrent} aria-current="page">
                {crumb.label}
              </span>
            ) : (
              <Link to={crumb.path} className={styles.breadcrumbLink}>
                {crumb.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
