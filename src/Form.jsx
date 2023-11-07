function Form(props) {
    const {formData, setFormData} = props

    // handling subnmit <button>
    const handleSubmit = (event) => {
        const {name, value} = event.target
    }

    // handler that changes formData object value on every change
    const handleChange = (event) => {
        // Saving login data in sessionStorage
        Object.keys(formData).map(v => {
            sessionStorage.setItem(formData[v], v)
        })

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
            <div className="inputs">
                <input id="user" onChange={handleChange} type="text" value={formData.user} />
                <input id="psswd" onChange={handleChange} type="password" value={formData.psswd} />
                <input id="psswdRepeat" onChange={handleChange} type="password" value={formData.psswdRepeat} />
            </div>
            <button>Login</button>
        </form>
    )
}

export default Form