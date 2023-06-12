/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 * primitive : Object(배열, 함수)를 제외한 모든 자료형
 */
let original = '안녕하세요';
let clone = original; 

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.'; //값을 그대로 가져옴 : copy by value
console.log('--------------');
console.log(original);
console.log(clone);

let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('----------');

originalObj['group'] = '코드팩토리';
console.log(originalObj); //둘다 group이 코드팩토리로 변경됨
console.log(cloneObj);

console.log(originalObj === cloneObj); // true
console.log(original === clone); //false

originalObj = {
    name: '최지호',
    group: '코드팩토리',
};
cloneObj = {
    name: '최지호',
    group: '코드팩토리',
};
console.log(originalObj === cloneObj);//false

const yuJin1 = {
    name: '안유진',
    group: '아이브',
}
const yuJin2 = yuJin1;
const yuJin3 = {
    name: '안유진',
    group: '아이브',    
}

// true
console.log(yuJin1 === yuJin2);
// false
console.log(yuJin1 === yuJin3);
// false
console.log(yuJin2 === yuJin3);

/**
 * Spread Operator -- 위치가 중요
 */
const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4);//그대로 값이 복사 copy by value

console.log(yuJin4 === yuJin3);

const yuJin5 = {
    year: 2003, //값 추가 가능
    ...yuJin3,
};
console.log(yuJin5);

const yuJin6 = {
    name: '코드팩토리', //순서가 중요
    ...yuJin3,
};
console.log(yuJin6);//변경안됨

const yuJin7 = {
    ...yuJin3,
    name: '코드팩토리',//밑에 다 넣어주면 반영됨
}
console.log(yuJin7);

const numbers = [1, 3, 5];
const numbers2 = [
    ...numbers, //그대로 복사
    10,//뒤에 10추가
];
console.log(numbers2);