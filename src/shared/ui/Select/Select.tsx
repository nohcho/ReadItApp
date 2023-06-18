import { classNames, Mods } from 'shared/config/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}
interface SelectProps {
    className?:string;
    label?:string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;

}

export const Select = memo(({
    className,
    label,
    options,
    value,
    onChange,
    readonly,
}:SelectProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const mods:Mods = {

    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select disabled={readonly} value={value} onChange={onChangeHandler} className={cls.select}>
                {optionsList}
            </select>
        </div>
    );
});
