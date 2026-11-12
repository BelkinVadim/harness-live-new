import { expect, it } from "vitest";
import { isAdult } from "./age";

it("adult at 30", () => {
  expect(isAdult(30)).toBe(true);
});

it("adult at exactly 18", () => {
  expect(isAdult(18)).toBe(true);
});
