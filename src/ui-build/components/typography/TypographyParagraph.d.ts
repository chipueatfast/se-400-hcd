/// <reference types="react" />
import type { TypographyCommonProps } from './Typography';
export declare type TypographyParagraphProps = TypographyCommonProps & React.HTMLAttributes<HTMLParagraphElement>;
export declare const TypographyParagraph: ({ color, size, weight, className, children, ...rest }: TypographyParagraphProps) => JSX.Element;
