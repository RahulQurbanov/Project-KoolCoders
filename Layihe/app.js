const dropdownMenu=document.querySelector('.dropdown-menu');
const closeMenu=document.querySelector('.closemenu');
const openMenu=document.querySelector('#burger-menu');



openMenu.addEventListener("click",show);
closeMenu.addEventListener("click",close);

function show(){
    dropdownMenu.style.display='flex';
    dropdownMenu.style.top='0';
}

function close(){
   dropdownMenu.style.top='-100%'
}

let add=document.querySelector(".user");

add.addEventListener("click",addUser);

function addUser(){
    window.location.href="login.html";
}

let button=document.querySelector(".btn");
let email=document.querySelector("#eml");
let password=document.querySelector("#psw");





console.log(button);

function show1(event) {
    event.preventDefault();

    let inputName = document.querySelector(".name");

    localStorage.setItem("userName", inputName.value);

    window.location.href = "index.html";
}

function addProfil(){
    let userName = localStorage.getItem("userName");

    if (userName) {
        let header = document.querySelector("header");
        let name = document.createElement("div");
        name.classList.add("fullName");
        name.innerHTML = `
            <i class="fa-solid fa-user" id="profil"></i>
            <p class="fullname">${userName}</p>
            <i class="fa-solid fa-right-from-bracket" id="exit"></i>
        `;
        header.appendChild(name);

        add.style.display="none";
        let exit = name.querySelector("#exit");
        
    }
}
console.log(exit);
  

document.addEventListener("DOMContentLoaded", function() {
   addProfil()
});

exit.addEventListener("click",()=>{
    window.location.href = "login.html";
});







