import readline from "readline";

import RubiksCube from "./RubiksCube.js";
import { parseValidCommands, breakUpDoubleCommand } from "./util.js";

class App {
  constructor() {
    this.initializeVarialbes();
  
    this.rubiksCube.printCurrentState();

    this.rl.prompt();
    this.listenOnLine();
  }

  initializeVarialbes() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "CUBE> "
    });

    this.hrstart = process.hrtime();
    this.countExecutedCommands = 0;
    this.rubiksCube = new RubiksCube();
  }

  listenOnLine() {
    this.rl.on("line", input => {
      parseValidCommands(input).forEach(command => {
        console.log("");
        console.log(command);
    
        breakUpDoubleCommand(command).forEach(singleCommand => this.launchSingleCommand(singleCommand));
        this.rubiksCube.printCurrentState();
      });
    
      this.rl.prompt();
    }); 
  }

  launchSingleCommand(singleCommand) {
    if (singleCommand === "Q") {
      this.exitProgram();
    }

    this.rubiksCube.executeAlongCommand(singleCommand);
    this.countExecutedCommands++;
  }

  exitProgram() {
    const executionTimeSec = process.hrtime(this.hrstart);
    console.log(`경과시간: ${executionTimeSec}s`);
    console.log(`조작갯수: ${this.countExecutedCommands}`);
    console.log("이용해주셔서 감사합니다. 뚜뚜뚜.");
    
    this.rl.close();
    process.exit(0);
  }
}

new App();