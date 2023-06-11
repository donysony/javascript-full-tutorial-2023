/**
 * Hoisting
 */
console.log('Hello');
console.log('World');
console.log('----------');

// console.log(name);
// var name = '코드팩토리';
// console.log(name);

/**
 * Hoisting은 무엇인가? - js에만 있는 특징
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */
// var name;
// console.log(name);
// name = '코드팩토리';
// console.log(name);

console.log(yuJin);
const yuJin = '안유진';
//선언하고서 값이 초기화 되기 전에, 값을 미리 가져오는 버그를 막아줄 수 있는것이 let, const