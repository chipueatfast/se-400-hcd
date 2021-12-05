/// <reference types="react" />
import type { Color } from "../../helpers/getColors";
export interface DataBoxContentProps {
    isFullContent: boolean;
}
export interface DataBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Show the header.
     */
    header?: React.ReactNode;
    /**
     * Show the main content of the box.
     * It can be a React component or a function that returns a React node.
     */
    content: React.ReactNode | ((props: DataBoxContentProps) => React.ReactNode);
    /**
     * Show the footer.
     */
    footer?: React.ReactNode;
    /**
     * Show dropdown menu.
     */
    dropdown?: React.ReactNode;
    /**
     * Primary action of the box.
     */
    action?: React.ReactNode;
    extra?: React.ReactNode;
    /**
     * Border color of the box.
     */
    color?: Color;
    /**
     * If `true`, the box will show a more/less button beside primary action.
     */
    expandable?: boolean;
}
/**
 * A box that contains data with predefined styles.
 */
export declare const DataBox: {
    ({ header, content, footer, action, dropdown, extra, color, className, expandable, ...rest }: DataBoxProps): JSX.Element;
    Header: ({ left, right, className, ...rest }: import("./Header").HeaderProps) => JSX.Element;
};
