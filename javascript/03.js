const student = {
    name: '김재원',
    age: 31,
}

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student['name']);
console.log(student['age']);
const a = 'name';
const b = 'age';

console.log(student[a]);
console.log(student[b]);
student[a] = '김재2';
console.log(student);
student.name = '김재3';
console.log(student);

student.printName = () => console.log('이름:', student.name);
student.printName();
const loginButton = {
    text: "로그인",
    value: "test",
    onclick: () => {
        console.log(loginButton.text);
    },
}
console.log('-----------------');
console.log(loginButton.onclick);
loginButton.onclick();
loginButton.onclick = () => {
    console.log("로그인 버튼을 클릭하였습니다.");
}
loginButton.onclick();
console.log('------------------')
console.log(loginButton.onclick);
console.log(typeof(loginButton));
console.log('-----------------------')
const loginButtonKeys = Object.keys(loginButton);
console.log(loginButtonKeys)
console.log('----------key-------------');
for (let i = 0; i < loginButtonKeys.length; i++) { 
    console.log(loginButtonKeys[i]);
}
console.log('-----------value------------')
const loginButtonValues = Object.values(loginButton);
console.log(loginButtonValues)
console.log('-----------------------')
    for(let i = 0; i < loginButtonValues.length; i++) {
        console.log(loginButtonValues[i]);
    }
console.log('-----------entry------------')

const loginButtonEntries = Object.entries(loginButton);
console.log(loginButtonEntries);
for (let i = 0; i < loginButtonEntries.length; i++) {
    const entry = loginButtonEntries[i];
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value);
}
for (let entry of loginButtonEntries) {
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value);
}

