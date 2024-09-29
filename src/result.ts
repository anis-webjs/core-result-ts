import { Failure } from "./failure";

declare const __brand__: unique symbol;

type Brand<T, B> = T & { readonly [__brand__]: B };

type SuccessResult<TSuccess> = Brand<
  Readonly<{ kind: 'success'; value: TSuccess }>,
  'SuccessResult'
>;

export type FailureResult<TFailures extends Failure[]> = Brand<
  Readonly<{ kind: 'failure'; errors: TFailures }>,
  'FailureResult'
>;

type Result<TFailure extends Failure, TSuccess> =
  | SuccessResult<TSuccess>
  | FailureResult<TFailure[]>;

type NotFailure<T> = T extends FailureResult<any> ? never : T;

const Result = {
  isSuccess: <TSuccess>(
    result: Result<Failure, TSuccess>,
  ): result is SuccessResult<TSuccess> => result.kind === 'success',
  isFailure: <TFailure extends Failure>(
    result: Result<TFailure, unknown>,
  ): result is FailureResult<TFailure[]> => result.kind === 'failure',
  success: <TSuccess>(value: NotFailure<TSuccess>): SuccessResult<TSuccess> =>
    ({
      value,
      kind: 'success',
    }) as SuccessResult<TSuccess>,
  failure: <TFailures extends Failure[]>(
    ...errors: TFailures
  ): FailureResult<TFailures> =>
    ({
      errors,
      kind: 'failure',
    }) as FailureResult<TFailures>,
};

type AsyncResult<TFailure extends Failure, TSuccess> = Promise<
  Result<TFailure, TSuccess>
>;

export { Result, AsyncResult };
