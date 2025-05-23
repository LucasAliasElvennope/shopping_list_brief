"use strict";

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const ul = document.getElementById("ul");
const btn2 = document.getElementById("btn2");

btn.addEventListener("click", function() {
    const value = input.value;
    if (value === ""){
    alert("Please enter a value");
    return;
}
if (value === "guillaume"){
    alert("Interdis au Gartic");
    return;
}
if (value === "loic"){
    alert("Ce mec est raciste");
    return;
}
if (value === "julien"){
    alert("Jolie hobbie du dimanche soir");
    return;
}
if (value === "milan"){
    alert("Attention ! Brouteur");
    return;
}
if (value === "hachemi"){
    alert("Suis le sur Twitch https://m.twitch.tv/persepto/home");
    return;
}
if (value === "cyril"){
    alert("Attention au cany-cross");
    return;
}

const li = document.createElement("li");
li.textContent = value;
ul.appendChild(li);
input.value = "";
});

btn2.addEventListener("click", function() {
    ul.innerHTML = "";
});