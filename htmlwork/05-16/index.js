/*
let menu=document.getElementsByTagName("li");
console.log(menu);
오류발생
menu.forEach(element => {
    console.log(element);
});
*/

let menu = document.querySelectorAll("li");
console.log(menu);

/*
menu.forEach(function(element){

});
*/


menu.forEach(element => {
    console.log(element)//출력이 안됨
    element.addEventListener("click",()=>{
        console.log(`${element.innerText}.html`)
        //fetch로 가져와서 .then에서 넣어버리는 느낌?
        fetch(`${element.innerText}.html`) 
        .then(resp =>resp.text())  
        .then(result=>{
            let main=document.querySelector("main")
            main.innerHTML=result;
        })
    });
});

/*
menu.forEach(element => {
    console.log(element)//출력이 안됨
    element.addEventListener("click",function{
    });
});
*/