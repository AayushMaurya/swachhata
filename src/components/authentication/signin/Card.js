import React from 'react'
import facebook from 'images/sign-up/facebook.png'
import google from 'images/sign-up/google.png'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'
import Home from '../AfterResister/Home'
import { Link } from 'react-router-dom'
function Card() {
    return (
        <div className="signin__card">
            <span className="signin__card--header">Sign in</span>
            <div className="signin__card--desc">
                <span>New user?</span>
                <a href="./signup">Create an account</a>
            </div>
            <div className="signin__card--form">
                <form onSubmit={(event) => event.preventDefault()}>
                    <MDBRow>
                        <MDBCol sm="12">
                            <div className="form-group">
                                <label htmlFor="email">Email Id</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input-component"
                                    placeholder="Enter Email Id"
                                />
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="12">
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="input-component"
                                    placeholder="Enter Password"
                                />
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm="12">
                            <Link to="/home">
                                <button className="button--green button--green--round signup__card--button">
                                    Sign In
                                </button>
                            </Link>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol lg="12" className="signin__card__forgot-pw-div">
                            <a
                                href="./login"
                                className="signin__card__forgot-pw"
                            >
                                Forgot password?
                            </a>
                        </MDBCol>
                    </MDBRow>
                    <hr />
                </form>
            </div>
            <div className="signin__card--or">OR</div>
            <div className="signin__social">
                <a href="/" className="signin__social--links">
                    <img
                        src={google}
                        alt=""
                        className="signin__social--links"
                    ></img>
                </a>
                <a href="/" className="signin__social--links">
                    <img
                        src={facebook}
                        alt=""
                        className="signin__social--links"
                    ></img>
                </a>
            </div>
        
        </div>
    )
}

export default Card
