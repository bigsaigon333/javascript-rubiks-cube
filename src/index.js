import readline from "readline";

import RubiksCube from "./RubiksCube.js";

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
  const rCommandsList = /(F'|F|B'|B|U'|U|D'|D|L'|L|R'|R|Q)2?/g;
  const matchedCommands = input.match(rCommandsList);

  return matchedCommands === null ? [] : matchedCommands;
};

const rubiksCube = new RubiksCube();
rubiksCube.printCurrentState();

rl.prompt();

rl.on("line", input => {
  const validCommands = parseValidCommands(input);

  validCommands.forEach(command => {
    console.log(command);

    if (command === "Q") {
      exitProgram();
    }
    rubiksCube.executeAlongCommand(command);
    rubiksCube.printCurrentState();
  });

  rl.prompt();
}); 