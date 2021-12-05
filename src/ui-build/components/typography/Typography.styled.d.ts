/// <reference types="react" />
import type { TypographyCommonProps } from './Typography';
import type { TypographyTitleProps } from './TypographyTitle';
export declare const Heading: import("styled-components").StyledComponent<"div", any, TypographyCommonProps & import("react").HTMLAttributes<HTMLHeadingElement> & {
    level?: 1 | 2 | 3 | 4 | 5 | 6 | undefined;
} & {
    $color: TypographyTitleProps['color'];
}, never>;
export declare const FlowContent: import("styled-components").StyledComponent<"div", any, TypographyCommonProps & {
    $color: TypographyTitleProps['color'];
}, never>;
