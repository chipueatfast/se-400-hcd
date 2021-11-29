interface DefaultError extends Record<string, any> {
  message: string;
}

interface SuccessResult<Data> {
  data: Data;
  error: null;
}

interface ErrorResult<Error = DefaultError> {
  data: null;
  error: Error & DefaultError;
}

export type ActionResult<Data, Error = DefaultError> =
  | SuccessResult<Data>
  | ErrorResult<Error>;
