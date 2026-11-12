import { expect, it } from "vitest";
import { isAdult } from "./age";

it("adult at 30", () => {
  expect(isAdult(30)).toBe(true);
});
