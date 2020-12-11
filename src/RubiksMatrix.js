export default class RubiksMatrix {
  constructor() {
    this.matrix = [
      ["R", "R", "W"],
      ["G", "C", "W"],
      ["G", "B", "B"]
    ];
    this.matrixRowLength = this.matrix.length;
    this.matrixColumnLength = this.matrix[0].length;

  }

  printCurrentState() {
    console.log(`${this.toString()}\n`);
  }

  toString() {
    return this.matrix.map(col => col.join(" ")).join("\n");
  }
  
  executeAlongCommand(command) {
    if (command === "U" ) this.shiftColumn(0);
    if (command === "U'") this.unshiftColumn(0);
    if (command === "R" ) this.shiftRow(2);
    if (command === "R'") this.unshiftRow(2);
    if (command === "L" ) this.unshiftRow(0);
    if (command === "L'") this.shiftRow(0);
    if (command === "B" ) this.unshiftColumn(2);
    if (command === "B'") this.shiftColumn(2);
  }

  shiftRow(col) {
    let ri = 0;

    while (ri < this.matrixRowLength - 1) {
      this.swap({ row: ri, col }, { row: ri + 1, col });

      ri++;
    }
  }

  unshiftRow(col) {
    let ri = this.matrixRowLength - 1;

    while (ri > 0) {
      this.swap({ row: ri, col }, { row: ri -1, col });
      
      ri--;
    }
  }

  shiftColumn(row) {
    let ci = 0;

    while (ci < this.matrixColumnLength - 1) {
      this.swap({ row, col: ci }, { row, col: ci + 1 });
      
      ci++;
    }
  }

  unshiftColumn(row) {
    let ci = this.matrixColumnLength - 1;
    
    while (ci > 0) {
      this.swap({ row, col: ci }, { row, col: ci - 1 });
      
      ci--;
    }
  }

  swap({ row: rowA, col: colA }, { row: rowB, col: colB }) {
    [
      this.matrix[rowA][colA],
      this.matrix[rowB][colB]
    ] =
      [
        this.matrix[rowB][colB],
        this.matrix[rowA][colA]
      ];
  }
}