import RubiksCubeFace from "./RubiksCubeFace.js";

export default class RubiksCube {
  constructor() {
    this.faces = {
      U: new RubiksCubeFace("B"),
      L: new RubiksCubeFace("W"),
      F: new RubiksCubeFace("O"),
      R: new RubiksCubeFace("G"),
      B: new RubiksCubeFace("Y"),
      D: new RubiksCubeFace("R"),
    };
  }

  // eslint-disable-next-line max-lines-per-function
  printCurrentState() {
    const { U, L, F, R, B, D } = this.faces;

    // Top Section
    this.printFaceAtCenter(U);
    console.log("");

    // Middle Section
    this.printFaces([L, F, R, B]);
    console.log("");

    // Bottom Section
    this.printFaceAtCenter(D);
    console.log("");
  }

  printFaceAtCenter(face) {
    face.getArray().map(row => row.join(" "))
      .map(rowString => rowString.padStart(rowString.length * 3, " "))
      .forEach(text => console.log(text));
  }

  printFaces(faces) {
    const ROW_STRING_LENGTH = 5;
    const SPACE_BETWEEN_FACES = " ".repeat(ROW_STRING_LENGTH);

    for (let ri = 0; ri < 3; ri++) {
      const line = faces.map(face => face.getRow(ri)().join(" ")).join(SPACE_BETWEEN_FACES);
      console.log(line);      
    }
  }

  executeAlongCommand(command) {
    //TODO: 각 명령어에 해당하는 동작을 실행
  }
}