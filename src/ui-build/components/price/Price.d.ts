/// <reference types="react" />
export interface PriceProps {
    amount: string | number;
    currency?: string;
    prefix?: string;
    size?: 'small' | 'large';
}
/**
 * An utility component to display Price with currency.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/505349969
 * @example
 * <Price amount={179} />
 */
export declare const Price: ({ amount, currency, prefix, size, }: PriceProps) => JSX.Element;
