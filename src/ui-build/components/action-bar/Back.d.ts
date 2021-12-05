/// <reference types="react" />
import { LinkProps } from "../link";
export interface BackProps extends Omit<LinkProps, 'children'> {
    children?: React.ReactNode;
}
export declare const Back: (props: BackProps) => JSX.Element;
