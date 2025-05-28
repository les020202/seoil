'use strict' //문법적으로 오류 확인
// a=10;
var a=10;
console.log(a);

let b=20;
console.log(b);

{
    console.log(a);
    console.log(b);
    var c=100;
    let d=200;
}
console.log(c);// 오류 X
// console.log(d);// 오류 O

//확인사항 : var는 엄격하지 않고, let은 문법에 엄격
console.log('오류 후 실행이 안됨'); //오류 발생시 다음으로 코드가 넘어가지 않음

const e="한번 선언후 값 변경 불가";
console.log(e);
// e="값을 변경함"; //const 값 변경 시 오류 발생

let f=1;
let g='1';
let h="1";
let i=`1`;
console.log(typeof f); //number
console.log(typeof g); //string
console.log(typeof h); //string
console.log(typeof i); //string

console.log(f==g); //true 
console.log(f===g); //false
console.log(f===parseInt(g)); //true
console.log(String(f)===g); //true
console.log(f.toString()===g); //true
console.log(""+f===g); //true
console.log(`${f}`===g); //true

//문자+숫자는 문자열이 우선한다.
console.log('5+5'); //5+5
console.log('5'+'5'); //55
console.log(5+String(5)); //55
console.log(5+Number('5')); //10
console.log(5+parseInt('5')); //10
console.log(5+parseFloat('3.14')); //8.14

//변수의 값 상태
//undefined : 값이 정의되지 않은 상태
//null : 객체가 생성되지 않은 상태
//NaN(Not a Number) : 잘못된 입력값
var j;
console.log(j); //undefined
j=null;
console.log(j); //null
j=undefined;
console.log(j); //undefined
console.log(0/0); //NaN
console.log(10/0); //infinity 무한대
console.log(isNaN(0/0)); //NaN을 확인하는 함수, true

// let xhttp=new XMLHttpRequest1();
// console.log(xhttp);




