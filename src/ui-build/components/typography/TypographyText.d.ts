/// <reference types="react" />
import type { TypographyCommonProps } from './Typography';
export declare type TypographyTextProps = TypographyCommonProps & React.HTMLAttributes<HTMLSpanElement>;
export declare const TypographyText: ({ color, size, weight, className, children, ...rest }: TypographyTextProps) => JSX.Element;
