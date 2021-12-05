/// <reference types="react" />
export declare type Justify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
export declare type AlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
export declare type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export declare type SizeSet = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    container?: boolean;
    item?: boolean;
    withSpacing?: boolean;
    span?: number;
    justify?: Justify;
    alignItems?: AlignItems;
    direction?: Direction;
    sm?: SizeSet;
    xm?: SizeSet;
    lg?: SizeSet;
    as?: string | React.ElementType;
}
/**
 * Flexbox layout with 12-column grid system.
 *
 * Component will have the flex **container** behavior by default.
 * Add prop `item` if you want to have the flex **item** behavior.
 *
 * Support:
 * - breakpoints `sm < 736`, `xm >= 736`, `lg >= 1088`
 * - direction `row`, `row-reverse`, `column`, `column-reverse`
 * - justify-content `flex-start`, `flex-end`, `center`, `space-between`, `space-around`
 * - align-items `flex-start`, `flex-end`, `center`, `stretch`, `baseline`
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226910
 * @example
 * <Grid container>
 *   <Grid item>
 *     <!-- your content here -->
 *   </Grid>
 *   <Grid item>
 *     <!-- your content here -->
 *   </Grid>
 * </Grid>
 */
export declare const Grid: ({ container, item, withSpacing, justify, alignItems, direction, sm, xm, lg, as, className: customClasses, children, ...rest }: GridProps) => JSX.Element;
