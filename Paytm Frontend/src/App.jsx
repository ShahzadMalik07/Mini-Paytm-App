import './App.css'
import Dashboard from './pages/Dashboard'
import NewSign from './pages/NewSign'
import SendMoney from './pages/SendMoney'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RecoilRoot } from 'recoil';

function App() {


  return (
    <>
    <RecoilRoot>

      <BrowserRouter>

        <Routes>
          
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/send" element={<SendMoney />} />
            <Route path="/new" element={<NewSign />} />
          
        </Routes>
      </BrowserRouter>
      </RecoilRoot>


    </>
  )
}

export default App
