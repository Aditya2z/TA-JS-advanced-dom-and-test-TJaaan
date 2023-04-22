document.addEventListener("DOMContentLoaded", () => {
  alert(`The content of the DOM is loaded`);
  initialQuotesLoad();
});

let root = document.querySelector(".root");
let quotesRendered = 0; // number of quotes currently rendered

const initialQuotes = 3; // number of quotes to show initially
let quotesToShow = quotes.slice(0, initialQuotes); // array of quotes to show

function initialQuotesLoad() {
    quotesToShow.forEach((quote) => {
        let b = document.createElement("p");
        b.innerText = quote.quoteText;
        let p = document.createElement("p");
        p.classList.add("author");
        p.innerText = `-` + quote.quoteAuthor;
        root.append(b, p);
        quotesRendered++;
    });
}

function handleScroll() {
  const isBottomReached = document.documentElement.scrollTop + document.documentElement.clientHeight >=
     document.documentElement.scrollHeight;
  if (!isBottomReached) return;

  const newQuotes = quotes.slice(quotesRendered, quotesRendered + 1);
  if (newQuotes.length > 0) {
    newQuotes.forEach((quote) => {
      let b = document.createElement("p");
      b.innerText = quote.quoteText;
      let p = document.createElement("p");
      p.classList.add("author");
      p.innerText = `-` + quote.quoteAuthor;
      root.append(b, p);
      quotesRendered++;
    });
  } else {
    quotesRendered = 0;
  }
}

window.addEventListener("scroll", handleScroll);
