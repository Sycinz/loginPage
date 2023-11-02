export default function Form(props) {
    const handleSubmit = (event) => {
        const {name, value} = event.target
    }

    const handleChange = (event) => {
        const {name, value} = event.target
    }

    return (
        <form name="form" onSubmit={handleSubmit}>
            <label htmlFor="user">User</label><input id="user" onChange={handleChange} type="text" />
            <label htmlFor="psswd">User</label><input id="psswd" onChange={handleChange} type="password" />
            <label htmlFor="psswdRepeat">User</label><input id="psswdRepeat" onChange={handleChange} type="password" />
            <button>Login</button>
        </form>
    )
}