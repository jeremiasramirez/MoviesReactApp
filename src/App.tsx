import './App.css'
import 'animate.css'
import './index.css'

import {BrowserRouter, Routes,Route} from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import SettingsPage from './Pages/Settings/SettingsPage'
import WatchlistPage from './Pages/Wathlist/WatchlistPage'
import ComingPage from './Pages/Coming/ComingPage'
import MoviePage from './Pages/Movie/MoviePage'
import Catalog from './Components/Catalog/Catalog'
import DiscoverPage from './Pages/Discover/Discover.Page'
import SearchPage from './Pages/Search/SearchPage'
// import SettingsPage from './Pages/Settings/SettingsPage'
function App() {


  return (
    <>
    {/* <HomePage /> */}
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />}>
            <Route path='/' element={<Catalog />}> </Route>
              <Route path='setting' element={<SettingsPage />}></Route>
              <Route path='search' element={<SearchPage />}></Route>
              <Route path='watchlist' element={<WatchlistPage />}></Route>
              <Route path='coming' element={<ComingPage />}></Route>
              <Route path='discover' element={<DiscoverPage />} />
              <Route path='discover' element={<DiscoverPage />}>
                <Route path='discover/:id' element={<DiscoverPage />} />
              </Route>
              <Route path='show/:id' element={<MoviePage />}></Route>
            </Route> 
          </Routes>
    </BrowserRouter>
      
    </>
  )
}


export default App