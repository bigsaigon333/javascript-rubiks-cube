/* eslint-disable no-magic-numbers */
import RubiksCubeFace from "./RubiksCubeFace.js";
import { getRandomRotationCommand } from "./util.js";

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

    this.setAdjacentPart();
  }
  
  // eslint-disable-next-line max-lines-per-function
  setAdjacentPart() {
    this.setFAdjacentPart();
    this.setBAdjacentPart();

    this.setUAdjacentPart();
    this.setDAdjacentPart();

    this.setLAdjacentPart();
    this.setRAdjacentPart();
  }

  /*
        U
    L - F - R - B
        D
  */
  setFAdjacentPart() {
    const { F, U, R, D, L } = this.faces;

    F.setAdjacentPartSetter([U.setRow(2), R.setColumn(0), D.setRow(0), L.setColumn(2)]);
    F.setAdjacentPartGetter([U.getRow(2), R.getColumn(0), D.getRow(0), L.getColumn(2)]);
  }
  
  /*
        U
    R - B - L - F
        D
  */
  setBAdjacentPart() {
    const { B, U, L, D, R } = this.faces;

    B.setAdjacentPartSetter([U.setRow(0), L.setColumn(0), D.setRow(2), R.setColumn(2)]);
    B.setAdjacentPartGetter([U.getRow(0), L.getColumn(0), D.getRow(2), R.getColumn(2)]);
  }

  /*
        B
    L - U - R - D
        F
  */
  setUAdjacentPart() {
    const { U, B, R, F, L } = this.faces;

    U.setAdjacentPartSetter([B.setRow(0), R.setRow(0), F.setRow(0), L.setRow(0)]);
    U.setAdjacentPartGetter([B.getRow(0), R.getRow(0), F.getRow(0), L.getRow(0)]);    
  }

  /*
        B
    R - D - L - U
        F
  */
  setDAdjacentPart() {
    const { D, L, R, F, B } = this.faces;

    D.setAdjacentPartSetter([B.setRow(2), L.setRow(2), F.setRow(2), R.setRow(2)]);
    D.setAdjacentPartGetter([B.getRow(2), L.getRow(2), F.getRow(2), R.getRow(2)]);  
  }

  /*
       U
   B - L - F - R
       D
 */
  setLAdjacentPart() {
    const { L, U, F, D, B } = this.faces;

    L.setAdjacentPartSetter([U.setColumn(0), F.setColumn(0), D.setColumn(0), B.setColumn(2)]);
    L.setAdjacentPartGetter([U.getColumn(0), F.getColumn(0), D.getColumn(0), B.getColumn(2)]);
  }

  /*
        U
    F - R - B - L
        D
  */
  setRAdjacentPart() {
    const { R, U, B, D, F } = this.faces;

    R.setAdjacentPartSetter([U.setColumn(2), B.setColumn(0), D.setColumn(2), F.setColumn(2)]);
    R.setAdjacentPartGetter([U.getColumn(2), B.getColumn(0), D.getColumn(2), F.getColumn(2)]);
  }

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

  executeAlongCommand(plainCommand) {
    const { singleCommand, isClockwise } = this.parseCommand(plainCommand);

    if (singleCommand === "S") {
      this.scrambleCube();
    } else {
      this.executeRotationCommand({ singleCommand, isClockwise });
    }
  }

  parseCommand(plainCommand) {
    const [singleCommand] = plainCommand.split("");
    const isClockwise = !plainCommand.includes("'");
    
    return { singleCommand, isClockwise };
  }

  scrambleCube() {
    const NUM_RANDOM_ROTATION_COMMAND = 100;
    
    for (let i = 0; i < NUM_RANDOM_ROTATION_COMMAND; i++) {
      const randomRotationCommand = getRandomRotationCommand();
      this.executeRotationCommand(this.parseCommand(randomRotationCommand));
    }
  }

  executeRotationCommand({ singleCommand, isClockwise }) {
    this.faces[singleCommand].rotate(isClockwise);
  }
}