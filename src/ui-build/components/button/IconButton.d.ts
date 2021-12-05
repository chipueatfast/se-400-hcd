/// <reference types="react" />
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: JSX.Element;
    'aria-label': string;
}
export declare const IconButton: ({ icon, className, onClick, "aria-label": label, ...rest }: IconButtonProps) => JSX.Element;
