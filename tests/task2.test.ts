import { describe, it, expect } from "vitest";
import { isTransaction, processTransaction } from "../src/task2-predicate";

describe("Task 2: Type Predicates", () => {
  it("isTransaction возвращает true для валидных данных", () => {
    expect(isTransaction({ id: "1", amount: 100, type: "deposit" })).toBe(true);
  });

  it("isTransaction возвращает false для невалидных данных", () => {
    expect(isTransaction(null)).toBe(false);
    expect(isTransaction({ id: "1" })).toBe(false); // нет полей
    expect(isTransaction({ id: "1", amount: "100", type: "deposit" })).toBe(false); // amount не число
  });

  it("processTransaction обрабатывает транзакции", () => {
    expect(processTransaction({ id: "1", amount: 500, type: "withdrawal" }))
      .toBe("Обработана транзакция на сумму 500");
  });

  it("processTransaction отклоняет мусор", () => {
    expect(processTransaction("строка")).toBe("Неизвестные данные");
    expect(processTransaction({ foo: "bar" })).toBe("Неизвестные данные");
  });
});