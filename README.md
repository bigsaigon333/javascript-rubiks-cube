# 루빅스 큐브 구현

## 1단계: 단어 밀어내기 구현하기

### 구현할 기능 목록
- [x] 사용자로부터 입력을 받는다.
  - [x] 입력은 `단어 하나, 정수 숫자 하나(-100 <= N < 100), L 또는 R(대소문자 모두 가능)`로 구성되어 있어야 한다.
    - [x] `단어 하나`는 알파벳으로만 이루어져 있다.
  - [x] 유효하지 않은 입력일 경우, 경고 메세지를 출력한 후 프로그램을 종료한다.
  - [x] 유효한 입력인 경우
    - [x] 주어진 단어를 L이면 주어진 숫자 갯수만큼 왼쪽으로, R이면 오른쪽으로 밀어낸다.
    - [x] 밀려나간 단어는 반대쪽으로 채워진다.