import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Password from './Password';
import { selectAllPassword, deleteAllSelected, deleteAll } from '../../actions/passwordsAction';

const Passwords = () => {
    const dispatch = useDispatch();
    const [select, setSelect] = useState(false);
    const passwords = useSelector((state) => state.password.passwords);
    const selectedPasswords = useSelector((state) => state.password.selectedPassword);

    useEffect(() => {
        if (select) {
            dispatch(selectAllPassword(passwords.map(password => password.id)));
        } else {
            dispatch(deleteAllSelected());
        }
    }, [select])



    return (
        <div className="container">
            {
                selectedPasswords.length > 0 ? (
                    <button className="btn btn-danger mb-3" onClick={() => { dispatch(deleteAll()) }}>Delete All</button>
                ) : null
            }
            <div className="py-3">
                <table className="table shadow">
                    <thead>
                        <tr>
                            <th>
                                <div className="custom-control custom-checkbox">
                                    <input id="select" type="checkbox" className="custom-control-input"
                                        value={select}
                                        onClick={() => setSelect(!select)} />
                                    <label htmlFor="select" className="custom-control-label"></label>
                                </div>
                            </th>
                            <th>Site Name</th>
                            <th>Password</th>
                            <th>Login Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            passwords.map(password => (
                                <Password password={password} key={password.id} select={select} />
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Passwords;
