export {};
declare global {
  interface Window {
    grecaptcha: {
      /**
       * Resets the reCAPTCHA widget.
       *
       * @param opt_widget_id Optional widget ID, defaults to the first widget created if unspecified.
       */
      reset(opt_widget_id?: number): void;

      /**
       * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
       *
       * @param opt_widget_id Optional widget ID, defaults to the first widget created if unspecified.
       */
      execute(opt_widget_id?: number): void;
    };

    dataLayer?: any[];
  }
}
