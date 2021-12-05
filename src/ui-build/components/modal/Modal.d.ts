/// <reference types="react" />
import ReactModal from 'react-modal';
export interface ModalProps extends ReactModal.Props {
    children: React.ReactNode;
}
/**
 * Using `Modal` to create a new floating layer over the current page to get user feedback or display information.
 * Powered by `react-modal`.
 *
 * @see https://dataflowgroup.invisionapp.com/console/share/J61KLY3YHR/425226913
 * @see http://reactcommunity.org/react-modal
 */
export declare const Modal: {
    ({ style, isOpen, children, ...rest }: ModalProps): JSX.Element;
    setAppElement: typeof ReactModal.setAppElement;
};
