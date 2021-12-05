/// <reference types="react" />
export declare type ThemeName = 'primary' | 'secondary' | 'danger' | 'danger-ghost' | 'weak' | 'action' | 'text';
interface CustomProps<E extends React.ElementType = 'button'> {
    /**
     * Set the theme of the button.
     *
     * @default 'primary'
     */
    theme?: ThemeName;
    /**
     * The icon of the button.
     *
     * @example icon={<DownloadIcon />}
     */
    icon?: JSX.Element;
    /**
     * The root tag of the component to render.
     *
     * @default 'button'
     */
    as?: E;
    /**
     * The content of the button.
     */
    children: React.ReactNode;
}
declare type ButtonInnerProps<E extends React.ElementType> = CustomProps<E> & Omit<React.ComponentPropsWithoutRef<E>, keyof CustomProps<E>>;
declare type PolymorphicRef<E extends React.ElementType> = React.ComponentPropsWithRef<E>['ref'];
export declare type ButtonProps<E extends React.ElementType = 'button'> = ButtonInnerProps<E> & {
    ref?: PolymorphicRef<E>;
};
/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 * It includes several predefined button styles, each serving its own semantic purpose.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226924
 * @example
 * <Button onClick={handleClick}>Action</Button>
 */
export declare const Button: <E extends import("react").ElementType<any> = "button">(props: ButtonProps<E>) => React.ReactElement | null;
export {};
