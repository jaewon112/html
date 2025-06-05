const student = {
    name: '김재원',
    age: 32,
    address: '부산 동래구',
    phone: '010-0000-0000',
}

//비구조 할당
const { name, address } = student;
console.log(name,address);

// REST 문법
// const { age, phone, ...rest } = student;
// console.log(age, phone, rest);
const { age, phone, ...a } = student;
console.log(age, phone, a);

const numbers = [1, 2, 3, 4];
const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns);

// 객체 spread
const newStudent = {
    ...student,
    gender: '남',
};

console.log(newStudent);

// 배열 spread
const newNumbers = [...numbers, 5, 6, 7];
console.log(newNumbers);

let names = [];

function addName(name) {
    names.push(name);
}
function addName(name) {
    names = [...names, name];
}

const obj = {
    data1: "data1",
    data2: "data2",
}

function addProps(props) {
    obj1 = {
        ...obj,
        ...props
    }
}

addProps({data3: "data3", data4: "data4"});
console.log(obj1);