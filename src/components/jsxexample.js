import React from "react";

const Hello = ()=>{
    // return(
    //     <div>
    //         <h2>JSX Example</h2>
    //     </div>
    // )

    return React.createElement('div', 
    {id: 'p', class: 'dummy'},
    React.createElement('h2',null, "Using create element instead JSX")
    )
}
export default Hello;