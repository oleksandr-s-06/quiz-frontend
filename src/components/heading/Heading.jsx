import { cn } from '../../utils/cn.js';
import styles from './heading.module.css';

export const Heading = ({ className, title, text, strong }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <h1 className={cn(styles.title, { [styles.strong]: strong })}>{title}</h1>
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
