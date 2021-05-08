import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { editPassword, updatePassword } from "../../actions/passwordsAction";
import { useHistory } from "react-router-dom";
// import shortid from "shortid";
import { useParams } from "react-router-dom";

const EditPassword = () => {
    let { id } = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const password = useSelector((state) => state.password.password)
    const [website, setWebSite] = useState("");
    const [passcode, setPasscode] = useState("");
    const [email, setEmail] = useState("");


    useEffect(() => {
        if (password != null) {
            setWebSite(password.website);
            setPasscode(password.passcode);
            setEmail(password.email);
        }
        dispatch(editPassword(id))
    }, [password]);

    const onUpdatePassword = (e) => {
        e.preventDefault();

        const update_password = Object.assign(password, {
            website: website,
            passcode: passcode,
            email: email,
        })
        dispatch(updatePassword(update_password));
        history.push("/");
    }



    return (
        <div className="container">
            <div className="card border-0 shadow">
                <div className="card-header"> Edit Your Password</div>
                <div className="card-body">
                    <form onSubmit={(e) => onUpdatePassword(e)}>
                        <div className="form-group">
                            <input type="text" className="form-control" value={website} onChange={(e) => setWebSite(e.target.value)} placeholder="Enter Your Site Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" value={passcode} onChange={(e) => setPasscode(e.target.value)} placeholder="Enter Your Password" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email Address" />
                        </div>
                        <button className="btn btn-warning" type="submit">Update Password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditPassword;
