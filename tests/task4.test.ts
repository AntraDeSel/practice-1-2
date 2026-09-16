import { describe, it, expect } from "vitest";
import { parseTransactions, calculateBalance } from "../src/task4-parser";

describe("Task 4: Парсер данных", () => {
  const rawData: unknown[] = [
    { id: "1", amount: 100, type: "deposit" },
    "не объект",
    { id: "2", amount: 50, type: "withdrawal" },
    { id: "3", amount: "много", type: "deposit" }, // невалидно
    null,
  ];

  it("parseTransactions разделяет данные", () => {
    const result = parseTransactions(rawData);
    expect(result.valid.length).toBe(2);
    expect(result.errors.length).toBe(3);
  });

  it("calculateBalance считает итог", () => {
    const valid = [
      { id: "1", amount: 100, type: "deposit" },
      { id: "2", amount: 50, type: "withdrawal" },
    ];
    expect(calculateBalance(valid)).toBe(50);
  });
});