import { Equal, Expect } from "../helpers/type-utils";

const frontendToBackendEnumMap = {
  singleModule: "SINGLE_MODULE",
  multiModule: "MULTI_MODULE",
  sharedModule: "SHARED_MODULE",
} as const;

type BackendModuleEnum =
  typeof frontendToBackendEnumMap[keyof typeof frontendToBackendEnumMap];

//or

type Obj = typeof frontendToBackendEnumMap;

type BackendModuleEnum2 = Obj[keyof Obj];

type tests = [
  Expect<
    Equal<BackendModuleEnum, "SINGLE_MODULE" | "MULTI_MODULE" | "SHARED_MODULE">
  >
];
