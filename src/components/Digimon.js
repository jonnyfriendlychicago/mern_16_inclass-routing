// import React from 'react'; 
import { useLocation } from 'react-router-dom';

function Digimon () {
    const {state} = useLocation(); 
    console.log ('STATE: ', state); 

    return (
        <>
        {/* <div> Digimon</div> */}
        <div>
            <img src={state.img} alt={state.name} />
            <h2>{state.name}</h2>
            <p>{state.level}</p>
        </div>
        </>
    )
    



}; 

export default Digimon; 
