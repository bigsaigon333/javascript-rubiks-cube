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
    return colorArray => {
      colorArray.forEach((color, rowIndex) => this.face[rowIndex][col] = color);
    };
  }

  setRow(row) {
    return colorArray => {
      colorArray.forEach((color, colIndex) => this.face[row][colIndex] = color);
    };
  }

  getColumn(col) {
    return () => this.face.map(row => row[col]);
  }

  getRow(row) {
    return () => [...this.face[row]];
  }

  getArray() {
    return JSON.parse(JSON.stringify(this.face));
  }

  rotate(isClockwise) {
    const colorArray = this.adjacentGetter.map(getter => getter());
    const nextColorArray = isClockwise ? this.unshift(colorArray) : this.shift(colorArray);

    this.adjacentSetter.forEach((setter, index) => setter(nextColorArray[index]));
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