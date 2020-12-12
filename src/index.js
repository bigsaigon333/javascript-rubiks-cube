import readline from "readline";

import RubiksCube from "./RubiksCube.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "CUBE> "
});

const exitProgram = (hrstart, countExecutedCommands) => {
  const hrend = process.hrtime(hrstart);

  console.log(`경과시간: ${hrend}s`);
  console.log(`조작갯수: ${countExecutedCommands}`);
  console.log("이용해주셔서 감사합니다. 뚜뚜뚜.");
  
  rl.close();
  process.exit(0);
};

const parseValidCommands = input => {
  const rCommandsList = /(F'|F|B'|B|U'|U|D'|D|L'|L|R'|R|Q|S)2?/g;
  const matchedCommands = input.match(rCommandsList);

  return matchedCommands === null ? [] : matchedCommands;
};

const hrstart = process.hrtime();

const rubiksCube = new RubiksCube();
rubiksCube.printCurrentState();

rl.prompt();

rl.on("line", input => {
  parseValidCommands(input).forEach(command => {
    console.log("");
    console.log(command);

    if (command === "Q") {
      exitProgram(hrstart, rubiksCube.getCountExecutedCommands());
    }
    rubiksCube.executeAlongCommand(command);
    rubiksCube.printCurrentState();
  });

  rl.prompt();
}); 