import React from 'react'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'
import learn from 'images/landing-section-3/learn.png'
import connect from 'images/landing-section-3/connect.png'
import inovate from 'images/landing-section-3/inovate.png'

function Mission() {
    return (
        <section id="mission" className="section-mission">
            <div className="section-mission__text">
                <h1 className="heading-primary">Our Mission</h1>
                <p className="paragraph-primary">
                Our aim is to cover the gap between desire and recources to 
                make our enviroment neat and clean.
                </p>
            </div>
            <div className="section-mission__cards">
                <MDBRow>
                    <MDBCol
                        sm="12"
                        md="6"
                        lg="4"
                        className="section-mission__cards__col"
                    >
                        <div className="section-mission__cards__item">
                            <img src={learn} alt="" />
                            <p>
                                Encourage people in swachha bharat mission
                                by engaging them socially with people
                                sharing same interest.
                            </p>
                        </div>
                    </MDBCol>
                    <MDBCol
                        sm="12"
                        md="6"
                        lg="4"
                        className="section-mission__cards__col"
                    >
                        <div className="section-mission__cards__item">
                            <img src={connect} alt="" />
                            <p>
                                Help people to get information about nearby available
                                resources and use them at their best.
                            </p>
                        </div>
                    </MDBCol>
                    <MDBCol
                        sm="12"
                        md="6"
                        offsetMd="3"
                        offsetLg="0"
                        lg="4"
                        className="section-mission__cards__col"
                    >
                        <div className="section-mission__cards__item">
                            <img src={inovate} alt="" />
                            <p>
                                With the right set of resources and network in
                                hand, Swachhata wants to take a big step in achiving the 
                                goal of 'Swachha Bharat Sundar Bharat'.
                            </p>
                        </div>
                    </MDBCol>
                </MDBRow>
            </div>
        </section>
    )
}

export default Mission
