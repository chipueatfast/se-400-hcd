/// <reference types="react" />
interface StackBottomProps {
    primary?: JSX.Element;
    secondary?: JSX.Element;
    actions?: React.ReactNode;
    price?: JSX.Element;
    back?: JSX.Element;
    onCloseModal?: () => void;
}
export declare const StackBottom: (props: StackBottomProps) => JSX.Element;
export {};
