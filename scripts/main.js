// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World";


// document.querySelector("html").addEventListener("click",function(){
//     alert("别戳我，我怕疼！");
// })
// document.querySelector("html").addEventListener("click",()=>{
//     alert("别戳我，我怕疼！");
// })//箭头函数


let myImage = document.querySelector("img");
myImage.onclick =function(){
    let mySrc =myImage.getAttribute("src");
    if(mySrc === "images/firefox-icon.png"){
        myImage.setAttribute("src","images/girl.png");
    }else{
        myImage.setAttribute("src","images/firefox-icon.png");
    }
}


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// function setUserName(){
//     let myName = prompt("输入你的名字:");
//     localStorage.setItem("name",myName);
//     myHeading.textContent = "Mozilla 酷毙了，" + myName;
// }
// if(!localStorage.getItem("name")){
//     setUserName();
// }else{
//     let storedName = localStorage.getItem("name");
//     myHeading.textContent = "Mozilla 酷毙了," + storedName;
// }


function setUserName(){
    let myName = prompt("请输入你的名字：");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name",myName);
        myHeading.textContent = "Mozilla 酷毙了," + myName;
    }
}
myButton.onclick = function(){
    setUserName();
};