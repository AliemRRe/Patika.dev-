let myName = prompt("Adınızı giriniz"); 
let name = document.querySelector("#myName"); 

myName = myName.charAt(0).toUpperCase() + myName.slice(1); 

name.innerHTML = myName;



function showTime() {
    let myClock = document.querySelector("#myClock"); 
    let now = new Date(); 
    let day = now.getDate(); 
    let month = now.getMonth() +1; 
    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let time = `${day}/${month}/${year} ${hour}:${minute}:${second}`; 

    myClock.innerHTML = time 

    setTimeout(showTime, 1000); 

}
 showTime(); 
 