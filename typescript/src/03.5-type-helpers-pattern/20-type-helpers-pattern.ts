import { Equal, Expect } from "../helpers/type-utils";

type ReturnWhatIPassIn<T> = T;
/**
 * Here ReturnWhatIPassIn is a function and <T> is its argument and T is what is return
 * if we remove <T> part, it doesn't a function anymore, it just a static type.
 * We can pass more than one argument to it, also we can pass in, default values.
 * It's a type function.
 * When we use Record<T, F>, it uses this type function and returns {[P in T]: F;}
 */

type something = ReturnWhatIPassIn<string>;

/**
 * type Test<T, K> = {K:T}
 */

type tests = [
  Expect<Equal<ReturnWhatIPassIn<1>, 1>>,
  Expect<Equal<ReturnWhatIPassIn<"1">, "1">>,
  Expect<Equal<ReturnWhatIPassIn<true>, true>>,
  Expect<Equal<ReturnWhatIPassIn<false>, false>>,
  Expect<Equal<ReturnWhatIPassIn<null>, null>>
];
