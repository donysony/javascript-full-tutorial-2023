/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10/ 2 % 3 스트링으로 변환해서
 * 반환받고싶다면 어떻게 해야할까?
 */
console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

/**
 * DRY 좋은 코드를 작성하자!
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */
//함수 선언 방법 1
function calculate() {
    console.log((3 * 10 / 2 % 3).toString());
}

// calculate();

//함수 선언 방법 1-1 : 파라미터 받기
function calculate(number) { //parameter
    console.log((number * 10 / 2 % 3).toString());
}

/**
 * 함수에서 입력받는 값에대한 정의를 Parameter라고한다.
 * 
 * 실제 입력하는 값은 argument라고 한다.
*/
calculate(4); // argument  
calculate(5);

// 여러개의 파라미터를 받기
function multiply(x, y) {
    console.log(x * y);
}

multiply(2, 4);
//default parameter, default값이 정해진 경우 y라는 파라미터를 안 넣어주면 default로 계산됨
//함수 선언 방법 1-2 : 파라미터 받기, 디폴트값 설정
function multiply(x, y = 10) {
    console.log(x * y);
}

multiply(2, 4);
multiply(2);

/**
 * 반환받기
 * return 받기
 */
//scope : 함수 안에서 정의한 것들은 함수 안에서만 존재, 함수 외부에서 사용하고 싶을 경우 return키워드 사용
console.log('---------------');
function multiply(x, y) {
    return x * y;
}
const result1 = multiply(2, 4); // 반환값을 받음!
console.log(result1); 

const result2 = multiply(4, 5);
console.log(result2);

/**
 * Arrow 함수  : 화살표처럼 사용
*/
//Arrow 함수 정의
// const multiply2 = () => {
//     
// }
//함수 선언 방법 2 - 1 : 파라미터 여러개
const multiply2 = (x, y) => {
    return x * y;
}
console.log(multiply2(3, 4));
//위의 코드를 -> 간결해진 코드로 작성
const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 5));

//함수 선언 방법 2 - 2 : 파라미터 하나
const multiply4 = x => x * 2; //파라미터가 하나일 경우 ()도 생략 가능
console.log(multiply4(2));

//함수 선언 방법 2 - 3 : 함수가 함수를 호출
const multiply5 = x => y => z => `x: ${x} y: ${y} z:${z}`;
// x파라미터를 받는 함수를 반환 const multiply5 = x =>
// y파라미터를 받는 함수를 반환 const multiply5 = x => y =>
// z파라미터를 받는 함수를 반환 const multiply5 = x => y => z =>

console.log(multiply5(2)(5)(7));
// 위의 함수를 풀어 쓴 경우
function multiply6(x) { //multiply6(x)가 y라는 파라미터를 받는 함수를 반환
    return function (y) { // z라는 파라미터를 받는 함수를 반환
        return function (z) {
            return `x: ${x} y: ${y} z:${z}` //마지막은 템플릿 리터럴 반환
        }
    }
}
console.log(multiply6(3)(4)(5));
//함수 선언 방법 3
const multiplyTwo = function (x, y) {
    return x * y;
}
/* const multiplyTwo = (x, y) => { // 위와 동일
    return x * y;
} */
console.log(multiplyTwo(4, 5));

const multiplyThree = function (x, y, z) {
    console.log(arguments); //arguments는 키워드 : 함수 실행시 실제로 입력한 arguments값들을 순서대로 반환받을 수 있다
    return x * y * z;
}

console.log('-----------------');
console.log(multiplyThree(4, 5, 6));

const multiplyAll = function (...arguments) { //원하는 만큼 외부에서 받을 수 있다
    return Object.values(arguments).reduce((a, b) => a * b, 1);
} // arguments에 있는 Object의 key, value값들을 전부 하나씩 곱하여 반환

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// immediately invoked function : 즉시 실행 함수, 정의를 하자마자 바로 실행
(function(x, y){
    console.log(x * y);
})(4, 5)
//정의와 동시에 실행하고 싶다면 괄호()로 묶어준 후, 끝에()를 작성해 실행함
console.log(typeof multiply); //function
console.log(multiply instanceof Object); // 좌측 : 비교하려는 값 , 좌측에 있는 값이 오른쪽과 같은 타입인가? 
//multiply가 Object인가?  : true 왜? 함수는 오브젝트 타입