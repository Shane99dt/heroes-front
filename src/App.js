import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/form" element={<AddStudentForm/>}/>
          <Route path="/students/:id" element={<ViewStudent/>}/>
          <Route path="/students/success" element={<Success/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App