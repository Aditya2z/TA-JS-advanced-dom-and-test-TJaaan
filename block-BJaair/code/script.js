let noticeBoard = document.querySelector(".root");
let form = document.querySelector("form");
let input = document.querySelector("input");
let option = document.querySelector("select");

function handleSubmit() {
    let notice = document.createElement("div");
    notice.classList.add("notice");
    let category = document.createElement("h3");
    category.innerText = option.value;
    category.addEventListener("dblclick", () => {
        category.setAttribute('contenteditable', true);
        category.focus();
    });
    let title = document.createElement("p");
    title.innerText = input.value;
    title.addEventListener("dblclick", () => {
        title.setAttribute('contenteditable', true);
        title.focus();
    });
    notice.append(category, title);
    noticeBoard.append(notice);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleSubmit();
});