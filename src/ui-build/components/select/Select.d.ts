/// <reference types="react" />
import { Props as ReactSelectProps, SelectInstance } from 'react-select';
export interface SelectProps extends ReactSelectProps {
    id?: string;
    name: string;
    label?: string;
    error?: boolean;
    disabled?: boolean;
    errorText?: string;
}
export declare type SelectRef = SelectInstance;
/**
 * Select (AKA Combobox) - user must chose value from a predefined set of allowed options.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226925
 */
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<SelectRef>>;
