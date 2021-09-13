import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCardImage,
} from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import sweep from '../../../images/Afterlogin/sweeping.jpg'
import burning from '../../../images/Afterlogin/burning.jpg'
import van from '../../../images/Afterlogin/van.jpg'
import garbage from '../../../images/Afterlogin/garbage.jpg'
import notc from '../../../images/Afterlogin/notc.jpg'
import other from '../../../images/Afterlogin/other.jpg'
import Navbar from './components/Navbar'
function Complaints(props) {
    return (
        <div>
            <Navbar />

            <div className="main-complaints ">
                <style>{'body { background-color: #001948; }'}</style>
                <div className="child-compliants ">
                    <h2
                        style={{
                            color: 'white',
                            paddingTop: 50,
                            paddingBottom: 10,
                        }}
                    >
                        Complaints
                    </h2>
                    <MDBRow className="row-cols-1 row-cols-md-3 g-4  hover-zoom  ">
                        <MDBCol>
                            <MDBCard>
                                <Link to="/complaintsform">
                                    <MDBCardImage
                                        style={{ height: '13.5rem' }}
                                        src={sweep}
                                        alt="..."
                                        position="top"
                                    />
                                </Link>
                                <MDBCardBody>
                                    <MDBCardTitle>
                                        Sweeping not done
                                    </MDBCardTitle>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard>
                                <Link to="/complaintsform">
                                    <MDBCardImage
                                        style={{ height: '13.5rem' }}
                                        src={burning}
                                        alt="..."
                                        position="top"
                                    />
                                </Link>

                                <MDBCardBody>
                                    <MDBCardTitle>
                                        Burning of garbage
                                    </MDBCardTitle>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard>
                                <Link to="/complaintsform">
                                    <MDBCardImage
                                        src={van}
                                        alt="..."
                                        position="top"
                                        style={{ height: '13.5rem' }}
                                    />
                                </Link>
                                <MDBCardBody>
                                    <MDBCardTitle>
                                        Vachile not arrived
                                    </MDBCardTitle>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard>
                                <Link to="/complaintsform">
                                    <MDBCardImage
                                        src={garbage}
                                        alt="..."
                                        position="top"
                                        style={{ height: '13.5rem' }}
                                    />
                                </Link>
                                <MDBCardBody>
                                    <MDBCardTitle>Garbage dumb</MDBCardTitle>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard>
                                <Link to="/complaintsform">
                                    {' '}
                                    <MDBCardImage
                                        src={notc}
                                        alt="..."
                                        position="top"
                                        style={{ height: '13.5rem' }}
                                    />
                                </Link>
                                <MDBCardBody>
                                    <MDBCardTitle>
                                        Dustbins not cleaned
                                    </MDBCardTitle>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard>
                                <Link to="/complaintsform">
                                    {' '}
                                    <MDBCardImage
                                        src={other}
                                        alt="..."
                                        position="top"
                                        style={{ height: '13.5rem' }}
                                    />
                                </Link>
                                <MDBCardBody>
                                    <MDBCardTitle>Other</MDBCardTitle>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </div>
            </div>
        </div>
    )
}

export default Complaints
