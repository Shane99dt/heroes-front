import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AddHero from './pages/AddHero'
import Hero from './pages/Hero'
import Heroes from './pages/Heroes'
import HeroPower from './pages/HeroPower'
import Home from './pages/Home'
import NavBar from './pages/NavBar'

const App = () => {
  return(
    <>
      <BrowserRouter>
        <NavBar/>
        <section className='px-5 pt-3'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/heroes" element={<Heroes/>}/>
            <Route path="/heroes/:slug" element={<Hero/>}/>
            <Route path="/heroes/add-hero" element={<AddHero/>}/>
            <Route path="/heroes/:slug/powers" element={<HeroPower/>}/>
          </Routes>
        </section>
      </BrowserRouter>
    </>
  )
}

export default App