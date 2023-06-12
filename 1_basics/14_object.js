/**
 * Object / 객체 중요⭐️⭐️⭐️⭐️⭐️
 */

// key : value pair
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function () { //오브젝트 안에 함수 정의 : 메서드
        return `${this.name}이 춤을 춥니다.`;
    }
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';

console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey]: nameValue, // key에다 변수를 집어넣을 땐 []사용  
    [groupKey]: groupValue,
    dance: function(){
        return `${this.name}이 춤을 춥니다.`;//this:현재객체
    }
}
console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '코드팩토리';
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin'; // 존재하지 않는 key값을 넣을 경우
console.log(yuJin2); //새로 생성된다

delete yuJin2['englishName'];
console.log(yuJin2);

/**
 * const로 선언한 객체의 특징
 * 
 * 1) const로 선언할경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */
const wonYoung = {
    name: '장원영',
    group: '아이브',
}
console.log(wonYoung);

// wonYoung = {}; //새로운 객체로 변경 불가능 const로 선언했으므로 1)설명

wonYoung['group'] = '코드팩토리'; //2)의 설명
console.log(wonYoung);

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(wonYoung)); //Object는 대문자로, key값들만

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(wonYoung)); //value값들만

const name = '안유진';
//새로 생긴 문법
const yuJin3 = {
    name: name, //name의 키값과 변수의 value값이 같을 경우 [동일]
    name,// 하나로 선언할 수 있음 [동일]
};
console.log(yuJin3);