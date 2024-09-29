import { describe, it, expect } from 'vitest';
import { Result, AsyncResult } from '../src/index';

describe('Result', () => {
  describe('success', () => {
    it('should create a success result', () => {
      const result = Result.success(42);
      expect(Result.isSuccess(result)).toBe(true);
      expect(Result.isFailure(result)).toBe(false);
      expect(result.value).toBe(42);
    });
  });

  describe('failure', () => {
    it('should create a failure result', () => {
      const error = { type: 'error', message: 'Something went wrong' };
      const result = Result.failure(error);
      expect(Result.isSuccess(result)).toBe(false);
      expect(Result.isFailure(result)).toBe(true);
      expect(result.errors).toEqual([error]);
    });

    it('should create a failure result with multiple errors', () => {
      const error1 = { type: 'error1', message: 'Error 1' };
      const error2 = { type: 'error2', message: 'Error 2' };
      const result = Result.failure(error1, error2);
      expect(Result.isFailure(result)).toBe(true);
      expect(result.errors).toEqual([error1, error2]);
    });
  });

  describe('isSuccess', () => {
    it('should return true for success result', () => {
      const result = Result.success('test');
      expect(Result.isSuccess(result)).toBe(true);
    });

    it('should return false for failure result', () => {
      const result = Result.failure({ type: 'error', message: 'Test error' });
      expect(Result.isSuccess(result)).toBe(false);
    });
  });

  describe('isFailure', () => {
    it('should return true for failure result', () => {
      const result = Result.failure({ type: 'error', message: 'Test error' });
      expect(Result.isFailure(result)).toBe(true);
    });

    it('should return false for success result', () => {
      const result = Result.success('test');
      expect(Result.isFailure(result)).toBe(false);
    });
  });
});

describe('AsyncResult', () => {
  it('should work with async functions', async () => {
    const asyncSuccess = async (): AsyncResult<{ type: string; message: string }, number> => {
      return Result.success(42);
    };

    const asyncFailure = async (): AsyncResult<{ type: string; message: string }, number> => {
      return Result.failure({ type: 'async_error', message: 'Async operation failed' });
    };

    const successResult = await asyncSuccess();
    expect(Result.isSuccess(successResult)).toBe(true);
    if (Result.isSuccess(successResult)) {
      expect(successResult.value).toBe(42);
    } else {
      throw new Error('Expected success result');
    }

    const failureResult = await asyncFailure();

    expect(Result.isFailure(failureResult)).toBe(true);
    if (Result.isFailure(failureResult)) {
      expect(failureResult.errors[0]).toEqual({ type: 'async_error', message: 'Async operation failed' });
    }
  });
});
