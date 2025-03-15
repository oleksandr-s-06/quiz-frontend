import CheckIcon from '../../assets/icons/check.svg?react';
import { cn } from '../../utils/cn.js';
import styles from './select.module.css';

export const SelectItem = ({ value, label, icon, bubble, selected, onChange, name }) => {
  return (
    <label className={cn(styles.item, { [styles.selected]: selected, [styles.bubble]: bubble })} htmlFor={name}>
      <input
        type='checkbox'
        value={value}
        checked={selected}
        onChange={(e) => onChange(e.target.checked)}
        name={name}
      />
      {bubble && icon && (
        <span className={styles.image}>
          <img src={icon} alt={label} />
        </span>
      )}
      <span>{label}</span>
      {!bubble && <span className={styles.icon}>{selected && <CheckIcon />}</span>}
    </label>
  );
};
