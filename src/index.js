import readline from "readline";
import {
  isValidUserInput,
  rotateWord
} from "./util.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("> ", input => {
  // console.log(`Received: ${input}`);

  if (isValidUserInput(input)) {
    const [word, integerText, LorR] = input.split(" ");
    const integer = Number(integerText);
    
    console.log(rotateWord(word, integer, LorR));
  } else {
    console.log(`'${input}'은(는) 유효한 입력이 아닙니다.`);
  }
  
  rl.close();
});