import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAudio } from '@fortawesome/free-solid-svg-icons'


import React, { useState, useEffect } from 'react';


function Gender() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/genres?page=1')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);

    return (
        <>
        <header>
            <div className='navContainer'>
                <ol>
                    <li className='item'><a href='/'><FontAwesomeIcon icon={faFileAudio} beat size="xl" style={{",--fa-primary-color": "#813d9c", "--fa-secondary-color": "#deddda", "--fa-secondary-opacity": "0.5",}} /></a></li>
                </ol>
                <ol>
                    <li className='item'><a href='Album'>Albums</a></li>
                </ol>
                <ol>
                    <li className='item'><a href='Artist'>Artistes</a></li>
                </ol>
                <ol>
                    <li className='item'><a href='Gender'>Genres</a></li>
                </ol>
            </div>
        </header>
        <div className="App-header lol" style={{backgroundColor:'#282c34'}}>
            <div className='listContainer'>
                <h1 className='title'>Les genres qui ont <span>flopés</span>.</h1>
                <ul className="list">
                    {data.map(item => (
                        
                        <div className="liBlock">
                            <li className="itemsList" key={item.id}>{item.name}<img src={item.cover_small}/>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    </>
      );
    }


export default Gender;