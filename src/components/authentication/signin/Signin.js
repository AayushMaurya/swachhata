import React from 'react'
import name from 'images/sign-up/name.png'
import Card from 'components/authentication/signin/Card'

function Signin() {
    return (
        <div className="signin">
            <div className="signin__flex-container">
                <div className="signin__flex-child">
                    <h1 style={{ color: "white" }}></h1>
                    {/* <img
                        src={name}
                        alt="inovact-logo"
                        className="signin__logo"
                    /> */}
                </div>
                <div className="signin__flex-child">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Signin
