let root = document.querySelector(".root");
let input = document.querySelector("input");
let draggables = document.querySelectorAll(".box");
let dragSrcEl = null;

function handleSubmit(event) {
    if(event.keyCode !== 13 || event.target.value === "")  return;
    let box = document.createElement("div");
    box.classList.add("box");
    box.setAttribute("draggable", "true");
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
    box.addEventListener("dragover", handleDragOver);
    box.addEventListener("drop", handleDrop);
}

function handleDragStart(e) {
    console.log("a");
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}
  
function handleDragEnd(e) {
    this.style.opacity = '1';
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}

input.addEventListener("keyup", handleSubmit);
draggables.forEach(ele => {
    ele.addEventListener("dragstart", handleDragStart);
    ele.addEventListener("dragend", handleDragEnd);
    ele.addEventListener("dragover", handleDragOver);
    ele.addEventListener("drop", handleDrop);
})