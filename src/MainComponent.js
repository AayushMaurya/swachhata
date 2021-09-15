import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from 'components/authentication/signup/Signup'
import Signin from 'components/authentication/signin/Signin'
import LandingPage from 'components/authentication/landingPage/LandingPage'
import Home from 'components/authentication/AfterResister/Home'
<<<<<<< HEAD
=======
import HomeD from 'components/authentication/AfterResister/HomeD'
>>>>>>> 16be89d36dfefe2a1d0a8fe9a3b49d5cf0e81309
import Segregation from 'components/authentication/AfterResister/Segregation'
import Contact from 'components/authentication/AfterResister/Contact'
import Complaints from 'components/authentication/AfterResister/Complaints'
import Complaintsform from 'components/authentication/AfterResister/Complaintsform'
import ComplainsDetails from 'components/authentication/AfterResister/ComplainsDetails'
<<<<<<< HEAD
=======
import Search from 'components/authentication/AfterResister/Search'
>>>>>>> 16be89d36dfefe2a1d0a8fe9a3b49d5cf0e81309
function MainComponent() {
    return (
        <div className="Main">
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
<<<<<<< HEAD

                    <Route path="/signup" exact component={Signup} />
                    <Route path="/login" exact component={Signin} />
                    <Route path="/home" exact component={Home} />
=======
                    <Route path="/search" exact component={Search} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/login" exact component={Signin} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/homeforDriver" exact component={HomeD} />
>>>>>>> 16be89d36dfefe2a1d0a8fe9a3b49d5cf0e81309
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
