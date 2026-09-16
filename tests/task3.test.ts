import { describe, it, expect } from "vitest";
import { initApp } from "../src/task3-assertion";

describe("Task 3: Assertion Functions", () => {
  it("initApp работает с валидной конфигурацией", () => {
    const config = { apiUrl: "https://api.test", timeout: 5000 };
    expect(initApp(config)).toBe("API: https://api.test, Timeout: 5000");
  });

  it("initApp бросает ошибку при невалидной конфигурации", () => {
    expect(() => initApp(null)).toThrow("Invalid config");
    expect(() => initApp({ apiUrl: "test" })).toThrow("Invalid config"); // нет timeout
    expect(() => initApp({ apiUrl: 123, timeout: 100 })).toThrow("Invalid config"); // apiUrl не строка
  });
});