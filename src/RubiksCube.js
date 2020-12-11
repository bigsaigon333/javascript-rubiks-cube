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

  printCurrentState() {
    // TODO: 루빅스 큐브 6면의 현재 상태를 출력
  }

  executeAlongCommand(command) {
    //TODO: 각 명령어에 해당하는 동작을 실행
  }
}