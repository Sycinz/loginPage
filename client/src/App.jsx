import Nav from './components/Nav'
import Form from './components/Form'
import Footer from './components/Footer'
import {useState, useEffect } from 'react'
import './App.scss'

function App() {
  const [formData, setFormData] = useState({user: '', psswd: '', psswdRepeat: ''})
  // const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      })
      .catch(error => console.error(`Error while fetching data: ` + error))
  }, [])

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