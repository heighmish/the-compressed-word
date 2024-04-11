import { test, expect } from "vitest";
import { GetRLE } from "./CompressionOutput";

test("RLE encodes fine", () => {
  expect(GetRLE("aaaaa")).toBe("5a");
});
