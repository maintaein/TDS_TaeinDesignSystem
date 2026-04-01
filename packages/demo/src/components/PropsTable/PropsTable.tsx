import * as styles from './PropsTable.css';

export interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

export interface PropsTableProps {
  props: PropDefinition[];
  className?: string;
}

export function PropsTable({ props, className }: PropsTableProps) {
  return (
    <div className={`${styles.tableContainer} ${className || ''}`}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Prop</th>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Default</th>
            <th className={styles.th}>Description</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {props.map((prop) => (
            <tr key={prop.name} className={styles.tr}>
              <td className={styles.td}>
                <code className={styles.propName}>
                  {prop.name}
                  {prop.required && (
                    <span className={styles.required} aria-label="필수">
                      *
                    </span>
                  )}
                </code>
              </td>
              <td className={styles.td}>
                <code className={styles.propType}>{prop.type}</code>
              </td>
              <td className={styles.td}>
                {prop.default ? (
                  <code className={styles.propDefault}>{prop.default}</code>
                ) : (
                  <span className={styles.noDefault}>-</span>
                )}
              </td>
              <td className={styles.td}>
                <span className={styles.description}>{prop.description}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
