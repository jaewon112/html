/**
 * 비구조할당(구조분해)
 */

const student = {
    name: "김재원",
    age: 32,
    address: "부산 동래구",
};

const studentName = student.name;
const studentAge = student.age;
// const { studentName2, studentAge2 } = student;
const { name, age } = student;
const { name: studentName2, age: studentAge2 } = student;
console.log(studentName);
console.log(studentAge);
console.log(studentName2);
console.log(studentAge2);
console.log(name);
console.log(age);

function printStudentInfo({ name, address, age }) {
    console.log(name);
    console.log(address);
    console.log(age);

}
function printStudentInfo({ name, address: addr, age }) {
    console.log(name);
    console.log(addr);
    console.log(age);
}

printStudentInfo(student);

/**객체 구조분해할 때 주의사항
 * - 객체의 속성명이 같으면 변수이름을 바꿔줘야함
 */

const s1 = {
    name: "김재원",
    age: 31,
}
const s2 = {
    name: "김재2",
    age: 32,
}

// const {name, age} = s1;
// const {name, age} = s2;
const {name: n1, age: a1} = s2;
const {name: n2, age: a2} = s2;
console.log('s2:', s2);
// 배열 비구조할당
const numbers = [1, 2, 3, 4, 5];
const [num1, num2, num3] = numbers;
console.log(num1);
console.log(num2);
console.log(num3);

const useState = data => {
    const dataState = {
        data: data,
        setData: d => {
            console.log(d, "데이터 set")
        }
    }
    return [dataState.data, dataState.setData];
};

const [ userData, setUserData ] = useState({username: "test", password: "1234"});
console.log(userData);
setUserData({username: "test2", password: "5678"});