import React from 'react';
import { Link } from 'react-router-dom';
import { deletePassword } from "../../actions/passwordsAction";
import { useDispatch } from "react-redux";


const Password = ({ password, select }) => {
    const dispatch = useDispatch();
    const { website, passcode, email, id } = password
    return (
        <tr>
            <th>
                <div className="custom-control custom-checkbox">
                    <input checked={select} type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </th>
            <td>{website}</td>
            <td>{passcode}</td>
            <td>{email}</td>
            <td className="icons">
                <Link to={`/passwords/edit/${id}`}><span className="material-icons mr-2">edit</span></Link>
                <span className="material-icons text-danger" onClick={() => dispatch(deletePassword(id))} style={{ cursor: 'pointer' }}>remove_circle</span>
            </td>
        </tr>
    )
}

export default Password;
