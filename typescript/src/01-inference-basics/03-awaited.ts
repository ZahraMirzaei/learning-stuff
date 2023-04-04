import { Equal, Expect } from "../helpers/type-utils";

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

/*
 * we can solve this problem in this way:
 * type GetUserPromise = ReturnType<typeof getUser>;
 * type ReturnValue = Awaited<GetUserPromise>;
 */

type ReturnValue = Awaited<ReturnType<typeof getUser>>;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>
];
