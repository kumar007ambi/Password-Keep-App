import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addPassword } from "../../actions/passwordsAction";
import { useHistory } from "react-router-dom";
import shortid from "shortid";

const AddPassword = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [website, setWebSite] = useState("");
    const [passcode, setPasscode] = useState("");
    const [email, setEmail] = useState("");

    const addPasswords = (e) => {
        e.preventDefault();
        const new_password = {
            id: shortid.generate(),
            website: website,
            passcode: passcode,
            email: email,
        }
        dispatch(addPassword(new_password));
        history.push("/");
    }

    return (
        <div className="container">
            <div className="card border-0 shadow">
                <div className="card-header"> Add A New Password</div>
                <div className="card-body">
                    <form onSubmit={(e) => addPasswords(e)}>
                        <div className="form-group">
                            <input type="text" className="form-control" value={website} onChange={(e) => setWebSite(e.target.value)} placeholder="Enter Your Site Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" value={passcode} onChange={(e) => setPasscode(e.target.value)} placeholder="Enter Your Password" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email Address" />
                        </div>
                        <button className="btn btn-primary" type="submit">Add New Password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddPassword;
