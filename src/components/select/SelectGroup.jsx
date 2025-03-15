import { Controller } from 'react-hook-form';
import { cn } from '../../utils/cn.js';
import { SelectItem } from './SelectItem.jsx';
import styles from './select.module.css';

export const SelectGroup = ({ options, value, name, className, control, bubble, ...props }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const selectedValues = field.value || [];

        const handleToggle = (optionValue, checked) => {
          if (checked) {
            const newValue = [...selectedValues, optionValue];
            field.onChange(newValue);
          } else {
            const newValue = selectedValues.filter((v) => v !== optionValue);
            field.onChange(newValue);
          }
        };

        return (
          <div className={cn(styles.group, { [styles.grid]: bubble }, className)}>
            {options.map((option, index) => (
              <SelectItem
                key={`${option.value}_${index}`}
                bubble={bubble}
                selected={selectedValues.includes(option.value)}
                onChange={(checked) => handleToggle(option.value, checked)}
                {...option}
              />
            ))}
          </div>
        );
      }}
      {...props}
    />
  );
};
