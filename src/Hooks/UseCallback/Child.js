import React from 'react'
import { memo } from 'react';

function Child({learning ,count}) {

    console.log("Child Component");
     
    return (
        <div>

        </div>
    )
}



export default memo(Child)
