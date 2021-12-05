/// <reference types="react" />
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    /**
     * The default checked state. Use when the component is not controlled.
     */
    defaultChecked?: boolean;
    /**
     * If `true`, the component is checked.
     */
    checked?: boolean;
    /**
     * Callback fired when the state is changed.
     *
     * @param event The event source of the callback.
     * You can pull out the new checked state by accessing `event.target.checked` (boolean).
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    error?: boolean;
    errorText?: string;
}
/**
 * Switches toggle the state of a single setting on or off.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226924
 * @example
 * // uncontrolled
 * <Switch name="unique-name" label="Label" />
 * // controlled
 * <Switch
 *   name="unique-name"
 *   label="Label"
 *   checked={checkedState}
 *   onChaneg={(e) => setCheckedState(e.target.checked)}
 * />
 */
export declare const Switch: import("react").ForwardRefExoticComponent<SwitchProps & import("react").RefAttributes<HTMLInputElement>>;
