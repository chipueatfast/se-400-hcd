/// <reference types="react" />
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: React.ReactNode;
    error?: boolean;
    errorText?: string;
    align?: 'center' | 'start' | 'end';
}
/**
 * Allow the user to select one item from a set using `<input type="radio">` tag.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226924
 * @example
 * // normal state
 * <Radio name="unique-name" label="Label*" />
 *
 * // error state
 * <Radio name="unique-name" label="Label*" error errorText="Error message"  />
 */
export declare const Radio: import("react").ForwardRefExoticComponent<RadioProps & import("react").RefAttributes<HTMLInputElement>>;
