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

const li = document.createElement("li");
li.textContent = value;
ul.appendChild(li);
input.value = "";
});

btn2.addEventListener("click", function() {
    ul.innerHTML = "";
});