import { isArmstrongNumber } from "../src/armstrong";

describe("Números de Armstrong", () => {
  it("Debería retornar true para el número 1", () => {
    const result = isArmstrongNumber(1);
    expect(result).toBe(true);
  });

  it("Debería retornar true para el número 153", () => {
    const result = isArmstrongNumber(153);
    expect(result).toBe(true);
  });

  it("Debería retornar true para el número 370", () => {
    const result = isArmstrongNumber(370);
    expect(result).toBe(true);
  });

  it("Debería retornar true para el número 8208", () => {
    const result = isArmstrongNumber(8208);
    expect(result).toBe(true);
  });

  it("Debería retornar true para el número 4210818", () => {
    const result = isArmstrongNumber(4210818);
    expect(result).toBe(true);
  });

  it("Debería retornar false para el número 123", () => {
    const result = isArmstrongNumber(123);
    expect(result).toBe(false);
  });

  it("Debería retornar false para el número 666", () => {
    const result = isArmstrongNumber(123);
    expect(result).toBe(false);
  });
});
