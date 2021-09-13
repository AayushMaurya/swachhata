import React from 'react'
import farmer from '../../../images/Afterlogin/farmer.jpg'
import star from '../../../images/Afterlogin/star.jpg'
import Navbar from './components/Navbar'
function ComplainsDetails(props) {
    return (
        <div>
            <style>{'body { background-color: #001948; }'}</style>
            <Navbar />
            <div className="complaint-user ">
                <div className="child-complaint-user">
                    <img
                        style={{ width: 90, height: 90 }}
                        src={farmer}
                        alt=""
                    />
                </div>
                <h5 style={{ margin: 20, color: 'white' }}>
                    Anish will contact you within 2 hours in case of any queary.
                </h5>
                <div style={{ marginTop: 20 }}>
                    <img style={{ width: 150, height: 70 }} src={star} alt="" />
                </div>
            </div>
            <div className="main-complaints-details">
                <div className="child-compliants-details">
                    <div className="part1">Name</div>
                    <div className="part2">Abhinandan kumar</div>

                    <div className="part1">Complaint Number </div>
                    <div className="part2">ABHI65TY7PO</div>

                    <div className="part1"> Submitted Date </div>
                    <div className="part2"> 9/13/2021</div>

                    <div className="part1"> Status</div>
                    <div className="part2"> Pending</div>

                    <div className="part1">person in Charge</div>
                    <div className="part2"> Anish chaudhary </div>
                </div>
            </div>
            <div className="complaint-user">
                <div className="child-complaint-user">
                    <button type="button" class="btn btn-success">
                        Delete Complaint
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ComplainsDetails
