import { Controller } from 'react-hook-form';
import { cn } from '../../utils/cn.js';
import styles from './text-field.module.css';

export const TextField = ({ label, className, name, type, placeholder, control, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className={cn(styles.container, className)}>
          {label && (
            <label className={styles.label} htmlFor={field.name}>
              {label}
            </label>
          )}
          <input
            type={type}
            placeholder={placeholder}
            className={cn(styles.input, { [styles.error]: !!fieldState.error?.message })}
            {...field}
          />
          {fieldState.error?.message && <span className={styles.text}>{fieldState.error?.message}</span>}
        </div>
      )}
      {...props}
    />
  );
};
