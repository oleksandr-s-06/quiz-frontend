import { Controller } from 'react-hook-form';
import { cn } from '../../utils/cn.js';
import { RadioItem } from './RadioItem.jsx';
import styles from './radio.module.css';

export const RadioGroup = ({ options, value, name, className, control, ...props }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className={cn(styles.group, className)}>
          {options.map((option, index) => (
            <RadioItem
              key={`${option.value}_${index}`}
              selected={field.value === option.value}
              onChange={field.onChange}
              {...option}
            />
          ))}
        </div>
      )}
      {...props}
    />
  );
};
