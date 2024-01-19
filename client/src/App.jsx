// import Nav from './components/Nav'
// import Form from './components/Form'
// import Footer from './components/Footer'
import {useState, useEffect } from 'react'
import './App.scss'

function App() {
  // const [formData, setFormData] = useState({user: '', psswd: '', psswdRepeat: ''})
  const [backendData, setBackendData] = useState([{}])

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
    <div>
      {/* <Nav />
      <Form 
        formData={formData}
        setFormData={setFormData}  
      /> */}
      { (typeof backendData.users === `undefined`) ? (
      <p>Loading ...</p> ) : (
        backendData.users.map((user, i) => (
        <p key={i}>{user}</p>
        )))}
      {/* <Footer /> */}
    </div>
  )
}

export default App