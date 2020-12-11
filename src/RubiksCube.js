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
}