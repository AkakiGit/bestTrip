import React, { Fragment } from 'react';

const ShowUsers = (props) => {
    // console.log(props.user.avatar)
    return <div className="top-user">
        <img  src={props.user.avatar} alt="user" />
        <h3 className="top-user-name">{props.user.first_name} {props.user.last_name}</h3>
        <p className="top-user-email">{props.user.email}</p>
    </div>
}

export class TopUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: props,
            showMore: false
        }
    }

    render() {
        
        const showMore = () => {
            this.setState({
                showMore: true
            })
        }

        const showUsers = this.state.users.topUsersOne.data ? this.state.users.topUsersOne.data.map((user, index) => (
            <ShowUsers key={index} user={user} />
        )) : '';

        const showMoreUsers = this.state.users.topUsersTwo.data ? this.state.users.topUsersTwo.data.map((user, index) => (
            <ShowUsers key={index} user={user} />
        )) : '';

        return <Fragment>
                    <h1 style={{textAlign: 'center'}}>ერთგული მომხმარებლები</h1>
                    <div className="TopUsers">
                        {showUsers}
                        <br />
                        {
                            this.state.showMore ?  showMoreUsers : <div className="show-more"><button className="show-more-btn" onClick={() => showMore()}>მეტის ნახვა</button></div>
                        }
                    </div>
            </Fragment>
    }
}