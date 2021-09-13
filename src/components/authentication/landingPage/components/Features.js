import React from 'react'
import cornerCircle from 'images/landing-section-4/corner-circle.png'
import upload from 'images/landing-section-4/upload.png'
import team from 'images/landing-section-4/find-team.png'
import mentor from 'images/landing-section-4/meet-mentor.png'
import courses from 'images/landing-section-4/live-courses.png'
import certification from 'images/landing-section-4/certification.png'
import instructors from 'images/landing-section-4/instructors.png'

function Features() {
    return (
        <section id="features" className="section-features">
            <div className="section-features__text">
                <h1 className="heading-primary">Our Key Features</h1>
                <p className="paragraph-primary">
                    If you're a civilized citizen wanting to take a step ahead 
                    in cleaning our country, we've got you
                    covered with our key features.
                </p>
            </div>
            <div className="section-features__body">
                <div className="section-features__body__text">
                    <img
                        className="section-features__body__text__image"
                        src={cornerCircle}
                        alt=""
                    />
                    <p className="section-features__body__text__main">
                        SWACHHATA SOCIAL
                    </p>
                    <p className="section-features__body__text__sub">
                        The best way to spread something good is to get socialised
                        about it.
                    </p>
                </div>
                <div className="section-features__body__content">
                    <div className="section-features__body__content__item">
                        <img src={upload} alt="" />
                        <p>Upload ideas & articles</p>
                    </div>
                    <div className="section-features__body__content__item">
                        <img src={mentor} alt="" />
                        <p>Connect to people</p>
                    </div>
                    <div className="section-features__body__content__item">
                        <img src={courses} alt="" />
                        <p>Get related news</p>
                    </div>
                </div>
            </div>
            <div className="section-features__body">
                <div className="section-features__body__text section-features__body__text--learning">
                    <img
                        className="section-features__body__text__image section-features__body__text__image--learning"
                        src={cornerCircle}
                        alt=""
                    />
                    <p className="section-features__body__text__main">
                        SWACHHATA SERVICE
                    </p>
                    <p className="section-features__body__text__sub">
                        There is need to ease the way of doing good things by providing good services.
                    </p>
                </div>
                <div className="section-features__body__content">
                    <div className="section-features__body__content__item">
                        <img src={team} alt="" />
                        <p>Track garbage cart</p>
                    </div>
                    <div className="section-features__body__content__item">
                        <img src={instructors} alt="" />
                        <p>Waste classification</p>
                    </div>
                    <div className="section-features__body__content__item">
                        <img src={certification} alt="" />
                        <p>Drop complain</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
