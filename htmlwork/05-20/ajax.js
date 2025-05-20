//무료 JSON데이터
/*
https://api.coingecko.com/api/v3/coins/bitcoin
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/comments
*/

//ajax통신(비동기 자바스크립트 통신)


let xhttp=new XMLHttpRequest();//객체만듬
console.log(xhttp);
// xhttp.open("get","https://api.coingecko.com/api/v3/coins/bitcoin");//객체오픈
xhttp.open("get","books.json");
xhttp.send();//보내고
xhttp.onload=function(){//업로드가 될때~
    
    console.log(xhttp.responseText);
    const body=document.querySelector("body");
    console.log(body);
    let books=JSON.parse(xhttp.responseText);//문자열을 객체로 변환
    // body.textContent=books[0].title; // body에 title값 들어감
    
    console.log(typeof books);
    console.log(books.length);

    
    body.innerHTML+="---------기본 반복문 사용---------<br>";
    for(let i=0;i<books.length;i++){
        body.innerHTML+=books[i].title+"<br>";
    }

    body.innerHTML+="---------forEach 반복문 사용---------<br>";
    books.forEach(element => {
        body.innerHTML+=element.title+"<br>";
    });

    body.innerHTML+="---------for in(index==번호) 반복문 사용---------<br>";
    for (const index in books) {
        body.innerHTML+=books[index].title+"<br>";
    }
    
    body.innerHTML+="---------for of(객체반환) 사용---------<br>";
    for (const obj of books) {
        body.innerHTML+=obj.title+"<br>";
    }
    

    /*특정조건을 이용하여 json 객체를 찾기 방법(books에서 객체를 book에 넘기고
      book.title과 문자열이 일치할 때 객체를 반환)
    */
    var result=books.find(book=> book.title ==="javascript 기초");
    console.log(result);
    
    //문제 books.json 파일을 ajax통신으로 가져오고 html 문서에 책 찾기


}