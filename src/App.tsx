import './App.css'
import 'animate.css'
import './index.css'

import {BrowserRouter, Routes,Route} from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import SettingsPage from './Pages/Settings/SettingsPage'
import WatchlistPage from './Pages/Wathlist/WatchlistPage'
// import SettingsPage from './Pages/Settings/SettingsPage'
function App() {


  return (
    <>
    {/* <HomePage /> */}
    <BrowserRouter>
          <Routes>
          <Route path='/' element={<HomePage />}> </Route>
          <Route path='/' element={<HomePage />}>
            <Route path='setting' element={<SettingsPage />}></Route>
            <Route path='watchlist' element={<WatchlistPage />}></Route>
          </Route> 
           
          
    </Routes>
    </BrowserRouter>
      
    </>
  )
}


export default App