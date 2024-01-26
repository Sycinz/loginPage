import { FaUser, FaLock } from "react-icons/fa";

function Form(props) {
    const {formData, setFormData} = props

    // handling subnmit <button>
    const handleSubmit = (event) => {
        const {name, value} = event.target

        // Saving login data in sessionStorage
        Object.keys(formData).map(v => {
            sessionStorage.setItem(formData[v], v)
        })
    }

    // handler that changes formData object value on every change
    const handleChange = (event) => {
        const {id, value} = event.target

    // setting previous formData state + overwriting new values 
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }))

        Object.keys(formData).map(v => {
            console.log(`sessionStorage values [${v}]: ${sessionStorage.getItem(v)}`)
        })
    }

    console.log(formData)

    return (
        <form name="form" onSubmit={handleSubmit}>
            <h1>Login page</h1>
            <div className="inputs">
                <div className="inputs-container">
                    <FaUser className="icon" id="user" /><input id="user" onChange={handleChange} type="text" value={formData.user} />
                </div>
                <div className="inputs-container">
                    <FaLock className="icon" id="lock" /><input id="psswd" onChange={handleChange} type="password" value={formData.psswd} />
                </div>
            </div>
            <button>Login</button>
        </form>
    )
}

export default Form