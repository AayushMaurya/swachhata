import React from 'react'
import { Link } from 'react-router-dom'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'
import Search from './Search'
import rec from '../../../images/Afterlogin/rec.jpg'
import blue from '../../../images/Afterlogin/bluejpg.jpg'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
} from 'mdb-react-ui-kit'
import Navbar from './components/Navbar'
import { green } from '@material-ui/core/colors'
export default function Article() {
    return (
        <div>
            <style>{'body { background-color: #001948; }'}</style>
            <Navbar />

            <MDBRow style={{ paddingTop: 200 }}>
                <MDBCol md="8" className="col-example">
                    <MDBCard
                        style={{
                            maxWidth: '22rem',
                            marginBottom: 50,
                            // backgroundColor: 'grey',
                            fontWeight: 700,
                            // color: 'white',
                        }}
                    >
                        <MDBCardBody>
                            <MDBCardTitle style={{ color: 'blue' }}>
                                Recyclables
                            </MDBCardTitle>
                            <MDBCardText>
                                Include
                                paper,newspaper,magazines,cardboard,glass
                                bottles etc
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>

                    <img
                        style={{ width: 260, height: 200 }}
                        src={blue}
                        alt="Logo"
                    />
                </MDBCol>

                <MDBCol md="4" className="col-example">
                    <MDBCard
                        background=""
                        style={{
                            maxWidth: '22rem',
                            marginBottom: 50,
                            fontWeight: 700,
                        }}
                    >
                        <MDBCardBody>
                            <MDBCardTitle style={{ color: 'green' }}>
                                Biodegradables
                            </MDBCardTitle>
                            <MDBCardText>
                                include plate scraping,vegetables peeling,meat
                                and bones,cooked and uncoocked foods etc
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    <img
                        style={{ width: 200, height: 200 }}
                        src={rec}
                        alt="Logo"
                    />
                </MDBCol>
            </MDBRow>
            <div className="segregation-confused">
                <div className="segregation-text" style={{ color: 'white' }}>
                    Still confused about garbage segregation ? Search here for
                    particular items
                </div>
                <div>
                <Link to="/search"><MDBBtn>Search
                    
                    </MDBBtn></Link>
                </div>
            </div>
        </div>
    )
}
