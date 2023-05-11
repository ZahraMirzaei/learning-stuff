export type Maybe<T extends {}> = T | null | undefined;

/**
 * everything in javascript are object, except null and undefined.
 * so when we extends T from {}, it means that it can be everything except
 * null or undefined.
 */

type tests = [
  // @ts-expect-error
  Maybe<null>,
  // @ts-expect-error
  Maybe<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<"">
];
