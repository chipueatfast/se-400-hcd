/// <reference types="react" />
export interface DropdownProps {
    overlay: React.ReactNode;
    children: React.ReactNode;
    direction?: 'left' | 'right';
}
/**
 * When there are more than a few options to choose from, you can wrap them in a `Dropdown`.
 * By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action.
 */
export declare const Dropdown: {
    ({ overlay, direction, children, }: DropdownProps): JSX.Element;
    Item: (props: import("./Item").ItemProps) => JSX.Element;
};
