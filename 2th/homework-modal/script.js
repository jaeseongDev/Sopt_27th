const modal = document.getElementById("modal");
const close = document.getElementById("close");
const button = document.getElementById("button");

button.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}