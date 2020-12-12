const rotationCommandsList = ["F'","F","B'","B","U'","U","D'","D","L'","L","R'","R"];

const getRandomInteger = (begin, end) => {
  return Math.floor((Math.random() * (end - begin)) + begin, 0);
};

export const getRandomRotationCommand = () => {
  const randomIndex = getRandomInteger(0, rotationCommandsList.length);
  
  return rotationCommandsList[randomIndex];
};