const COLORS = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
]

const URLQUOTES = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

const $body = document.querySelector('body')
const $quoteSpan = document.getElementById('quote')
const $authorSpan = document.getElementById('author')
const $buttons = document.getElementsByClassName('btn')
const $newQuoteButton = document.getElementById('change-quote')

let quotesArr = []

fetch(URLQUOTES)
  .then((res) => res.json())
  .then((data) => {
    quotesArr = data.quotes
    showQuoteAuthor(0)
  })
  .catch((err) => { $quoteSpan.textContent = 'There was an error loading the quotes check the console'; console.log(err) })

const showQuoteAuthor = (index) => {
  const quote = quotesArr[index].quote
  const author = quotesArr[index].author

  $quoteSpan.textContent = quote
  $authorSpan.textContent = `- ${author}`
}
