import React from "react";
import Card from "../UI/Card";

const UsersList = (props) => {
    return (
        <ul>
            {props.users.map(user => {
                return (
                    <li>
                        <Card>{`${user.username}(${user.age} years old)`}</Card>
                    </li>);
            })}
        </ul>
    );
}

export default UsersList;