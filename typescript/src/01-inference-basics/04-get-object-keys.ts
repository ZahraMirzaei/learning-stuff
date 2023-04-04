import { Equal, Expect } from "../helpers/type-utils";

const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
};

/**
 * you don't need to use it with typeof, you can use it with any type like:
 * type TestingFrameworks={
 *  a: string;
 *  b: string;
 *  c: number;
 * };
 * type TestingFramework= keyof TestingFrameworks;
 *
 * but when it come with typeof, we don't need to declare an extra type.
 */

type TestingFramework = keyof typeof testingFrameworks;

type tests = [Expect<Equal<TestingFramework, "vitest" | "jest" | "mocha">>];
