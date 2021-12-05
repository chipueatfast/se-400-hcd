/// <reference types="react" />
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: React.ReactNode;
    indeterminate?: boolean;
    error?: boolean;
    errorText?: string;
    align?: 'center' | 'start' | 'end';
}
/**
 * Allow the user to select one or more items from a set using `<input type="checkbox">` tag.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226924
 * @example
 * // normal state
 * <Checkbox
 *   name="unique-name"
 *   label="Label*"
 *   onChange={handleOnChange}
 * />
 *
 * // error state
 * <Checkbox
 *   name="unique-name"
 *   label="Label*"
 *   error
 *   errorText="Error message"
 *   onChange={handleOnChange}
 * />
 */
export declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLInputElement>>;
