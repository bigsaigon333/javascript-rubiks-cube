const rotationCommandsList = ["F'", "F", "B'", "B", "U'", "U", "D'", "D", "L'", "L", "R'", "R"];
const fullCommandsList = [...rotationCommandsList, "S", "Q"];

const getRandomInteger = (begin, end) => {
  return Math.floor((Math.random() * (end - begin)) + begin, 0);
};

export const getRandomRotationCommand = () => {
  const randomIndex = getRandomInteger(0, rotationCommandsList.length);
  
  return rotationCommandsList[randomIndex];
};

export const breakUpDoubleCommand = input => {
  return input.replace(/(.'?)2/, "$1$1").match(/(.'?)/g);
};

export const parseValidCommands = input => {
  const rCommandsList = new RegExp(`(${fullCommandsList.join("|")})2?`, "g");
  const matchedCommands = input.match(rCommandsList);

  return matchedCommands === null ? [] : matchedCommands;
};