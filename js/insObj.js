import {user} from "./Info.js";

let mother = document.querySelector(".objectInContainer");
for(let i = 0; i < user.length; i++){
    let userDiv = document.createElement("Div");
    userDiv.classList.toggle("Object");
    userDiv.innerHTML = `
        <img src="${info.user[i].picLink}">
        <h1>${info.user[i].name}</h1>
        <h3>${info.user[i].region}</h3>
        <p>${info.user[i].Age}</p>
        <a href="user.html"><button class="btn" id="${info.user[i].ID}">Read More</button></a>`;
    mother.appendChild(userDiv);
    userInfoAll = JSON.stringify(info.user[i]);
    localStorage.setItem(info.user[i].ID, userInfoAll);
}
// debugger;
let button1 = document.querySelector("#A1");
let button2 = document.querySelector("#A2");
let button3 = document.querySelector("#A3");
let button4 = document.querySelector("#A4");

button1.onclick = function(){
    userInfo = JSON.stringify(info.user[0]);
    localStorage.setItem("userInfoStg", userInfo);
}
button2.onclick = function(){
    userInfo = JSON.stringify(info.user[1]);
    localStorage.setItem("userInfoStg", userInfo);
}
button3.onclick = function(){
    userInfo = JSON.stringify(info.user[2]);
    localStorage.setItem("userInfoStg", userInfo);
}
button4.onclick = function(){
    userInfo = JSON.stringify(info.user[3]);
    localStorage.setItem("userInfoStg", userInfo);
}