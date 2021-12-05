/// <reference types="react" />
interface FlexboxTopProps {
    headlineLeft: JSX.Element;
    primary?: JSX.Element;
    secondary?: JSX.Element;
    actions?: React.ReactNode;
    onCloseModal?: () => void;
}
export declare const FlexboxTop: (props: FlexboxTopProps) => JSX.Element;
export {};
