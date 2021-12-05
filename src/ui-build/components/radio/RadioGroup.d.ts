/// <reference types="react" />
export interface RadioGroupProps {
    id?: string;
    label: React.ReactNode;
    name: string;
    options: {
        label: React.ReactNode;
        value: string | number;
        disabled?: boolean;
        align?: 'center' | 'start' | 'end';
    }[];
    value?: string | number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    error?: boolean;
    errorText?: string;
    direction?: 'vertical' | 'horizontal';
}
/**
 * Allow the user to select one item from a set using `<input type="radio">` tag.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226924
 * @example
 * <RadioGroup
 *   name="unique-name"
 *   label="Label*"
 *   options={[
 *     { label: 'Mr', value: '0' },
 *     { label: 'Ms', value: '1' },
 *   ]}
 * />
 */
export declare const RadioGroup: import("react").ForwardRefExoticComponent<RadioGroupProps & import("react").RefAttributes<HTMLInputElement>>;
