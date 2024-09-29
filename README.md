
# @anis-webjs/core-result-ts

A TypeScript library implementing the Result pattern for handling success and failure outcomes.

## Installation

```bash
npm install @anis-webjs/core-result-ts
```

## Usage

To use the Result pattern in your TypeScript code, you can import the `Result` class and its associated types and functions:

```typescript
import { Result } from '@anis-webjs/core-result-ts';

function divide(a: number, b: number): Result<number, string> {
    if (b === 0) {
        return Result.failure({ type: 'division', message: 'Cannot divide by zero' });
    }

    return Result.success(a / b);
}
```

## API

### Result

The `Result` class is a generic class that represents a result of an operation. It has two type parameters: `TSuccess` and `TFailure`.

#### Constructors

- `Result.success(value: TSuccess): Result<TSuccess, TFailure>`: Creates a new `Result` instance with the `success` kind.
- `Result.failure(value: TFailure): Result<TSuccess, TFailure>`: Creates a new `Result` instance with the `failure` kind.

#### Methods

- `isSuccess(): boolean`: Checks if the result is an `Success` variant.
- `isFailure(): boolean`: Checks if the result is an `Failure` variant.
- `Result.success(value: TSuccess): Result<TSuccess, TFailure>`: Creates a new `Result` instance with the `success` kind.
- `Result.failure(error1: TFailure, error2: TFailure): Result<TSuccess, TFailure>`: Creates a new `Result` instance with the `failure` kind.
