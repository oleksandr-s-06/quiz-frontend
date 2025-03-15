import { cn } from '../../utils/cn.js';
import styles from './radio.module.css';

export const RadioItem = ({ value, label, icon, selected, onChange, name }) => {
  return (
    <label className={cn(styles.item, { [styles.selected]: selected })} htmlFor={name}>
      <input type='radio' value={value} checked={selected} onChange={onChange} name={name} />
      {icon && <img className={styles.icon} src={icon} alt={label} />}
      <span>{label}</span>
    </label>
  );
};
