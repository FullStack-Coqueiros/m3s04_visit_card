import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { HomePage } from '../pages/home/HomePage'
import { ErrorPage } from '../pages/error/ErrorPage'

export const AppRoutes = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  )
}