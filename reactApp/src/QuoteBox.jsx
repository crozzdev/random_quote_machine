/* eslint-disable react/prop-types */
import './QuoteBox.css'
import { SocialButton } from "./SocialButton";

export function QuoteBox({ quote, author, colorBg, colorTxt, changeQuote, twitterHref, transition }) {
    const transitionClass = transition ? 'transition' : ''

    return (
        <div className='quote-box'>
            <div className={`quote-container ${colorTxt} ${transitionClass} `} >
                <i className="fa fa-quote-left"></i>
                <span className="quote">{quote}</span><i className="fa fa-quote-right"></i>
            </div>
            <span className={`author ${colorTxt} ${transitionClass}`}>{`- ${author}`}</span>
            <div className="buttons">
                <SocialButton key="twitter_btn" href={twitterHref} title='Tweet this quote' target='_top' iconFa='fa-twitter' colorBg={colorBg} ></SocialButton>
                <SocialButton key="github_btn" href='https://github.com/crozzdev' title='Check this repository' target='_blank' iconFa='fa-github' colorBg={colorBg}></SocialButton>
                <button type="button" className={`btn new-quote ${colorBg}`} onClick={changeQuote}>New quote</button>
            </div>
        </div>

    )

}