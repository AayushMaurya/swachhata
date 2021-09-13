import React from 'react'
import { Link } from 'react-router-dom'
import DownArrow from 'images/landing-section-1/down-arrows.png'

function Hero() {
    return (
        <section id="hero" className="landing-page__hero">
            <div className="landing-page__hero__text-box">
                <p className="landing-page__hero__text-box__main">
                    Welcome to Swachhata
                </p>
                <p className="landing-page__hero__text-box__sub">
                    <span>Connect.</span> <span>Learn.</span>{' '}
                    <span>Clean.</span>
                </p>
                <div className="landing-page__hero__text-box__button">
                    <Link
                        to="/login"
                        className="landing-page__hero__text-box__button__item landing-page__hero__text-box__button__item--login"
                    >
                        Log In
                    </Link>
                    <Link
                        to="/signup"
                        className="landing-page__hero__text-box__button__item"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
            <a href="#about"><img
                className="landing-page__hero__down-arrows"
                src={DownArrow}
                alt=""
            /></a>
            
        </section>
    )
}

export default Hero
