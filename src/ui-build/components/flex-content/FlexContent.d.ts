/// <reference types="react" />
export interface FlexContentProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: JSX.Element;
    iconBg?: string;
    children: React.ReactNode;
}
/**
 * Flex Content - A basic display of Icon & Content side by side in a flex container.
 * Icon and Content are aligned automatically base on the number of lines of Content.
 *
 * Use for display content in `Alert` and `Notification`.
 *
 * @example
 * <FlexContent icon={<CheckIcon color="#0b8e9b" />}>
 *   <Typography.Paragraph>
 *     <!-- your content here -->
 *   </Typography.Paragraph>
 * </FlexContent>
 */
export declare const FlexContent: ({ icon, iconBg, children, className, ...rest }: FlexContentProps) => JSX.Element;
