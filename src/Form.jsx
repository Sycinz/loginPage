export default function Form() {
    const handleSubmit = (event) => {
        const {name, value} = event.target
    }

    const handleChange = (event) => {
        const {name, value} = event.target
    }

    return (
        <form name="form" onSubmit={handleSubmit}>
            <label htmlFor="user">User</label><input id="user" onChange={handleChange} type="text" />
            <label htmlFor="user">User</label><input id="psswd" onChange={handleChange} type="password" />
            <label htmlFor="user">User</label><input id="psswdRepeat" onChange={handleChange} type="password" />
            <button>Login</button>
        </form>
    )
}