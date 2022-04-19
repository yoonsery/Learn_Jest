# Unit test & TDD

<details>

<summary> List</summary>

1. Test

   - 1. What is "Testing"?
   - 2. When "Software Test"?
   - 3. Why "Software Test"?
   - 4. Test Pyramid
   - 5. TDD
   - 6. Test in CI/CD

2. Unit Test

   - 단위 테스트 작성법
   - 테스트를 통한 코드 개선법

3. Test Principles

   - 좋은 테스트 코드를 위한 여러가지 원칙들

4. TDD 실전연습

</details>

## 테스트란?

#### 소프트웨어 테스트: 제품(함수, 특정 기능, UI, 성능, API스펙...)이 예상대로 동작하는지 확인하고 검증하는 단계

플랫폼, 목표, 환경에 따라 다양한 테스트가 존재한다  
Contract Test, A/B Test, Stress Test...

#### 개발하면서 자동으로 테스트를 작성하도록 개선됨, Automated QA 장점:

- 자동화로 빨라진 속도
- 개발하면서 테스트를 작성하기 때문에 쉽게 작성할 수 있다
- 해당 기능에 대한 테스트를 작성하므로 높은 커버리지를 기대할 수 있다 (꼼꼼히 작성하므로 많은 양의 코드들을 다 커버할 수 있다)

### 테스트를 하는 이유, 장점

1. 기능이 정상적으로 동작하는지 확인할 수 있다
2. 요구사항을 만족할 수 있다
3. 이슈에 대해 예측이 가능
4. 버그를 빨리 발견 가능
5. 자신감있게 리팩토링 가능
6. 손쉬운 유지 보수
7. 코드의 품질 향상
8. 코드간 의존성을 낮춤 - 서로 독립적이고 재사용이 가능한 모듈을 작성할 수 있다
9. 좋은 문서화
10. 개발 시간을 절약

### Test Pyramid

1. `E2E (End to end) Test` : UI 테스트, 사용자 테스트
2. `Integration Test` : 통합테스트 - 모듈들, 클래스들 (단위들이 상호작용하는 것을 테스트)
3. `Unit Test` : 단위테스트 - 함수, 모듈, 클래스

#### COST

E2E > Integration > Unit  
운영방식의 비용뿐만 아니라 개발의 효율성 측면에서도 유닛테스트가 저렴하다  
유닛테스트는 오류나 버그를 빨리 캐치해서 즉각적인 해결이 가능함

#### Speed

Unit > Integration > E2E

### TDD: Test-driven Development

개발(코드 작성)전에 테스트 코드를 먼저 작성

`Code Driven Testing`
① (Re)wirte the test ⟶ ② Run Tests ⟶ fail ⟶ ③ Write `only enough` Code  
⟶ ② Run Tests ⟶ success ⟶ ① 로 돌아가 반복 keep going..

`Refactoring`
code driven testing에서 모든 테스트가 성공하면 ④ Check whether all the tests succeed ⟶ succeed  
⟶ ⑤ Refactor some code ⟶ ④ Check the tests ⟶ Some tests fail ⟶ ❺ Update failing test & Correct regressions .. 반복

#### TDD 의 장점

TDD를 하기 위해서는 `요구사항에 대한 분석 및 이해`가 필요하고 이에 따른 `설계`를 한다

- 모든 요구사항(목표)에 대해 점검하고 확인하는 시간을 가질 수 있다
- 사용자 입장에서 코드를 작성할 수 있다 (구현사항보다 인터페이스 위주로 코드를 작성하므로 코드의 퀄리티가 향상된다)
- 시스템 전반적으로 설계가 향상된다
- 개발 집중력이 향상된다 (tick ✔️)

#### TDD를 꼭 해야할까?

`코드리뷰를 요청하기 전 / 메인 리파지토리에 머지하기 전 / 배포되기 전`에 해당하는 테스트 코드를 포함해야한다  
내가 작성(수정)한 코드에 버그가 없음을 / 기존 코드에 나쁜 영향을 주지 않음을 검증할 수 있는 테스트코드를 포함해서 머지해야한다

`좋은 문서화`
코드리뷰시 코드와 함께 해당하는 테스트 코드를 포함하면 코드에 대한 이해도가 높고 문서화의 효과도 있다

TDD를 할 수 있고 하지 않을 수도 있지만 테스트코드는 꼭 작성한다

#### TDD를 할 때는?

- 요구사항이 명확할 때
- 비즈니스 로직일 때
- 협업시 명세서(문서) 역할을 하기 위해서
- 설계에 대한 고민이 필요할 때

UI 컴포넌트를 작성할 때는 TDD를 잘 하지 않는 거 같다잉  
(UI에 필요한 비즈니스 로직을 따로 관리)

### CI / CD `CODE ⟶ BUILD ⟶ TEST ⟶ RELEASE ⟶ DEPLOY `

`C`ontinuous `I`ntegration 지속적인 통합

- 코드 변경사항을 주기적으로 빈번하게 머지해야 한다 - 테스트코드를 포함

CI의 장점인 `코드의 퀼리티 향상, 개발 생산성 향상, 용이한 버그수정, 빠른 문제점 발견`은  
테스트 코드가 있다고 가정했을 때의 얘기임

## 테스트의 구조

- Arrange, Given : 반복사용되면 유틸리티 함수로 정의해서 재사용
- Act, When : 의도적으로 실패하기
- Assert, Then : 가장 마지막에, 하나의 테스트안에서 검사하는 게 너무 많다면 분리할 수 있는지 생각해볼 것

## 좋은 테스트의 원칙

FIRST

1. **Fast**:  
   느린 것에 대한 의존성 낮추기 (using mock, stub)

2. **Isolated**:  
   최소한의 유닛으로 검증하기  
   독립적이고, 집중적으로 유지

3. **Repeatable**:  
   실행할 때마다 동일한 결과를 유지  
   환경에 영향을 받지 않도록 작성

4. **Self-Validating**:  
   스스로 결과를 검증하기  
   자동화를 통한 검증단계 (CI / CD)

5. **Timely**:  
   시기적절하게 테스트 코드 작성  
   사용자에게 배포되기 이전에 테스트 코드 작성

## 무엇을 테스트해야 할지 모를 때의 원칙

### 테스트의 범위

`Right-BICEP`:  
 모든 요구 사항이 정상 동작하는지 확인  
 모든 결과가 정확한지 확인

**Boundary conditions**:

- 모든 코너 케이스에 대해 테스트를 하기
- 잘못된 포매스이 인풋, null, 특수문자, 잘못된 이메일, 작은 숫자, 큰 숫자, 중복, 순서가 맞지 않음...
- CORRECT 원칙

**Iverse relationship**:

- 역관계를 적용해서 결과값을 확인
- 일관성을 유지( 덧셈 ⟶ 뺄셈, 추가 ⟶ 제거)

**Cross-check**:

- 다른 수단을 이용해서 결과값이 맞는지 확인
- 추가된 과일 == 전체과일 - 예전의 과일 갯수 | A알고리즘 == B알고리즘

**Error conditions**:

- 불행한 경로에 대해 우아하게 처리하는가?
- 네트워크 에러, 메모리 부족, 데이터베이스 중지...

**Performance characteristics**:

- 성능 확인은 테스트를 통해 정확한 수치로 확인
- 성능 개선의 척도와 확인도 데이터를 통해 확인

## 좋은 테스트의 커버리지 CORRECT

- **Conformance**:  
  특정 포맷을 준수  
  전화번호, 이메일, 아이디, 파일확장자...

- **Ordering**:  
  순서 조건 확인하기  
  순서가 중요한 경우

- **Range**:  
  숫자의 범위  
  제한된 범위보다 작거나 큰 경우

- **Reference**:  
  외부 의존성 유무, 특정한 조건의 유무  
  `~일때, ~가 되어 있을 때, 어떤 특정한 상황/상태일때` 이런 동작을 한다

- **Existence**:  
  값이 존재하지 않을때 어떻게 동작하는지  
  `null`, `undefined`, `''`, `0`

- **Cardinality**:  
  `0 - 1 - N` 법칙에 따라 검증  
  하나도 없을 때, 하나만 있을 때, 여러개가 있을 때

- **Time**:  
  상대, 절대, 동시의 일들  
  순서가 맞지 않은 경우, 소비한 시간, 지역 시간
