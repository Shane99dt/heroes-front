import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AddHero from './pages/AddHero'
import Hero from './pages/Hero'
import Heroes from './pages/Heroes'
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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App