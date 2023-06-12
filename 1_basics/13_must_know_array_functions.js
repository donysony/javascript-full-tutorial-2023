/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push()
console.log(iveMembers.push('코드팩토리')); // array에 추가, //직접적으로 변경
console.log(iveMembers); //리턴값 존재 : 7, 반환값: 배열의 길이

console.log('---------------_');
// pop()
console.log(iveMembers.pop()); //파라미터 필요없음, 마지막 요소 반환
console.log(iveMembers);

console.log('---------------_');
// shift()
console.log(iveMembers.shift()); // 첫번째 값 삭제
console.log(iveMembers);

// unshift()
console.log(iveMembers.unshift('안유진')); // 첫번째 위치에 추가 = push()와 동일
console.log(iveMembers);

console.log('---------------_');

// splice()
console.log(iveMembers.splice(0, 3))// 어떤 인덱스부터 삭제할지, 몇개를 추출하고 싶은지
console.log(iveMembers);
//초기화
iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// concat()
console.log(iveMembers.concat('코드팩토리')); // 새로운 array를 만들어서 반환
console.log(iveMembers); //원래 배열은 변경없음

// slice()
console.log(iveMembers.slice(0, 3)); // 어떤 인덱스부터, 몇번 인덱스까지 0번부터 2번인덱스까지
console.log(iveMembers); //원래 배열은 변경없음

// spread operator
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2); // 리스트를 펼쳐서 다른 변수에 삽입

let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3); //리스트 안에 리스트


console.log('--------------');
let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers); //true

console.log([
    ...iveMembers,
] === iveMembers); //false

//많이 사용하는 함수들

// join()
console.log(iveMembers.join());// , 기준 스트링으로 반환 - 모든 값들을 합칠 수 있다
console.log(iveMembers.join('/')); // /로 나눈다
console.log(iveMembers.join(', '));// , 로 나눈다

// sort() - 정렬하는 방법
// 오름차순
iveMembers.sort(); // 반환값 없음 : 오름차순
console.log(iveMembers);

console.log(iveMembers.reverse()); // 내림차순

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

// a, b를 비교했을때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환

//걍 외워야하는것! : 정렬을 어떤식으로 할지 지정가능
numbers.sort((a, b) => { // a랑 b를 비교했을 때
    return a > b ? 1 : -1; //1은 3보다 작으니까 -1반환, 1을 보다 먼저 정렬
});
console.log(numbers); //[1,3,5,7,9] 작은게 앞에 정렬

numbers.sort((a, b) => a > b ? -1 : 1);//내림차순
console.log(numbers);

// map() : 모든 값들을 순회하면서 그 각각의 값들을 변형시키는 역할을 함
//map() : 새로운 배열을 반환함
console.log('--------------');
console.log(iveMembers.map((x) => x)); 
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    //map함수는 모든값들을 순회, x에 그 값이 들어감, 반환값으로 대체 
    if (x === '안유진') { //x가 안유진일때만 실행
        return `아이브: ${x}`;
    } else {
        return x;
    }
}));
console.log(iveMembers); //원래의 배열은 변경 x

//요소를 찾는 기능
// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0));//짝수만 필터링, true에 해당되는 값들 모두 반환

// find()
console.log(numbers.find((x) => x % 2 === 0));//true에 해당하는 값 중 가장 첫번째 해당하는 값만

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0)); // 인덱스를 반환

// reduce()
// 첫번째 파라미터 : (p, n) => p + n (콜백함수)
// 두번째 파라미터 : 0 (초기값)
console.log(numbers.reduce((p, n) => p + n, 0));
//numbers.reduce((p, n) => p + n, 0)
//1. 초기값인 0이 p에 입력된다
//2. numbers 어레이의 첫번째 값인 1이 n에 입력된다
//3. p + n 즉, 0+1의 결과값인 1이 반환된다
//4. 3에서 반환한 값 (1)이 p에 입력된다
//5. 어레이의 두번째 값인 8이 n에 입력된다
//6. p+n 즉, 1+8의 결과값인 9가 반환된다
//7. 6에서 반환한 값(9)가 p에 입력된다
//8. numbers리스트의 모든 값들을 다 순회할때까지 반복. 결국 모든 값을 다 더한 25가 반환됨





// reduce() 퀴즈
// reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의
// 길이를 더해서 반환하라.
// 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
console.log(iveMembers.reduce((p, n) => p + n.length, 0))