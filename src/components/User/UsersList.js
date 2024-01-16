import React from "react";

const UsersList = (props) => {
    return (
        <ul>
            {props.users.map(user => {
                return (
                    <li>{`${user.username}(${user.age} years old)`}</li>
                );
            })}
        </ul>
    );
}

export default UsersList;