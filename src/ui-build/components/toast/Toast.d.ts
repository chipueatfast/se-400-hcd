/// <reference types="react" />
import { ToastContainerProps, toast } from 'react-toastify';
export declare type ToastProps = ToastContainerProps;
/**
 * Provide brief messages about app processes. Powered by `react-toastify`.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226921
 * @see https://fkhadra.github.io/react-toastify
 */
export declare const Toast: (props: ToastProps) => JSX.Element;
export { toast as toast };
