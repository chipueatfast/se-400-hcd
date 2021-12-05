/// <reference types="react" />
export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    left?: string;
    right?: string;
}
export declare const Header: ({ left, right, className, ...rest }: HeaderProps) => JSX.Element;
