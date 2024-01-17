import React, {useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = props => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            return;
        }
        if (+age < 1) {
            return;
        }

        props.addUserHandler({
            username: username,
            age: +age,
            id: Math.random().toString()
        });
        setUsername("");
        setAge("");
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="userName">Username</label>
                <input type={"text"}
                       id={"userName"}
                       value={username}
                       onChange={(event) => setUsername(event.target.value)}/>

                <label htmlFor="age">Age(Years)</label>
                <input type={"number"}
                       id={"age"}
                       value={age}
                       onChange={(event) => setAge(event.target.value)}/>

                <Button type={"submit"}>Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;