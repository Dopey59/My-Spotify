//Fontawesome + react router links
import { BrowserRouter, Route, Switch, Link, Routes} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

//Page redirected by "Routes"
import HomePage from './Pages/Spotiflop.js'
import Album from './Pages/Album.js'
import Artist from './Pages/Artist.js'
import Gender from './Pages/Gender.js'

// CSS links
import './App.css'
import './index.css';
import './Template.css'


library.add(faArrowRight)
  function App() {
   return (
     <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="album" element={<Album />} />
         <Route  path="Artist" element={<Artist />} />
         <Route  path="Gender" element={<Gender />} />
     </Routes>
   )
  }



export default App