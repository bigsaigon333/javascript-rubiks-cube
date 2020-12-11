export default class RubiksCubeFace {
  constructor(initialColor) {
    this.face = [
      [initialColor, initialColor, initialColor],
      [initialColor, initialColor, initialColor],
      [initialColor, initialColor, initialColor]
    ];
  }

  toString() {
    return this.face.map(col => col.join(" ")).join("\n");
  }

  setColumn(col) {
    return dataArray => {
      dataArray.forEach((data, rowIndex) => this.face[rowIndex][col] = data);
    };
  }

  setRow(row) {
    return dataArray => {
      dataArray.forEach((data, colIndex) => this.face[row][colIndex] = data);
    };
  }

  getColumn(col) {
    return () => this.face.map(row => row.find((data, colIndex) => colIndex === col));
  }

  getRow(row) {
    return () => [...this.face[row]];
  }

  getArray() {
    return JSON.parse(JSON.stringify(this.face));
  }

  rotate(isClockwise) {
    const data = this.adjacentGetter.map(getter => getter());
    const nextData = isClockwise ? this.unshift(data) : this.shift(data);

    this.adjacentSetter.map((setter, index) => setter(nextData[index]));
  }

  shift(array) {
    const [first, ...rest] = array;

    return [...rest, first];
  }

  unshift(array) {
    const [last] = array.slice(-1);
    const rest = array.slice(0, -1);

    return [last, ...rest];
  }

  setAdjacentPartSetter(setterArray) {
    this.adjacentSetter = setterArray;
  }

  setAdjacentPartGetter(getterArray) {
    this.adjacentGetter = getterArray;
  }
}