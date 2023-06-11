/**
 * Loops
 * 
 * 1) for
 * 2) while
 */
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('------------');

for (let i = 10; i > 0; i--) {
    console.log(i);
}

console.log('------------');

for (let i = 0; i < 3; i++) {
    for (let j = 3; j > 0; j--) {
        console.log(i, j);
    }
}
console.log('--------test----');

// *을 이용해서 6x6의 정사각형를 출력해라
let square = '';
let side = 6;

for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++) {
        square += '*';
    }
    square += '\n';
}

console.log(square);

/**
 * for...in
 */
const yuJin = {
    name: '안유진',
    year: 2003,
    group: '아이브',
}

console.log('------------');

for (let key in yuJin) { // object에서는 key값을 받을 수 있다
    console.log(key);
}
//array에서는 for loop하면 인덱스값을 받을 수 있다 : 인덱스를 가져오고 싶을 때
const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

console.log('------------');

for (let key in iveMembersArray) {
    console.log(key);
    console.log(`${key}:${iveMembersArray[key]}`);
}

/**
 * for...of    --- array에서 사용할 수 있다 : 값을 가져오고 싶을 때
 */
for (let value of iveMembersArray) {
    console.log(value);
}

/**
 * While : 조건을 먼저 판단, true면 코드 실행
 */
let number = 0;

while (number < 10) {
    number++;
}

console.log(number);

/**
 * do...while : 먼저 코드 실행 후 , 조건을 판단
 */
number = 0;

do {
    number++;
} while (number < 10);

console.log(number);

/**
 * break
 */
console.log('--------------');
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

console.log('-------------');
number = 0;

while(number < 10){
    if(number === 5){
        break;
    }

    number ++;
    console.log(number);
}

/**
 * continue
 */
console.log('---------------');
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}


console.log('----------------');
number = 0;

while(number < 10){
    number ++;

    if(number === 5){
        continue;
    }

    console.log(number);
}