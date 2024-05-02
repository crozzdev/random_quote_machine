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
const $quoteContainer = document.getElementById('quote-container')
const $authorSpan = document.getElementById('author')
const $buttons = document.getElementsByClassName('btn')
const $newQuoteButton = document.getElementById('change-quote')
const $twitterLink = document.getElementById('twitter')

const buttonsArray = Array.from($buttons)
let quotesArr = []
let quotesLength = 0

fetch(URLQUOTES)
  .then((res) => res.json())
  .then((data) => {
    quotesArr = data.quotes
    quotesLength = quotesArr.length
    showQuoteAuthor(0)
    changeColor(0)
  })
  .catch((err) => { $quoteSpan.textContent = 'There was an error loading the quotes check the console'; console.log(err) })

const showQuoteAuthor = (index) => {
  $authorSpan.textContent = ''
  $authorSpan.style.opacity = 0
  $quoteContainer.style.opacity = 0

  const quote = quotesArr[index].quote
  const author = quotesArr[index].author

  $twitterLink.href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author)

  setTimeout(() => {
    // eslint-disable-next-line quotes
    $quoteSpan.textContent = quote
    $authorSpan.textContent = `- ${author}`
    $authorSpan.style.opacity = 1
    $quoteContainer.style.opacity = 1
  }, 500)
}

const changeColor = (index) => {
  const color = COLORS[index]
  $body.style.backgroundColor = color
  $quoteContainer.style.color = color
  $authorSpan.style.color = color

  buttonsArray.forEach(element => {
    element.style.backgroundColor = color
  })
}

$newQuoteButton.addEventListener('click', () => {
  const randomQuote = Math.floor(Math.random() * quotesLength)
  const randomColor = Math.floor(Math.random() * COLORS.length)
  showQuoteAuthor(randomQuote)
  setTimeout(() => {
    changeColor(randomColor)
  }, 500)
})
