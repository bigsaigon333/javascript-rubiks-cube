export default class RubiksMatrix {
  constructor() {
    this.matrix = [
      ["R", "R", "W"],
      ["G", "C", "W"],
      ["G", "B", "B"]
    ];

  }

  toString() {
    return this.matrix.map(col => col.join(" ")).join("\n");
  }
  
}