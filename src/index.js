import readline from "readline";
import RubiksMatrix from "./RubiksMatrix.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "CUBE> "
});

const exitProgram = () => {
  console.log("Bye~");
  rl.close();
  process.exit(0);
};

const parseValidCommands = input => {
  const rCommandsList = /U'|U|R'|R|L'|L|B'|B|Q/g;
  const matchedCommands = input.match(rCommandsList);

  return matchedCommands === null ? [] : matchedCommands;
};

const rubiksMatrix = new RubiksMatrix();
rubiksMatrix.printCurrentState();

rl.prompt();

rl.on("line", input => {
  const validCommands = parseValidCommands(input);
  
  validCommands.forEach(command => {
    console.log(command);
    
    if (command === "Q") {
      exitProgram();
    }
    rubiksMatrix.executeAlongCommand(command);
    rubiksMatrix.printCurrentState();
  });

  rl.prompt();
});