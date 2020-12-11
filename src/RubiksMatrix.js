export default class RubiksMatrix {
  constructor() {
    this.matrix = [
      ["R", "R", "W"],
      ["G", "C", "W"],
      ["G", "B", "B"]
    ];

  }

  printCurrentState() {
    console.log(`${this.toString()}\n`);
  }

  toString() {
    return this.matrix.map(col => col.join(" ")).join("\n");
  }
  
  executeAlongCommand(command) {
    // TODO: 정해진 동작을 실현!
  }
}