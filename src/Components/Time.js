import React from 'react'

function Time() {
    const time = new Date().toLocaleTimeString()
    return (
        <div>
            <h3>Time is {time}</h3>
        </div>
    )
}

export default Time
