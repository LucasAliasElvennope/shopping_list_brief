const input = document.getElementById("input");
const btn = document.getElementById("btn");
const ul = document.getElementById("ul");

btn.addEventListener("click", function() {
    const value = input.value;
    if (value === ""){
    return;
}

const li = document.createElement("li");
li.textContent = value;
ul.appendChild(li);
});