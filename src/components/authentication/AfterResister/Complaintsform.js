import React, { useSate, useState } from 'react'
import { Link } from 'react-router-dom'
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
function Complaintsform(props) {
    console.log(props.location)
    return (
        <div className="main-complaintsform">
            <style>{'body { background-color: #001948; }'}</style>
            <div className="child-compliantsform">
                <h2
                    style={{
                        color: 'white',
                        paddingTop: -10,
                        paddingBottom: 10,
                    }}
                >
                    Lodge your Complaint {props.compName}
                </h2>
                <mdb-form-control>
                    <label
                        mdbLabel
                        class="form-label"
                        for="formControlDefault"
                        style={{ fontWeight: 900, color: 'black' }}
                    >
                        Location
                    </label>
                    <input
                        mdbInput
                        type="text"
                        id="formControlDefault"
                        class="form-control"
                        placeholder="IIITG - IT Park St Guwahati, Assam 781015
                        "
                    />
                </mdb-form-control>
                <mdb-form-control>
                    <label
                        mdbLabel
                        class="form-label"
                        for="formControlDefault"
                        style={{
                            fontWeight: 900,
                            color: 'black',
                            marginTop: 8,
                        }}
                    >
                        Phone Number
                    </label>
                    <input
                        mdbInput
                        type="number"
                        id="formControlDefault"
                        class="form-control"
                        placeholder="9999999999
                        "

                    />
                </mdb-form-control>

                <label
                    class="form-label"
                    for="customFile"
                    style={{ fontWeight: 900, color: 'black', paddingTop: 10 }}
                >
                    Add photo
                </label>
                <input type="file" class="form-control" id="customFile" />

                <button mdbRipple type="button" class="btn btn-info mt-5">
                    {/* Submit */}
                    <Link to="/complaintsdetails">Submit</Link>
                </button>
            </div>
        </div>
    )
}

export default Complaintsform
