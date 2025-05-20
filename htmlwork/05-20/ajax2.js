function find(){
    let xhttp=new XMLHttpRequest();//객체만듬
    xhttp.open("get","books.json");
    xhttp.send();//보내고
    xhttp.onload=function(){//업로드가 될때~  
    let books=JSON.parse(xhttp.responseText);
    //id가 inputbox인 데이터를 변수에 저장
    let inputbox=document.getElementById("inputbox");
    let search=inputbox.value;
    console.log(search);
    //찾기(정확히 찾기)
    var result=books.find(book=> book.title === search);
    console.log(result);
    //찾은 객체를 화면에 표시
    let ul=document.querySelector("#findlist");
    ul.querySelector("li:nth-child(1)").textContent="제목:"+result["title"];
    ul.querySelector("li:nth-child(2)").textContent="저자:"+result["authoer"];
    ul.querySelector("li:nth-child(3)").textContent="책가격:"+result["price"];
}            
}
