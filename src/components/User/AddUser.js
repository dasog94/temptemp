import React, {useState} from "react";

const AddUser = props => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(0);

    const submitHandler = (event) => {
        event.preventDefault();

        props.addUserHandler({
            username: username,
            age: +age,
        })
    };

    return (
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
                   onChange={(event) => setAge(+event.target.value)}/>

            <button type={"submit"}/>
        </form>
    );
};

export default AddUser;