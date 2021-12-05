/// <reference types="react" />
interface FlexboxBottomProps {
    primary?: JSX.Element;
    secondary?: JSX.Element;
    back?: JSX.Element;
    actions?: React.ReactNode;
    onCloseModal?: () => void;
}
export declare const FlexboxBottom: (props: FlexboxBottomProps) => JSX.Element;
export {};
