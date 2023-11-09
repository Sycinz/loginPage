import Nav from './Nav'
import Form from './Form'
import Footer from './Footer'
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