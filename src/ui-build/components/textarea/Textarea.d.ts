/// <reference types="react" />
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label?: string;
    error?: boolean;
    errorText?: string;
}
/**
 * Let users enter and edit text using `<textarea>` tag.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226925
 * @example
 * // normal state
 * <Textarea name="unique-name" label="Label*" />
 *
 * // error state
 * <Textarea name="unique-name" label="Label*" error errorText="Error message" />
 */
export declare const Textarea: import("react").ForwardRefExoticComponent<TextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
