import { Equal, Expect } from "../helpers/type-utils";

type AddRoutePrefix<TRoute extends string> = `/${TRoute}`;
/**
 * What is `extends`? it say TRoute must be string.
 * actually it's like when we pass type to function parameter.
 * function addRouterPrefix(route: string){};
 * If you don't pass extends string, TRoute gets unknown type.
 */

type tests = [
  Expect<Equal<AddRoutePrefix<"">, "/">>,
  Expect<Equal<AddRoutePrefix<"about">, "/about">>,
  Expect<Equal<AddRoutePrefix<"about/team">, "/about/team">>,
  Expect<Equal<AddRoutePrefix<"blog">, "/blog">>,
  // @ts-expect-error
  AddRoutePrefix<boolean>,
  // @ts-expect-error
  AddRoutePrefix<number>
];
