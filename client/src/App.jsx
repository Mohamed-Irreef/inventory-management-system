import './App.css'
import CompanyRegister from './dashboard/Components/CompanyRegister'
import TermsAndConditions from './dashboard/Components/TermsAndCondition'
import EmailVerification from './dashboard/Pages/EmailVerification'
import Home from './dashboard/Pages/Home'

import Login from './dashboard/Pages/Login'
import Signup from './dashboard/Pages/Signup'
import { ContextProvider } from './global-states/ContextApi'
import Landpage from './landing-page/pages/Landpage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
 

  return (
    <>

    <ContextProvider>
      <Router>
      <Routes>
        <Route path='/' element={<Landpage/>} />
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Home/>}/>
        <Route path='/privacy-policy' element={<TermsAndConditions/>}/>
        <Route path='/company-registration' element={<CompanyRegister/>}/>
        <Route path='/account-activation' element={<EmailVerification/>}/>
    
      </Routes>
    </Router>
    </ContextProvider>
    
    </>
  )
}

export default App
