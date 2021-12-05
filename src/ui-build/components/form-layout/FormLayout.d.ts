/// <reference types="react" />
export interface FormLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Number of columns in the layout.
     *
     * @default 1
     */
    col?: number;
    /**
     * Spacing between 2 columns.
     *
     * @default 32
     */
    columnGap?: number;
    /**
     * Spacing between 2 rows.
     *
     * @default 20
     */
    rowGap?: number;
}
/**
 * Basic layout for forms.
 * We can simply switch between 1,2,3 column layout by `col` prop.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/498159979
 * @example
 * <FormLayout>
 *   <!-- your form elements here -->
 * </FormLayout>
 */
export declare const FormLayout: ({ col, columnGap, rowGap, children, ...rest }: FormLayoutProps) => JSX.Element;
