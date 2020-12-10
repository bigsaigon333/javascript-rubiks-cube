import readline from "readline";
import RubiksMatrix from "./RubiksMatrix.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const rubiksMatrix = new RubiksMatrix();
console.log(`${rubiksMatrix.toString()}\n`);

process.stdout.write("CUBE> ");
rl.on("line", input => {
  console.log(`Received: ${input}`); 

  process.stdout.write("CUBE> ");
});