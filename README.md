# 루빅스 큐브 구현하기

**주의사항**: ECMAScript module 시스템을 사용하기 위하여는 nodejs 버젼 14.15.1 (LTS) 이상이 필요합니다. <br>
nodejs 버젼 14.15.1(LTS) 이상이 설치되어 있지 않은 환경에서는 이 프로그램이 설치 및 실행이 되지 않습니다.

## 3단계: 루빅스 큐브 구현하기

### 구현할 기능 목록
- [x] 루빅스 큐브의 한 면(face)을 나타내는 클래스를 정의한다.
  - [x] 루빅스 큐브의 한 면은 3x3의 배열으로 구성되어 있다.
  - [x] 루빅스 큐브의 한 면을 문자열으로 변환하는 함수를 구현한다.
  - [x] 각 열과 행을 반환하는 함수를 구현한다.
  - [x] 각 열과 행을 값을 나타내는 배열을 인자로 전달받아 해당 열과 행의 값을 설정하는 함수를 구현한다.
- [x] 루빅스 큐브를 나타내는 클래스를 정의한다.
  - [x] 루빅스 큐브는 3x3의 6면(face)을 가진다. (`F: Front`, `B: Back`, `U: Up`, `D: Down`, `L: Left`, `R: Right`)
  - [x] 루빅스 큐브의 6면을 문자열으로 변환하는 함수를 구현한다.
  - [x] 루빅스 큐브 6면의 현재 상태를 출력하는 함수를 구현한다.
    - ※ 참고: 단면도는 [루빅 큐브 맞추기](https://rubiks-cube-solver.com/ko/) 의 Flat view 방식을 따른다.
  
- [x] 처음 시작하면 루빅스 큐브의 6면을 펼친 초기 상태를 출력한다.
- [x] 간단한 프롬프트 (CUBE>)를 표시한 후 사용자로부터 입력을 받을 수 있게 한다.
- [x] 사용자로부터 입력을 받는다.
  - [x] 입력받은 문자가 정해진 동작에 대한 문자가 아닌 경우, 무시한다.
    - ※ 유효한 문자들
      <pre>
       F  F2  F'  F'2
       R  R2  R'  R'2
       U  U2  U'  U'2
       B  B2  B'  B'2
       L  L2  L'  L'2
       D  D2  D'  D'2
       Q(프로그램 종료)
       S(큐브를 무작위로 섞기)
      </pre>
  - [x] 입력받은 문자가 `Q`인 경우, 경과시간 및 조작갯수를 출력하고 프로그램을 종료한다.
    - [x] 경과시간 출력
    - [x] 조작갯수 출력
  - [x] 입력이 여러 문자일 경우, 순서대로 처리할 수 있게끔 각 명령어를 분리하여 화면에 출력한다.
    - [x] 입력이 여러 문자이며 그 중 문자가 'Q'가 포함되어 있는 경우, Q 이후에 입력된 문자는 무시된다.
    - [x] 각 명령어에 해당하는 동작을 구현한다.
  - [x] 입력받은 문자가 `S`인 경우, 큐브를 무작위로 섞는다.
    - [x] 무작위로 섞은 후, 루빅스 큐브 6면의 현재 상태를 출력한다.
  - [ ] 모든 면을 맞추면 축하 메시지와 함께 프로그램을 자동으로 종료한다.
