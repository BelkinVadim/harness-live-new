import { describe, expect, it } from "vitest";
import { farewell } from "./farewell";

describe("farewell", () => {
  it("says goodbye by name", () => {
    expect(farewell("world")).toBe("Goodbye, world!");
  });
});
