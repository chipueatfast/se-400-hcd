/// <reference types="react" />
import type { TypographyCommonProps } from './Typography';
export declare type TypographyTitleProps = TypographyCommonProps & React.HTMLAttributes<HTMLHeadingElement> & {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
};
export declare const TypographyTitle: ({ color, level, size, weight, className, children, ...rest }: TypographyTitleProps) => JSX.Element;
