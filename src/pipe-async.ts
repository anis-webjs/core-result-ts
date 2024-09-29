import { Failure } from "./failure";
import { Result, AsyncResult } from "./result";

type ResultMaybeAsync<F extends Failure, S> = Result<F, S> | AsyncResult<F, S>;

type UnknownFunction = (...params: unknown[]) => unknown;

export function pipeAsyncResult<A extends unknown[], B, C, FB extends Failure, FC extends Failure>(
    ab: (this: void, ...a: A) => ResultMaybeAsync<FB, B>,
    bc: (this: void, b: B) => ResultMaybeAsync<FC, C>,
): (...args: A) => AsyncResult<FC | FB, C>;

export function pipeAsyncResult<A extends unknown[], B, C, D, FB extends Failure, FC extends Failure, FD extends Failure>(
    ab: (this: void, ...a: A) => ResultMaybeAsync<FB, B>,
    bc: (this: void, b: B) => ResultMaybeAsync<FC, C>,
    cd: (this: void, c: C) => ResultMaybeAsync<FD, D>,
): (...args: A) => AsyncResult<FC | FB | FD, D>;

export function pipeAsyncResult<A extends unknown[], B, C, D, E, FB extends Failure, FC extends Failure, FD extends Failure, FE extends Failure>(
    ab: (this: void, ...a: A) => ResultMaybeAsync<FB, B>,
    bc: (this: void, b: B) => ResultMaybeAsync<FC, C>,
    cd: (this: void, c: C) => ResultMaybeAsync<FD, D>,
    de: (this: void, d: D) => ResultMaybeAsync<FE, E>,
): (...args: A) => AsyncResult<FC | FB | FD | FE, E>;

export function pipeAsyncResult<A extends unknown[], B, C, D, E, F, FB extends Failure, FC extends Failure, FD extends Failure, FE extends Failure, FF extends Failure>(
    ab: (this: void, ...a: A) => ResultMaybeAsync<FB, B>,
    bc: (this: void, b: B) => ResultMaybeAsync<FC, C>,
    cd: (this: void, c: C) => ResultMaybeAsync<FD, D>,
    de: (this: void, d: D) => ResultMaybeAsync<FE, E>,
    ef: (this: void, e: E) => ResultMaybeAsync<FF, F>,
): (...args: A) => AsyncResult<FC | FB | FD | FE | FF, F>;

// 6 functions
export function pipeAsyncResult<A extends unknown[], B, C, D, E, F, G, FB extends Failure, FC extends Failure, FD extends Failure, FE extends Failure, FF extends Failure, FG extends Failure>(
    ab: (this: void, ...a: A) => ResultMaybeAsync<FB, B>,
    bc: (this: void, b: B) => ResultMaybeAsync<FC, C>,
    cd: (this: void, c: C) => ResultMaybeAsync<FD, D>,
    de: (this: void, d: D) => ResultMaybeAsync<FE, E>,
    ef: (this: void, e: E) => ResultMaybeAsync<FF, F>,
    fg: (this: void, f: F) => ResultMaybeAsync<FG, G>,
): (...args: A) => AsyncResult<FC | FB | FD | FE | FF | FG, G>;

// 7 functions
export function pipeAsyncResult<A extends unknown[], B, C, D, E, F, G, H, FB extends Failure, FC extends Failure, FD extends Failure, FE extends Failure, FF extends Failure, FG extends Failure, FH extends Failure>(
    ab: (this: void, ...a: A) => ResultMaybeAsync<FB, B>,
    bc: (this: void, b: B) => ResultMaybeAsync<FC, C>,
    cd: (this: void, c: C) => ResultMaybeAsync<FD, D>,
    de: (this: void, d: D) => ResultMaybeAsync<FE, E>,
    ef: (this: void, e: E) => ResultMaybeAsync<FF, F>,
    fg: (this: void, f: F) => ResultMaybeAsync<FG, G>,
    gh: (this: void, g: G) => ResultMaybeAsync<FH, H>,
): (...args: A) => AsyncResult<FC | FB | FD | FE | FF | FG | FH, H>;

export function pipeAsyncResult<A extends unknown[], B, C, D, E, F, G, H, I, FB extends Failure, FC extends Failure, FD extends Failure, FE extends Failure, FF extends Failure, FG extends Failure, FH extends Failure, FI extends Failure>(
    ab: (this: void, ...a: A) => ResultMaybeAsync<FB, B>,
    bc: (this: void, b: B) => ResultMaybeAsync<FC, C>,
    cd: (this: void, c: C) => ResultMaybeAsync<FD, D>,
    de: (this: void, d: D) => ResultMaybeAsync<FE, E>,
    ef: (this: void, e: E) => ResultMaybeAsync<FF, F>,
    fg: (this: void, f: F) => ResultMaybeAsync<FG, G>,
    gh: (this: void, g: G) => ResultMaybeAsync<FH, H>,
    hi: (this: void, h: H) => ResultMaybeAsync<FI, I>,
): (...args: A) => AsyncResult<FC | FB | FD | FE | FF | FG | FH | FI, I>;

export function pipeAsyncResult<A extends unknown[], B, C, D, E, F, G, H, I, J, FB extends Failure, FC extends Failure, FD extends Failure, FE extends Failure, FF extends Failure, FG extends Failure, FH extends Failure, FI extends Failure, FJ extends Failure>(
    ab: (this: void, ...a: A) => ResultMaybeAsync<FB, B>,
    bc: (this: void, b: B) => ResultMaybeAsync<FC, C>,
    cd: (this: void, c: C) => ResultMaybeAsync<FD, D>,
    de: (this: void, d: D) => ResultMaybeAsync<FE, E>,
    ef: (this: void, e: E) => ResultMaybeAsync<FF, F>,
    fg: (this: void, f: F) => ResultMaybeAsync<FG, G>,
    gh: (this: void, g: G) => ResultMaybeAsync<FH, H>,
    hi: (this: void, h: H) => ResultMaybeAsync<FI, I>,
    ij: (this: void, i: I) => ResultMaybeAsync<FJ, J>,
): (...args: A) => AsyncResult<FC | FB | FD | FE | FF | FG | FH | FI | FJ, J>;

export function pipeAsyncResult<A extends unknown[], B, C, D, E, F, G, H, I, J, K, FB extends Failure, FC extends Failure, FD extends Failure, FE extends Failure, FF extends Failure, FG extends Failure, FH extends Failure, FI extends Failure, FJ extends Failure, FK extends Failure>(
    ab: (this: void, ...a: A) => ResultMaybeAsync<FB, B>,
    bc: (this: void, b: B) => ResultMaybeAsync<FC, C>,
    cd: (this: void, c: C) => ResultMaybeAsync<FD, D>,
    de: (this: void, d: D) => ResultMaybeAsync<FE, E>,
    ef: (this: void, e: E) => ResultMaybeAsync<FF, F>,
    fg: (this: void, f: F) => ResultMaybeAsync<FG, G>,
    gh: (this: void, g: G) => ResultMaybeAsync<FH, H>,
    hi: (this: void, h: H) => ResultMaybeAsync<FI, I>,
    ij: (this: void, i: I) => ResultMaybeAsync<FJ, J>,
    jk: (this: void, j: J) => ResultMaybeAsync<FK, K>,
): (...args: A) => AsyncResult<FC | FB | FD | FE | FF | FG | FH | FI | FJ | FK, K>;

export function pipeAsyncResult(...fns: UnknownFunction[]): UnknownFunction {
    return async (...initialParams: unknown[]): Promise<unknown> => {
        let result: unknown = initialParams;
        for (let i = 0; i < fns.length; i++) {
            const fn = fns[i];
            if (i === 0) {
                result = await fn(...(result as unknown[]));
            } else {
                if (Result.isFailure(result as Result<any, any>)) {
                    return result;
                }
                result = await fn((result as {value: unknown}).value);
            }
        }
        return result;
    };
}
