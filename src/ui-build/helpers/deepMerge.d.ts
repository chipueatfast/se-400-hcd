/**
 * Perform a deep merge.
 *
 * @exampe
 * ```js
 * const target = {
 *   a: { b: 1 },
 *   c: 2
 * };
 * const source = {
 *   a: { d: 4 },
 * };
 * deepMerge(target, source)
 *
 * // result
 * {
 *   a: { b: 1, d: 4 }
 *   c: 2
 * }
 * ```
 */
export declare const deepMerge: (target: any, source: any) => any;
