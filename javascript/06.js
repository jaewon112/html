/**
 * 단축 평가 논리 연산
 */
const name = '김재1';

// &&연산 -> 앞쪽 값이 true 일 때 뒤의 값을 리턴함 , false 이면 false를 리턴
console.log(name && '김재2');
console.log(!!name && !!'김재2');
console.log(true && name);


// || 연산 -> 앞의 값이 false일 때 뒤의 값을 리턴 , true일 때 true 리턴
console.log('---------------or연산---------------');
console.log(true || false);
console.log(true || 10);
console.log(false || 10);
console.log(false || 'ㅇ');

//nullish 병합연산
// ?? 연산 -> 앞의 값이 null 또는 undefined 가 아니면 앞의 값, 그 외에는 뒤의 값
console.log('---------------??연산---------------');
console.log(null ?? 100);
console.log(undefined ?? 100);
console.log(20 ?? 100);