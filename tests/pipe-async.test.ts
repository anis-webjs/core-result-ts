import { describe, it, expect } from "vitest";
import { pipeAsyncResult, Result } from "../src";

describe('pipeAsyncResult', () => {
  it('should pipe successful results', async () => {
    const addOne = async (x: number): Promise<Result<never, number>> => Result.success(x + 1);
    const double = async (x: number): Promise<Result<never, number>> => Result.success(x * 2);
    const toString = async (x: number): Promise<Result<never, string>> => Result.success(x.toString());

    const piped = pipeAsyncResult(addOne, double, toString);

    const result = await piped(5);

    expect(Result.isSuccess(result)).toBe(true);
    if (Result.isSuccess(result)) {
        expect(result.value).toBe('12');
    }
  });

  it('should stop at the first failure', async () => {
    const addOne = async (x: number): Promise<Result<{ type: 'ADD_ERROR', message: string }, number>> => 
      x < 0 ? Result.failure({ type: 'ADD_ERROR', message: 'Cannot add to negative number' }) : Result.success(x + 1);
    const double = async (x: number): Promise<Result<{ type: 'DOUBLE_ERROR', message: string }, number>> => Result.success(x * 2);
    const toString = async (x: number): Promise<Result<{ type: 'TO_STRING_ERROR', message: string }, string>> => Result.success(x.toString());

    const piped = pipeAsyncResult(addOne, double, toString);
    const result = await piped(-5);

    expect(Result.isFailure(result)).toBe(true);
    if (Result.isFailure(result)) {
        expect(result.errors[0]).toEqual({ type: 'ADD_ERROR', message: 'Cannot add to negative number' });
    }
  });

  it('should handle multiple parameters in the first function', async () => {   
    const addOne = async (x: number, y: number): Promise<Result<{ type: 'ADD_ERROR', message: string }, number>> => 
      x < 0 ? Result.failure({ type: 'ADD_ERROR', message: 'Cannot add to negative number' }) : Result.success(x + y);
    const double = async (x: number): Promise<Result<{ type: 'DOUBLE_ERROR', message: string }, number>> => Result.success(x * 2);
    const toString = async (x: number): Promise<Result<{ type: 'TO_STRING_ERROR', message: string }, string>> => Result.success(x.toString());

    const piped = pipeAsyncResult(addOne, double, toString);
    const result = await piped(5, 2);

    expect(Result.isSuccess(result)).toBe(true);
    if (Result.isSuccess(result)) {
        expect(result.value).toBe('14');
    }
  });
});
