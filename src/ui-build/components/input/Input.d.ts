/// <reference types="react" />
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    error?: boolean;
    errorText?: string;
    startAdorment?: React.ReactNode;
    endAdorment?: React.ReactNode;
}
/**
 * Let users enter and edit text using `<input type="text">` tag.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226925
 * @example
 * // normal state
 * <Input name="unique-name" label="Label*" />
 *
 * // error state
 * <Input name="unique-name" label="Label*" error errorText="Error message" />
 */
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
