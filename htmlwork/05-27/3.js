'use strict'
//객체 : {} , JSON형식 : "{}"
//배열 : [] (객체)

function add(a,b){
    return a+b;
}

let copyadd=add;
console.log(copyadd(10,20)); //30

//함수명=변수명처럼 사용, 함수이름은 주소 또는 위치

let minus=(a,b)=>{return a-b;}
console.log(minus(20,10));//10

minus=function(a,b){
    return a-b;
}
console.log(minus(20,10));//10

minus=function minus2(a,b){
    return a-b;
}
console.log(minus(30,10));//20

let fff;
let ff;
let f;

fff=ff=f=minus;
console.log(fff(1,2)); //-1
console.log(ff(3,6)); //-3
console.log(f(4,8)); //-4

//배열을 선언하는 방법(객체)
let arr=[];
console.log(typeof arr); //object
console.log(arr); //[]

let arr2=new Array();
console.log(typeof arr2); //object
console.log(arr2); //[]

//객체를 선언하는 방법(객체)
let obj={};
console.log(typeof obj); //object
console.log(obj); //{}

let obj2=new Object();
console.log(typeof obj2); //object
console.log(obj2); //{}

//배열객체와 객체를 구별하는 방법, isArray : 배열이 맞는지 확인
console.log(Array.isArray(arr)); //true
console.log(Array.isArray(obj)); //false

//배열에 값을 입력하기, 배열은 스택
arr=["banana","apple"];
console.log(arr); //['banana','apple']
arr.push("melon");
console.log(arr); //['banana','apple', 'melon']
console.log(arr.pop()); //melon
console.log(arr); //['banana','apple']

arr2=new Array(1,2,3,4);
console.log(arr2); //[1, 2, 3, 4]

arr2=new Array(1,2,"3","4");
console.log(arr2); //[1, 2, '3', '4']

let arr3=[];
let insa='hello';
console.log(insa); //hello
arr3=insa;
console.log(arr3); //hello
arr3=[...insa]; //[...문자열변수] : 배열로 분리
console.log(arr3); //['h', 'e', 'l', 'l', 'o']

let arr4=insa.split(); //space로 분리
console.log(arr4); //['hello']  분리할게 없을 경우 단일 배열

arr4=insa.split(""); //한문자씩 분리
console.log(arr4); //['h', 'e', 'l', 'l', 'o']   문자열 한글자씩 분리

let arr5=["banana","apple","melon"];
let arr6=['banana','apple','melon'];
let arr7="['banana','apple','melon']";
console.log(Array.isArray(arr5)); //true
console.log(arr5); 
console.log(Array.isArray(arr6)); //true
console.log(arr6); 
console.log(Array.isArray(arr7)); //false
console.log(arr7); 

//Q. 문자열 형태의 배열을 입력받을 경우(arr7)이 데이터를 배열 객체로 변환하시오.
//[]를 제거시키시오.
console.log(arr7.substring(1,arr7.length-1));
arr7=arr7.replace("[","");
arr7=arr7.replace("]","");
console.log(arr7);
arr7=arr7.replaceAll("'","");
console.log(arr7);
console.log(arr7.split(","));

let arr8="['banana','apple','melon']";
let arr9='["banana","apple","melon"]';
console.log(JSON.parse(arr9)); //['banana','apple', 'melon']
//console.log(JSON.parse(arr8)); //"[' ']"는 오류 발생
//즉 json형식은 key와 value를 ""으로 묶어야 가능

let json3="{'name':'hong','age':'23'}"; 
let json4='{"name":"hong","age":"23"}';
let json5="{\"name\":\"hong\",\"age\":\"23\"}"; 
console.log(JSON.parse(json4)); //json3은 오류 발생
console.log(JSON.parse(json5));
//중요사항 : 배열 또는 객체는 ""으로 값을 처리하라.

arr5=["banana","apple","melon"];
//배열을 문자열로 만들경우 join()함수 이용
console.log(arr5.join());//banana,apple,melon   기본이 ,로 문자열 합해짐
console.log(Array.isArray(arr5.join())); //false
console.log(arr5.join("-"));//banana-apple-melon
console.log(arr5.toString());//banana,apple,melon
console.log(JSON.stringify(arr5));//["banana","apple","melon"] -> 문자열로 변환

//객체
let obj5={"name":"kim","age":"20"};
console.log(obj5);

let firstname="park";
let age="23";
let person={"name":firstname,"age":age};
console.log(person);

person.name="ryu";
person.age=30;
console.log(person);

person["age"]=35;
console.log(person);

//for문은 for(초기값;제어값;증가값), forEach, for( in ), for( of )
