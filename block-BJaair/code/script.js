let noticeBoard = document.querySelector(".root");
let form = document.querySelector("form");
let input = document.querySelector("input");
let option = document.querySelector("select");

let allNotices = [];

class Notice {
    constructor(category, title) {
      this.category = category;
      this.title = title;
    }
    createUI() {
      let div = document.createElement("div");
      div.classList.add("notice");
      let h3 = document.createElement("h3");
      h3.innerText = this.category;
      h3.addEventListener("dblclick", () => {
        h3.setAttribute("contenteditable", true);
        h3.focus();
      });
      h3.addEventListener("blur", () => {
        h3.removeAttribute("contenteditable");
        this.category = h3.innerText;
        // Update category in local storage
        updateLocalStorage();
      });
      let title = document.createElement("p");
      title.innerText = this.title;
      title.addEventListener("dblclick", () => {
        title.setAttribute("contenteditable", true);
        title.focus();
      });
      title.addEventListener("blur", () => {
        title.removeAttribute("contenteditable");
        this.title = title.innerText;
        // Update title in local storage
        updateLocalStorage();
      });
      div.append(h3, title);
      noticeBoard.append(div); // Add notice to the top
      // Update notices in local storage
      updateLocalStorage();
    }
  }

// Load notices from local storage
if (localStorage.getItem("notices")) {
  allNotices = JSON.parse(localStorage.getItem("notices"));
  allNotices.forEach((notice) => {
    let obj = new Notice(notice.category, notice.title);
    obj.createUI();
  });
}


function handleSubmit() {
  let obj = new Notice(option.value, input.value);
  obj.createUI();
  input.value = ""; // Clear input
  option.selectedIndex = 0; // Reset category select
}

function updateLocalStorage() {
  localStorage.setItem("notices", JSON.stringify(allNotices));
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSubmit();
});
