/// <reference types="react" />
export interface DescriptionListProps extends React.HTMLAttributes<HTMLDivElement> {
    data: {
        key: React.ReactNode;
        value: React.ReactNode;
    }[];
    /**
     * Limit the number of rows to display and has a show-more toggle button. Minimum value is 1.
     */
    limit?: number;
}
/**
 * A list of data with key-value pairs.
 *
 * You can use `$empty` as indicator to render `&nbsp;`.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/6SY2SRXZAC7/425226914
 */
export declare const DescriptionList: ({ data, limit, className, ...rest }: DescriptionListProps) => JSX.Element;
