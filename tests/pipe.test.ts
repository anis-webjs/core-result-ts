import { describe, it, expect } from 'vitest';
import { Result } from '../src';

describe('pipeResult', () => {
  it('should pipe successful results', () => {
    const addOne = (x: number): Result<never, number> => Result.success(x + 1);
    const double = (x: number): Result<never, number> => Result.success(x * 2);
    const toString = (x: number): Result<never, string> => Result.success(x.toString());

    const piped = Result.pipe(addOne, double, toString);
    const result = piped(5);

    expect(Result.isSuccess(result)).toBe(true);
    if (Result.isSuccess(result)) {
      expect(result.value).toBe('12');
    }
  });

  it('should stop at the first failure', () => {
    const addOne = (x: number): Result<{ type: 'ADD_ERROR', message: string }, number> => 
      x < 0 ? Result.failure({ type: 'ADD_ERROR', message: 'Cannot add to negative number' }) : Result.success(x + 1);
    const double = (x: number): Result<{ type: 'DOUBLE_ERROR', message: string }, number> => Result.success(x * 2);
    const toString = (x: number): Result<{ type: 'TO_STRING_ERROR', message: string }, string> => Result.success(x.toString());

    const piped = Result.pipe(addOne, double, toString);
    const result = piped(-5);

    expect(Result.isFailure(result)).toBe(true);
    if (Result.isFailure(result)) {
      expect(result.errors[0]).toEqual({ type: 'ADD_ERROR', message: 'Cannot add to negative number' });
    }
  });

  it('should handle multiple parameters in the first function', () => {
    const add = (x: number, y: number): Result<never, number> => Result.success(x + y);
    const double = (x: number): Result<never, number> => Result.success(x * 2);

    const piped = Result.pipe(add, double);
    const result = piped(3, 4);

    expect(Result.isSuccess(result)).toBe(true);
    if (Result.isSuccess(result)) {
      expect(result.value).toBe(14);
    }
  });
});
