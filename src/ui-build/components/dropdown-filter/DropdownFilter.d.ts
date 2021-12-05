/// <reference types="react" />
declare type ValidValue = string | number | boolean;
interface Option {
    label: React.ReactNode;
    value: ValidValue;
}
export interface DropdownFilterProps {
    label?: React.ReactNode;
    values: ValidValue[];
    options: Option[];
    onChange(list: ValidValue[]): void;
}
/**
 * Dropdown to select multiple choices, usually used for filter
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226925
 * @example
 * <DropdownFilter
 *   label="Label *"
 *   options={[
 *     { value: '1', label: 'Male' },
 *     { value: '2', label: 'No' },
 *   ]}
 *   onChange={handleOnChange}
 * />
 */
export declare const DropdownFilter: ({ label, values, options, onChange, }: DropdownFilterProps) => JSX.Element;
export {};
