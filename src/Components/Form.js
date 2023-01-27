import React, { useState } from 'react'

function Form() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")


    function handleFirstName(events) {
        setFirstName(events.target.value);

    }
    function handleLastName(events) {
        setLastName(events.target.value);

    }
    // console.log(firstName);

    function handleOnsubmit(event) {
        event.preventDefault();
        console.log("HERE")
        console.log({
            fname: firstName,
            lname: lastName
        })
    }

    return (
        <div>
            <form onSubmit={handleOnsubmit}>
                <input onChange={handleFirstName} placeholder="FirstName" type="text" value={firstName}></input>
                <input onChange={handleLastName} placeholder="LastName" type="text" value={lastName}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Form
