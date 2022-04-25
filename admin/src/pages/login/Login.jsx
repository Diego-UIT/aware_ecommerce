import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, Link } from 'react-router-dom'
import { login } from "../../redux/callAPI"
import './login.scss'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password })
        navigate('/orders')
    }

    return (
        <div className="login">
            <div className="wrapper">
                <h1 className="title">Log in</h1>
                <form>
                    <label>Username</label>
                    <input
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleClick}>
                        Log in
                    </button>
                </form>
                <Link to="/forgotPass">
                    <div className="link-register">
                        Forgot password
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Login