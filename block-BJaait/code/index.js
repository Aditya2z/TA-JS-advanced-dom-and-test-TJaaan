let root = document.querySelector(".root");
let input = document.querySelector("input");

function handleSubmit(event) {
    if(event.keyCode !== 13 || event.target.value === "")  return;
    let box = document.createElement("div");
    box.classList.add("box");
    let p1 = document.createElement("p");
    p1.innerText = event.target.value;
    let p2 = document.createElement("p");
    p2.classList.add("hide");
    p2.innerText = "Drag Me";
    box.append(p1, p2);
    root.append(box);
    event.target.value = "";
    box.addEventListener("dragstart", handleDragStart);
    box.addEventListener("dragend", handleDragEnd);
}

function handleDragStart(e) {
    this.style.opacity = '0.4';
}
  
function handleDragEnd(e) {
    this.style.opacity = '1';
}
  
input.addEventListener("keyup", handleSubmit);