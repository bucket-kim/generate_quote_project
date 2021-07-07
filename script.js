// DOM manipulation
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Get Quotes from API

let apiQuotes = [];

const newQuote = () => {
  //  pick random quotes
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // check if author field is blank and replace it with unknown.
  if (!quote.author) {
    authorText.textContent = "- Unknown";
  } else {
    authorText.textContent = `- ${quote.author}`;
  }

  if (quote.text.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote.text;
};

const getQuotes = async () => {
  const apiURL = `https://type.fit/api/quotes`;
  try {
    const res = await fetch(apiURL);
    apiQuotes = await res.json();
    newQuote();
  } catch (err) {
    // handle error handle
    console.log(err);
  }
};

// tweet quote
const tweet = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
};

// event listener
newQuoteBtn.addEventListener("click", newQuote);

twitterBtn.addEventListener("click", tweet);

// on load
getQuotes();
