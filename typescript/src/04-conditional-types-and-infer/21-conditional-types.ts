import { Equal, Expect } from "../helpers/type-utils";
//lesson 61
type YouSayGoodbyeAndISayHello<T> = T extends "hello" ? "goodbye" : "hello";

/**
 * T extends "hello" => means, if T can compare to "hello"
 */

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>
];
