import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from 'components/authentication/signup/Signup'
import Signin from 'components/authentication/signin/Signin'
import LandingPage from 'components/authentication/landingPage/LandingPage'
import Home from 'components/authentication/AfterResister/Home'
import Segregation from 'components/authentication/AfterResister/Segregation'
import Contact from 'components/authentication/AfterResister/Contact'
import Complaints from 'components/authentication/AfterResister/Complaints'
import Complaintsform from 'components/authentication/AfterResister/Complaintsform'
import ComplainsDetails from 'components/authentication/AfterResister/ComplainsDetails'
function MainComponent() {
    return (
        <div className="Main">
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPage} />

                    <Route path="/signup" exact component={Signup} />
                    <Route path="/login" exact component={Signin} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/segregation" exact component={Segregation} />
                    <Route path="/complaints" exact component={Complaints} />
                    <Route path="/contact" exact component={Contact} />
                    <Route
                        path="/complaintsform"
                        exact
                        component={Complaintsform}
                    />
                    <Route
                        path="/complaintsdetails"
                        exact
                        component={ComplainsDetails}
                    />
                </Switch>
            </Router>
        </div>
    )
}

export default MainComponent
