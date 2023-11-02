function Form(props) {
    const {formData, setFormData} = props

    const handleSubmit = (event) => {
        const {name, value} = event.target
    }

    const handleChange = (event) => {
        const {id, value} = event.target

        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }))
    }

    console.log(formData)

    return (
        <form name="form" onSubmit={handleSubmit}>
            <div className="inputs">
                <input id="user" onChange={handleChange} type="text" value={formData.user}/>
                <input id="psswd" onChange={handleChange} type="password" value={formData.psswd}/>
                <input id="psswdRepeat" onChange={handleChange} type="password" value={formData.psswdRepeat}/>
            </div>
            <button>Login</button>
        </form>
    )
}

export default Form