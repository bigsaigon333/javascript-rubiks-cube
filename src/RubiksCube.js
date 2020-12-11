import RubiksCubeFace from "./RubiksCubeFace.js";

export default class RubiksCube {
  constructor() {
    this.faces = {
      U: new RubiksCubeFace("W"),
      D: new RubiksCubeFace("B"),
      L: new RubiksCubeFace("G"),
      R: new RubiksCubeFace("Y"),
      F: new RubiksCubeFace("O"),
      B: new RubiksCubeFace("R")
    };
  }

  // eslint-disable-next-line max-lines-per-function
  printCurrentState() {
    const { U, L, F, R, B, D } = this.faces;
    const ROW_STRING_LENGTH = U.getRow(0).join(" ").length;
    const SPACE_BETWEEN_FACES = " ".repeat(ROW_STRING_LENGTH);

    // Top Section
    this.printFaceAtCenter(U);
    console.log("");

    // Middle Section
    for (let ri = 0; ri < 3; ri++) {
      const line = [L, F, R, B].map(face => face.getRow(ri).join(" ")).join(SPACE_BETWEEN_FACES);
      console.log(line);      
    }
    console.log("");

    // Bottom Section
    this.printFaceAtCenter(D);
    console.log("");
  }

  printFaceAtCenter(face) {
    face.getArray().map(row => row.join(" "))
      .map(rowString => rowString.padStart(rowString.length * 4, " "))
      .forEach(text => console.log(text));
  }

  executeAlongCommand(command) {
    //TODO: 각 명령어에 해당하는 동작을 실행
  }
}