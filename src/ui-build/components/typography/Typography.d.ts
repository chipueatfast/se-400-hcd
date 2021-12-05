/// <reference types="react" />
import type { Color } from "../../helpers/getColors";
export declare type TypographySize = 'mini' | 'standard' | 'medium' | 'big';
export declare type TypographyWeight = 'normal' | 'bold';
export declare type TypographyCommonProps = {
    weight?: TypographyWeight;
    size?: TypographySize;
    color?: Color;
    children: React.ReactNode;
};
/**
 * Display title, subtitle, simple text or paragraph.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226916
 */
export declare const Typography: {
    (props: {
        children: React.ReactNode;
    }): React.ReactNode;
    /**
     * Display heading using the `<h1>` to `<h6>` tags.
     * - `<h1>` defines the most important heading.
     * - `<h6>` defines the least important heading.
     *
     * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226916
     * @example
     * <Typography.Title>
     *   <!-- your content here -->
     * </Typography.Title>
     */
    Title: ({ color, level, size, weight, className, children, ...rest }: import("./TypographyTitle").TypographyTitleProps) => JSX.Element;
    /**
     * Display simple inline text using `<span>` tag.
     *
     * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226916
     * @example
     * <Typography.Text>
     *   <!-- your content here -->
     * </Typography.Text>
     */
    Text: ({ color, size, weight, className, children, ...rest }: import("./TypographyText").TypographyTextProps) => JSX.Element;
    /**
     * Display a paragraph using `<p>` tag.
     * A paragraph always starts on a new line, and is usually a block of text.
     *
     * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226916
     * @example
     * <Typography.Paragraph>
     *   <!-- your content here -->
     * </Typography.Paragraph>
     */
    Paragraph: ({ color, size, weight, className, children, ...rest }: import("./TypographyParagraph").TypographyParagraphProps) => JSX.Element;
};
