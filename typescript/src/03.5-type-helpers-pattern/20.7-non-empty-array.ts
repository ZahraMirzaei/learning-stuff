type NonEmptyArray<T> = [T, ...Array<T>];
// lesson 58
export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(["a"]);
makeEnum(["a", "b", "c"]);

// @ts-expect-error
makeEnum([]);
