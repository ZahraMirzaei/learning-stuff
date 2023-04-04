import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

/**
 * event one of this discriminated union haven't
 * in common with `type` key, it doesn't work.
 */

type EventType = Event["type"];

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
