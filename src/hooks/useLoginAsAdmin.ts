import { useForm, SubmitHandler, Resolver } from 'react-hook-form';
import { useLocation, useHistory } from 'react-router-dom';
import { queryStringParse } from 'helpers/queryString';
import { ActionResult, LoginValues } from 'types';

interface LocationState {
  from: string;
}

const hookDefaultValues: LoginValues = {
  email: '',
  password: '',
  uid: ''
};

interface LoginHook {
  defaultValues?: LoginValues;
  resolver?: Resolver<LoginValues>;
  onSubmit?(data: LoginValues): Promise<ActionResult<{ url: string }>>;
}

/**
 * Leverage `react-hook-form` hooks to create a custom hook to perform Login logic.
 *
 * Return a submit function and all `react-hook-form` methods.
 *
 * @example
 * const { submit } = useLogin({ defaultValues, resolver, onSubmit })
 */
export const useLoginAsAdmin = ({
  resolver = undefined,
  onSubmit,
}: LoginHook) => {
  const history = useHistory();
  const { state } = useLocation();
  const qsObject = queryStringParse(location.search);
  const methods = useForm<LoginValues>({
    defaultValues: {
      ...hookDefaultValues,
      uid: qsObject['uid'],
    },
    resolver,
  });

  /**
   * Perform submit form action.
   */
  const submitFn: SubmitHandler<LoginValues> = async (values) => {
    const result = await onSubmit(values);

    if (result.error) {
      methods.setError(result.error['name'] || 'password', {
        type: 'manual',
        message: result.error.message,
      });
    }

    if (result.data) {
      const { url } = result.data;
      methods.reset();

      /**
       * if present, navigate to previous url that required authentication.
       * Priority:
       * 1. `?redirect=` param from URL query string.
       * 2. `location.state.from` from `PrivateRoute`.
       * 3. `url` returned from props.onSubmit.
       */
      if (qsObject['redirect']) {
        history.replace(qsObject['redirect']);
      } else if (state && (state as LocationState).from) {
        history.replace((state as LocationState).from);
      } else {
        history.replace(url);
      }
    }

    // clean up
    methods.setValue('recaptcha', '');
  };

  return {
    ...methods,
    submit: methods.handleSubmit(submitFn),
  };
};
