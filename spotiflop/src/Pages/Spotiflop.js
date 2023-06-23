import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileAudio } from '@fortawesome/free-solid-svg-icons'

import '../Template.css'





function HomePage(){
    return(
        <>
        <header className="App-header" style={{gap:'3vh'}}>
        <FontAwesomeIcon icon={faFileAudio} beat size="xl" style={{",--fa-primary-color": "#813d9c", "--fa-secondary-color": "#deddda", "--fa-secondary-opacity": "0.5",}} />
            <h1 style={{fontSize: '50px'}} >Bienvenue sur Spoti<span style={{color: '#6235F5'}}>flop</span>.</h1>
            <FontAwesomeIcon icon="fa-brands fa-spotify" />
            <a href='Album'><FontAwesomeIcon icon="arrow-right" style={{color: '#552FD4', background : 'white', borderRadius: '50%', padding: '20px', cursor:'pointer'}} /></a>
            
        </header>

        </>
    )
}

export default HomePage;