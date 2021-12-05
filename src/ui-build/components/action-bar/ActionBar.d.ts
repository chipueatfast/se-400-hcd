/// <reference types="react" />
export interface ActionBarProps {
    primary?: JSX.Element;
    secondary?: JSX.Element;
    actions?: React.ReactNode;
    back?: JSX.Element;
    price?: JSX.Element;
    headlineLeft: JSX.Element;
    headlineRight?: JSX.Element;
    onCancel?: () => void;
    onCloseModal?: () => void;
    shouldRenderFooter?: boolean;
    children: React.ReactNode;
}
/**
 * Display all possible actions related to a page as Action Header and Action Footer layout.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/427440008
 */
export declare const ActionBar: {
    (props: ActionBarProps): JSX.Element;
    /**
     * `ActionBar.Flexbox` - Action Header and Action Footer will be placed side-by-side.
     *
     * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/427440008
     */
    Flexbox: ({ headlineLeft, primary, secondary, back, actions, onCloseModal, shouldRenderFooter, children, }: ActionBarProps) => JSX.Element;
    /**
     * `ActionBar.Stack` - ActionBar will have 2 segments. Action Segment will be on top of Headline Segment.
     *
     * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/427440008
     */
    Stack: ({ headlineLeft, headlineRight, price, primary, secondary, actions, back, onCloseModal, shouldRenderFooter, children, }: ActionBarProps) => JSX.Element;
    /**
     * Headline of the page, contain a heading and subheading.
     *
     * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/427440008
     * @example
     * <ActionBar.Headline
     *   main="Sample headline"
     *   sub="Sample category"
     * />
     */
    Headline: (props: import("./Headline").TitleProps) => JSX.Element;
    /**
     * Specific Back button for ActionBar. On desktop, icon and text will appear. On mobile, only icon will appear.
     *
     * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/427440008
     * @example
     * <ActionBar.Back icon={<AngleLeftIcon />}>Back</ActionBar.Back>
     */
    Back: (props: import("./Back").BackProps) => JSX.Element;
    /**
     * Predefined component for displaying Price with currency.
     *
     * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/427440008
     * @example
     * <ActionBar.Price amount={179} />
     * @deprecated use utility component `Price` instead - will be removed in next version.
     */
    Price: ({ amount, currency }: import("./Price").PriceProps) => JSX.Element;
    Primary: (props: import("./Primary").PrimaryProps) => JSX.Element;
    Actions: (props: import("./Actions").ActionsProps) => JSX.Element;
};
