import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import sideImage from 'images/landing-section-2/side-image.png'

function About() {
    return (
        <section id="about" className="section-about">
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol md="6" className="section-about__image">

                        <img style={{ "height": "70vh", "width": "70vh" }} src={sideImage} alt=""></img>

                    </MDBCol>
                    <MDBCol md="6" className="section-about__text">
                        <div className="section-about__text__box">
                            <h1 className="heading-primary">Our Story</h1>
                            <p className="paragraph-primary">
                                According to the Union budget documents, the government has spent about ₹67,058
                                crore on the Swachh Bharat Mission so far. With three million government
                                employees and students participation it is India's largest cleanliness drive.
                                We aim to take a step further in this campaign with the help of modern resource.
                                And help people to take full utilization of facilities provided by government
                                to keep our country 
                            </p>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}

export default About
