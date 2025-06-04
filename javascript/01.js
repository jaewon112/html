let name = '김재원';
console.log('hello js');
console.log(name);
name = '김재2'
console.log(name);
const age = 32;
console.log(age);
// age = 33;
// console.log(age);

/** 연산자 */
let data1 = 10;
let data2 = '10';
let result = data1 == data2;
console.log(result);
let result2 = data1 === data2;
console.log(result2);
// typeof() -> () 안의 변수의 타입을 알고싶을때 사용 
console.log(typeof(data1), typeof(data2));

/* 
    not연산 활용법 (!를 쓰면 boolean 자료형으로 변환된다.)
    !! 는 !의 반대값
*/
console.log(!1);
console.log(!0);
console.log(!"a");
console.log(!"");
console.log(!null);
console.log(!!null);

let data = {
    name : "김재원",
    age : 31
}



if (!data){
    console.log("사용자 정보가 없습니다.");
}else if (data.name === "김재2") {
    console.log("사용자이름이 일치합니다.");
}else if (data.age === 31) {
    console.log("사용자이름은 일치하지 않지만 나이는 일치합니다.");
}else {
    console.log("사용자가 일치하지 않습니다.");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

