/// <reference types="react" />
export declare type AlertType = 'info' | 'warning';
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: AlertType;
    icon?: JSX.Element;
    action?: React.ReactNode;
    closeable?: boolean;
    /**
     * The content of the button.
     */
    children: React.ReactNode;
}
/**
 * An alert displays a short, important message in a way that attracts the user's
 * attention without interrupting the user's task.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226922
 * @example
 * <Alert icon={<IconComponent />}>
 *   <Typography.Paragraph>
 *     <!-- your content here -->
 *   </Typography.Paragraph>
 * </Alert>
 */
export declare const Alert: ({ type, icon, action, children, className, closeable, ...rest }: AlertProps) => JSX.Element | null;
