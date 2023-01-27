import React, { createContext } from "react";
import A from "./A";

const data = createContext();
const data1 = createContext();

function Parent() {

    const name = "sunil";
    const age = 26;
    return (
        <>
            <data.Provider value={name}>
                <data1.Provider value={age}>
                    <A />
                </data1.Provider>
            </data.Provider>
        </>
    )
}
export { data, data1 }
export default Parent;
