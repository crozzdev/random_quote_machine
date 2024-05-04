import './App.css'
import { useState, useEffect, useCallback } from 'react';
import { QuoteBox } from "./QuoteBox";

const URLQUOTES = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'




const colorClasses = [
    ["bg-color-16a085", "text-color-16a085"],
    ["bg-color-27ae60", "text-color-27ae60"],
    ["bg-color-2c3e50", "text-color-2c3e50"],
    ["bg-color-f39c12", "text-color-f39c12"],
    ["bg-color-e74c3c", "text-color-e74c3c"],
    ["bg-color-9b59b6", "text-color-9b59b6"],
    ["bg-color-FB6964", "text-color-FB6964"],
    ["bg-color-342224", "text-color-342224"],
    ["bg-color-472E32", "text-color-472E32"],
    ["bg-color-BDBB99", "text-color-BDBB99"],
    ["bg-color-77B1A9", "text-color-77B1A9"],
    ["bg-color-73A857", "text-color-73A857"]
]


export function App() {
    const [twitterHref, setTwitterHref] = useState("#")
    const [color, setColor] = useState(colorClasses[0])
    const [quote, setQuote] = useState({ quote: "", author: "" })
    const [transitioning, setTransitioning] = useState(false);

    const fetchQuote = useCallback(async () => {
        try {
            setTransitioning(true);
            const res = await fetch(URLQUOTES);
            const data = await res.json();
            const randomIndexQuote = Math.floor(Math.random() * data.quotes.length);
            const randomIndexColor = Math.floor(Math.random() * colorClasses.length);
            const selectedQuote = data.quotes[randomIndexQuote];
            const twitterUri = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + selectedQuote.quote + '"' + selectedQuote.author);
            setTwitterHref(twitterUri);
            setTimeout(() => {
                setQuote(selectedQuote);
                setColor(colorClasses[randomIndexColor]);
                setTransitioning(false);
            }, 1000);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        fetchQuote();
    }, [fetchQuote]);

    const changeQuote = () => {
        fetchQuote();
    }

    return (
        <div className={`app ${color[0]}`}>
            <QuoteBox quote={quote.quote} author={quote.author} changeQuote={changeQuote} colorBg={color[0]} colorTxt={color[1]} twitterHref={twitterHref} transition={transitioning} />
            <p className="signature-footer">Created with love by <a href="https://github.com/crozzdev" target="_blank">CrozzDev </a><i className="fa fa-heart"></i></p>
        </div>
    )
}

