import {useEffect, useState} from 'react'; 
import axios from "axios"; 
import {Link} from 'react-router-dom'; 

function Home() {
    // const [digimonList, digimonListSetter] = useState({}); 
    // can't believe I made typo above!
    const [digimonList, digimonListSetter] = useState([]); 
    useEffect ( () => {
        axios
            .get('https://digimon-api.vercel.app/api/digimon')
            .then((res) => digimonListSetter(res.data))
            .catch((err) => console.log('ERROR', err)); 
    }, []); 

    return (
        <div className='container'>
            {digimonList.map((digimon) =>  
                 <div key = {digimon.img}> 
            
            {/* above is the way to do this with api; below is bad practice with react in general.  Using index is a bad shortcut from earlier times */}
            {/* {digimonList.map((digimon, indexyo) =>  */}
                {/* <div key = {indexyo}> */}
                
                    <img src={digimon.img} alt={digimon.name} />
                    <h2>{digimon.name}</h2>
                    <p>{digimon.level}</p>
                    <Link to={`${'digimons'}/${digimon.name}`} state={digimon}>
                        {' '}
                        Get Details
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Home; 