import { Result } from ".";

type UnknownFunction = (...params: unknown[]) => unknown;

type Failure = { type: string; message: string };

export function pipeResult<A extends unknown[], B, C, FB extends Failure, FC extends Failure>(
    ab: (this: void, ...a: A) => Result<FB, B>,
    bc: (this: void, b: B) => Result<FC, C>,
): (...args: A) => Result<FC | FB, C>;

export function pipeResult<A extends unknown[], B, C, D, FB extends Failure, FC extends Failure, FD extends Failure>(
    ab: (this: void, ...a: A) => Result<FB, B>,
    bc: (this: void, b: B) => Result<FC, C>,
    cd: (this: void, c: C) => Result<FD, D>,
): (...args: A) => Result<FC | FB | FD, D>;

export function pipeResult<A extends unknown[], B, C, D, E, FB extends Failure, FC extends Failure, FD extends Failure, FE extends Failure>(
    ab: (this: void, ...a: A) => Result<FB, B>,
    bc: (this: void, b: B) => Result<FC, C>,
    cd: (this: void, c: C) => Result<FD, D>,
    de: (this: void, d: D) => Result<FE, E>,
): (...args: A) => Result<FC | FB | FD | FE, E>;

export function pipeResult<A extends unknown[], B, C, D, E, F, FB extends Failure, FC extends Failure, FD extends Failure, FE extends Failure, FF extends Failure>(
    ab: (this: void, ...a: A) => Result<FB, B>,
    bc: (this: void, b: B) => Result<FC, C>,
    cd: (this: void, c: C) => Result<FD, D>,
    de: (this: void, d: D) => Result<FE, E>,
    ef: (this: void, e: E) => Result<FF, F>,
): (...args: A) => Result<FC | FB | FD | FE | FF, F>;


// 6 functions
export function pipeResult<A extends unknown[], B, C, D, E, F, G, FB extends Failure, FC extends Failure, FD extends Failure, FE extends Failure, FF extends Failure, FG extends Failure>(
    ab: (this: void, ...a: A) => Result<FB, B>,
    bc: (this: void, b: B) => Result<FC, C>,
    cd: (this: void, c: C) => Result<FD, D>,
    de: (this: void, d: D) => Result<FE, E>,
    ef: (this: void, e: E) => Result<FF, F>,
    fg: (this: void, f: F) => Result<FG, G>,
): (...args: A) => Result<FC | FB | FD | FE | FF | FG, G>;

// 7 functions
export function pipeResult<A extends unknown[], B, C, D, E, F, G, H, FB extends Failure, FC extends Failure, FD extends Failure, FE extends Failure, FF extends Failure, FG extends Failure, FH extends Failure>(
    ab: (this: void, ...a: A) => Result<FB, B>,
    bc: (this: void, b: B) => Result<FC, C>,
    cd: (this: void, c: C) => Result<FD, D>,
    de: (this: void, d: D) => Result<FE, E>,
    ef: (this: void, e: E) => Result<FF, F>,
    fg: (this: void, f: F) => Result<FG, G>,
    gh: (this: void, g: G) => Result<FH, H>,
): (...args: A) => Result<FC | FB | FD | FE | FF | FG | FH, H>;

export function pipeResult<A extends unknown[], B, C, D, E, F, G, H, I, FB extends Failure, FC extends Failure, FD extends Failure, FE extends Failure, FF extends Failure, FG extends Failure, FH extends Failure, FI extends Failure>(
    ab: (this: void, ...a: A) => Result<FB, B>,
    bc: (this: void, b: B) => Result<FC, C>,
    cd: (this: void, c: C) => Result<FD, D>,
    de: (this: void, d: D) => Result<FE, E>,
    ef: (this: void, e: E) => Result<FF, F>,
    fg: (this: void, f: F) => Result<FG, G>,
    gh: (this: void, g: G) => Result<FH, H>,
    hi: (this: void, h: H) => Result<FI, I>,
): (...args: A) => Result<FC | FB | FD | FE | FF | FG | FH | FI, I>;

export function pipeResult<A extends unknown[], B, C, D, E, F, G, H, I, J, FB extends Failure, FC extends Failure, FD extends Failure, FE extends Failure, FF extends Failure, FG extends Failure, FH extends Failure, FI extends Failure, FJ extends Failure>(
    ab: (this: void, ...a: A) => Result<FB, B>,
    bc: (this: void, b: B) => Result<FC, C>,
    cd: (this: void, c: C) => Result<FD, D>,
    de: (this: void, d: D) => Result<FE, E>,
    ef: (this: void, e: E) => Result<FF, F>,
    fg: (this: void, f: F) => Result<FG, G>,
    gh: (this: void, g: G) => Result<FH, H>,
    hi: (this: void, h: H) => Result<FI, I>,
    ij: (this: void, i: I) => Result<FJ, J>,
): (...args: A) => Result<FC | FB | FD | FE | FF | FG | FH | FI | FJ, J>;

export function pipeResult<A extends unknown[], B, C, D, E, F, G, H, I, J, K, FB extends Failure, FC extends Failure, FD extends Failure, FE extends Failure, FF extends Failure, FG extends Failure, FH extends Failure, FI extends Failure, FJ extends Failure, FK extends Failure>(
    ab: (this: void, ...a: A) => Result<FB, B>,
    bc: (this: void, b: B) => Result<FC, C>,
    cd: (this: void, c: C) => Result<FD, D>,
    de: (this: void, d: D) => Result<FE, E>,
    ef: (this: void, e: E) => Result<FF, F>,
    fg: (this: void, f: F) => Result<FG, G>,
    gh: (this: void, g: G) => Result<FH, H>,
    hi: (this: void, h: H) => Result<FI, I>,
    ij: (this: void, i: I) => Result<FJ, J>,
    jk: (this: void, j: J) => Result<FK, K>,
): (...args: A) => Result<FC | FB | FD | FE | FF | FG | FH | FI | FJ | FK, K>;

export function pipeResult(...fns: UnknownFunction[]): UnknownFunction {
    return (...initialParams: unknown[]): unknown =>
        fns.reduce<unknown>((result, fn, index) => {
            if (index === 0) {
                return fn(...(result as unknown[]));
            }

            if (Result.isFailure(result as Result<any, any>)) {
                return result;   
            }

            return fn((result as {value: unknown}).value);
        }, initialParams);
}
