import Form from './Form'
import {useState} from 'react'
import './App.scss'

function App() {
  const [formData, setFormData] = useState({
    user: '', psswd: '', psswdAgain: ''
  })

  return (
    <>
      <Form 
        formData={formData}
        setFormData={setFormData}  
      />
    </>
  )
}

export default App