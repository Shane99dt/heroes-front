import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AddHero from './pages/AddHero'
import Hero from './pages/Hero'
import Heroes from './pages/Heroes'
import HeroPower from './pages/HeroPower'
import Home from './pages/Home'

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/heroes" element={<Heroes/>}/>
          <Route path="/heroes/:slug" element={<Hero/>}/>
          <Route path="/heroes/add-hero" element={<AddHero/>}/>
          <Route path="/heroes/:slug/powers" element={<HeroPower/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App