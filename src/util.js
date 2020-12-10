export const hasThreeWords = plainText => plainText.split(" ").length === 3;

export const isValidWord = word => word.match(/^[A-Za-z]+$/);

export const isValidInteger = numberText => {
  const MIN = -100;
  const MAX = 100;
  const number = Number(numberText);

  return !Number.isNaN(number) &&
          Number.isInteger(number) &&
          (MIN <= number && number < MAX);
};

export const isValidLorR = LorR => LorR.match(/^[LR]$/i);

export const isValidUserInput = plainText => {
  const [word, numberText,LorR] = plainText.split(" ");

  return hasThreeWords(plainText) &&
         isValidWord(word) &&
         isValidInteger(numberText) &&
         isValidLorR(LorR); 
};

export const obtainModulo = (a, n) => ((a % n) + n) % n;

export const rotateWord = (word, integer, LorR) => {
  const MINUS_SIGN = -1;
  const PLUS_SIGN = 1;

  const sign = LorR.match(/^R$/i) ? MINUS_SIGN : PLUS_SIGN;
  const index = obtainModulo(sign * integer, word.length);

  return word.slice(index,) + word.slice(0, index);
};