// import React from "react";
import { useParams} from "react-router-dom"; 

function Math() {
    const {a,b} = useParams(); 
    console.log('WHAT ARE PARAMS', a, b, typeof a, typeof b);  

    return (
        <div>
            <p>It's a mathematical certainty. </p>
            <div> 
                {a} + {b} = {Number(a) + Number(b)}
            </div>
        </div>
    )
}

export default Math; 