import { cn } from '../../utils/cn.js';
import styles from './button.module.css';

export const Button = ({ children, className, ...props }) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
