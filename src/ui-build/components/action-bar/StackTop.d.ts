/// <reference types="react" />
interface StackTopProps {
    headlineLeft: JSX.Element;
    headlineRight?: JSX.Element;
    primary?: JSX.Element;
    secondary?: JSX.Element;
    actions?: React.ReactNode;
    price?: JSX.Element;
    back?: JSX.Element;
    onCloseModal?: () => void;
}
export declare const StackTop: (props: StackTopProps) => JSX.Element;
export {};
