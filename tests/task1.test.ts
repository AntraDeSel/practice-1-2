import { describe, it, expect } from "vitest";
import { describeValue, formatError, moveAnimal } from "../src/task1-narrowing";

describe("Task 1: Базовое сужение", () => {
  it("describeValue работает с разными типами", () => {
    expect(describeValue("hello")).toBe("Строка: hello");
    expect(describeValue(42)).toBe("Число: 42");
    expect(describeValue(true)).toBe("Логическое: true");
  });

  it("formatError различает Error и строку", () => {
    expect(formatError(new Error("Сбой"))).toBe("Сбой");
    expect(formatError("Просто текст")).toBe("Ошибка: Просто текст");
  });

  it("moveAnimal использует оператор in", () => {
    const fish: Fish = { swim: () => "swim" };
    const bird: Bird = { fly: () => "fly" };
    expect(moveAnimal(fish)).toBe("Плывет");
    expect(moveAnimal(bird)).toBe("Летит");
  });
});