export default class RubiksCubeFace {
  constructor(initialColor) {
    this.face = [
      [initialColor, initialColor, initialColor],
      [initialColor, initialColor, initialColor],
      [initialColor, initialColor, initialColor]
    ];
  }

  toString() {
    return this.matrix.map(col => col.join(" ")).join("\n");
  }

  setColumn(row, dataArray) {
    dataArray.forEach((data, colIndex) => {
      this.face[row][colIndex] = data;
    });
  }

  setRow(col, dataArray) {
    dataArray.forEach((data, colIndex) => {
      this.face[colIndex][col] = data;
    });
  }

  getColumn(col) {
    return this.face.map(row => row.find((data, colIndex) => colIndex === col));
  }

  getRow(row) {
    return [...this.face[row]];
  }
}