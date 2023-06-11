/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적
let test = age + '';
console.log(typeof test, test);
// js에는 기괴한 현상들이 많기 때문에 사람이 봐서 헷갈리지 않도록 작성하는 것에 주의를 기울어야 한다
console.log('98' + '2'); //string에는 문자열을 합치기 가능
console.log(98 * 2); // string에는 * 없음 -> 곱셈실행
console.log('98' - 2); // string에는 - 없음 -> 빼기 실행

console.log('------------');
/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString()); // string으로 변환
console.log(typeof (true).toString(), (true).toString()); // string으로 변환
console.log(typeof (Infinity).toString(), (Infinity).toString()); // string으로 변환

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0.99')); //정수까지만 변환
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); //실수
console.log(typeof +'1', +'1');

console.log('-------------------_');
/**
 * Boolean 타입으로의 변환
 */
console.log(!!'asdkfjhalksdfjasdfx'); //string값 안에 값이 들어있으면 boolean기준 true

console.log(!!''); // 값이 없다면 false
// 값이 없거나 실제 숫자 0 -> false
console.log(!!0); //false
console.log(!!'0'); //true
console.log(!!'false');
console.log(!!false); //false
console.log(!!undefined); //false
console.log(!!null); //false
//object는 boolean으로 변환했을 때 무조건 true
console.log(!!{});
console.log(!![]);

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false를 반환한다.
 */