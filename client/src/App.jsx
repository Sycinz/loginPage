import Nav from './components/Nav'
import Form from './components/Form'
import Footer from './components/Footer'
import {useState} from 'react'
import './App.scss'

function App() {
  const [formData, setFormData] = useState({user: '', psswd: '', psswdRepeat: ''})

  return (
    <>
      <Nav />
      <Form 
        formData={formData}
        setFormData={setFormData}  
      />
      <Footer />
    </>
  )
}

export default App