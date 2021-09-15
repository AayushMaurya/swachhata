<<<<<<< HEAD
import React from 'react'
=======
import React,{useSate, useState} from 'react'
>>>>>>> 16be89d36dfefe2a1d0a8fe9a3b49d5cf0e81309
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
<<<<<<< HEAD
=======
    console.log(props.location)
>>>>>>> 16be89d36dfefe2a1d0a8fe9a3b49d5cf0e81309
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
<<<<<<< HEAD
                    Lodge your Complaint
=======
                    Lodge your Complaint {props.compName}
>>>>>>> 16be89d36dfefe2a1d0a8fe9a3b49d5cf0e81309
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
<<<<<<< HEAD
=======
                        
>>>>>>> 16be89d36dfefe2a1d0a8fe9a3b49d5cf0e81309
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
