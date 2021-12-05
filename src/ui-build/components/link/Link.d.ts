/// <reference types="react" />
import type { Color } from "../../helpers/getColors";
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    icon?: JSX.Element;
    disabled?: boolean;
    color?: Color;
    underline?: 'none' | 'hover' | 'always';
    children: React.ReactNode;
}
/**
 * The Link component allows you to easily customize anchor elements with your theme colors and typography styles.
 *
 * @example
 * <Link
 *   href="https://trueprofile.io"
 *   target="_blank"
 *   color="blue"
 *   underline="hover"
 * >
 *   trueprofile.io
 * </Link>
 */
export declare const Link: import("react").ForwardRefExoticComponent<LinkProps & import("react").RefAttributes<HTMLAnchorElement>>;
