/// <reference types="react" />
export interface IconPlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
    bg?: string;
    children: React.ReactNode;
}
/**
 * A simple 48x48 round placeholder to put a 24x24 icon in.
 *
 * @see  https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226919
 * @example
 * <IconPlaceholder>
 *   <AttenionIcon />
 * </IconPlaceholder>
 */
export declare const IconPlaceholder: ({ bg, className, children, ...rest }: IconPlaceholderProps) => JSX.Element;
