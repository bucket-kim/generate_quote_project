// DOM manipulation
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const facebookBtn = document.getElementById("facebook");
const newQuoteBtn = document.getElementById("new-quote");

// Get Quotes from API

let apiQuotes = [];

const newQuote = () => {
  //  pick random quotes
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  authorText.textContent = `- ${quote.author}`;
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

// on load
getQuotes();
