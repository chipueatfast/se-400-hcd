/// <reference types="react" />
import { Props as ReactSelectProps, SelectInstance } from 'react-select';
export interface AutocompleteProps extends ReactSelectProps {
    id?: string;
    name: string;
    label?: string;
    error?: boolean;
    disabled?: boolean;
    errorText?: string;
}
export declare type AutocompleteRef = SelectInstance;
/**
 * The autocomplete is a text input enhanced by a panel of suggested options.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226925
 */
export declare const Autocomplete: import("react").ForwardRefExoticComponent<AutocompleteProps & import("react").RefAttributes<AutocompleteRef>>;
