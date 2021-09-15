import React from 'react'
import name from 'images/sign-up/name.png'
import Card from 'components/authentication/signup/Card'

function Signup() {
    return (
        <div className="signup">
            <div className="signup__flex-container">
                <div className="signup__flex-child">
                    <h1 style={{ color: "white" }}></h1>
                    {/* <img
                        src={name}
                        alt="inovact-logo"
                        className="signup__logo"
                    /> */}
                </div>
                <div className="signup__flex-child">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Signup
