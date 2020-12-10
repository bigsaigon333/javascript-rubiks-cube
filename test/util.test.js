/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import {
  hasThreeWords,
  isValidInteger,
  isValidLorR,
  isValidUserInput,
  isValidWord,
  obtainModulo,
  rotateWord
} from "../src/util.js";


describe("1단계: 단어 밀어내기 구현하기", () => {
  test("사용자의 입력은 스페이스(` `)로 구별되는 3개의 문자열으로 구성되어 있다.",
    () => {
      expect(hasThreeWords("ab cd ef")).toBeTruthy();

      expect(hasThreeWords("ab cd")).toBeFalsy();
    });
  
  test("사용자의 입력 중 첫번째 문자열(`단어 하나`)는 알파벳으로만 이루어져 있어야 한다.", () => {
    expect(isValidWord("apple")).toBeTruthy();
    
    expect(isValidWord("a3ple")).toBeFalsy();
    expect(isValidWord("a*p/e")).toBeFalsy();
  });

  test("사용자의 입력 중 두번째 문자열(`정수 숫자 하나`)는 -100 이상 100 미만이어야 한다.", () => {
    expect(isValidInteger(3)).toBeTruthy();
    expect(isValidInteger(-50)).toBeTruthy();
    
    expect(isValidInteger(-101)).toBeFalsy();
    expect(isValidInteger(100)).toBeFalsy();
    expect(isValidInteger(0.5)).toBeFalsy();
  });
  
  test("사용자의 입력 중 세번째 문자열은 `l`, `L`, `R`,`r` 중 하나이다.", () => {
    expect(isValidLorR("l")).toBeTruthy();
    expect(isValidLorR("L")).toBeTruthy();
    expect(isValidLorR("R")).toBeTruthy();
    expect(isValidLorR("r")).toBeTruthy();
    
    expect(isValidLorR("lL")).toBeFalsy();
    expect(isValidLorR("R3")).toBeFalsy();
  });

  test("사용자의 입력은 `단어 하나, 정수 숫자 하나(-100 <= N < 100), L 또는 R(대소문자 모두 가능)`로 구성되어 있어야 한다.", () => {
    expect(isValidUserInput("apple 3 L")).toBeTruthy();
    expect(isValidUserInput("banana 6 R")).toBeTruthy();
    expect(isValidUserInput("carrot -1 r")).toBeTruthy();
    expect(isValidUserInput("cat -4 R")).toBeTruthy();

    expect(isValidUserInput("apple 333 L")).toBeFalsy();
    expect(isValidUserInput("banana *6 R")).toBeFalsy();
    expect(isValidUserInput("carrot -1 rrr")).toBeFalsy();
    expect(isValidUserInput("c4t -4 R")).toBeFalsy();
  });

  test("피제수를 제수로 나눈 나머지를 구한다. 나머지는 항상 양수이다.",
    () => {
      expect(obtainModulo(-3, 4)).toBe(1);
      expect(obtainModulo(10, 7)).toBe(3);
    });
  
  test("사용자의 입력 중 세번째 문자열(L 또는 R)이 L이면 주어진 숫자 갯수만큼 왼쪽으로, R이면 오른쪽으로 밀어낸다. 밀려나간 단어는 반대쪽으로 채워진다.", () => {
    expect(rotateWord("apple", 3, "L")).toBe("leapp");
    expect(rotateWord("banana", 6, "R")).toBe("banana");
    expect(rotateWord("carrot", -1, "r")).toBe("arrotc");
    expect(rotateWord("cat", -4, "R")).toBe("atc");
  });
});

