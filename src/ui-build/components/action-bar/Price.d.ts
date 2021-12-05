/// <reference types="react" />
export interface PriceProps {
    amount: string | number;
    currency?: string;
}
export declare const Price: ({ amount, currency }: PriceProps) => JSX.Element;
