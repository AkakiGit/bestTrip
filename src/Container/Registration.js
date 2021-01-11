import React, { useState } from 'react';
import emailIcon from '../images/email.svg';
import passIcon from '../images/pass.svg';
import { useHistory } from 'react-router-dom';
import RegisteredUsers from '../config/registeredUsers';

const Registration = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    console.log(props)

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (RegisteredUsers.hasOwnProperty(email)) {
            if (RegisteredUsers[email].password === password) {
                props.cb(true, email);
                history.push('/');
            } else {
                alert("Wrong password")
            }
        } else {
            alert("Unknown User")
        }
    }

    return <div className="registration-container">
        <form onSubmit={handleSubmit}>
            <h1 className="main_text">რეგისტრაცია</h1>
            <div className="form_wrapper">
                <img className="icon" src={emailIcon} alt="email" />
                <input className="form" type="text" placeholder="ელ.ფოსტა..." value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form_wrapper">
                <img className="icon" src={passIcon} alt="pass" />
                <input className="form" type="password" placeholder="შეყვანეთ პაროლი..." value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="registration-button" disabled={!validateForm()}>რეგისტაცია</button>
        </form>
    </div>
}

export default Registration;