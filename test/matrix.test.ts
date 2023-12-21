import { getMatrixAvgDiagonal } from "../src/matrix";

describe("Suma de la diagonal de una matriz nxn", () => {
  it("Debería retornar 2 para la matriz [[1, 2, 3], [1, 2, 3], [1, 2, 3]]", () => {
    const matrix = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ];
    const result = getMatrixAvgDiagonal(matrix);
    expect(result).toBe(2);
  });

  it("Debería retornar 3 para la matriz [[3, 3, 3], [3, 3, 3], [3, 3, 3]]", () => {
    const matrix = [
      [3, 3, 3],
      [3, 3, 3],
      [3, 3, 3],
    ];
    const result = getMatrixAvgDiagonal(matrix);
    expect(result).toBe(3);
  });

  it("Debería retornar 2.5 para la matriz [[1, 2], [3, 4]]", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const result = getMatrixAvgDiagonal(matrix);
    expect(result).toBe(2.5);
  });

  it("Debería retornar 4.5 para la matriz [[1, 2, 3, 4], [2, 3, 3, 2], [1, 2, 5, 4], [3, 3, 3, 9]]", () => {
    const matrix = [
      [1, 2, 3, 4],
      [2, 3, 3, 2],
      [1, 2, 5, 4],
      [3, 3, 3, 9],
    ];
    const result = getMatrixAvgDiagonal(matrix);
    expect(result).toBe(4.5);
  });

  it("Debería retornar 1 para la matriz [[1]]", () => {
    const matrix = [[1]];
    const result = getMatrixAvgDiagonal(matrix);
    expect(result).toBe(1);
  });
  
  it("Debería retornar 0 si la matriz está vacía i.e. []", () => {
    const matrix = [] as number[][];
    const result = getMatrixAvgDiagonal(matrix);
    expect(result).toBe(0);
  });

  it("Debería retornar 0 si la matriz no es nxn", () => {
    const matrix = [[1, 2], [1, 2], [1, 2]];
    const result = getMatrixAvgDiagonal(matrix);
    expect(result).toBe(0);
  });
});
