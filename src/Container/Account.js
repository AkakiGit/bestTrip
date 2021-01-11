import React from 'react';
import avatar from '../images/avatar.webp';
import RegisteredUsers from '../config/registeredUsers';


const Account = (props) => {
    const user = RegisteredUsers[`${props.userName}`];
    return <div>
        <h1 className="main-user-text">მომხმარებელი</h1>
        <div className="about_user">
            <img className="avatar" src={avatar} alt="avatar" />
            <div>
                <p>სახელი: {user.firstName}</p>
                <p>გვარი: {user.lastName}</p>
                <p>როლი: {user.role}</p>
            </div>
        </div>
    </div>
}

export default Account;