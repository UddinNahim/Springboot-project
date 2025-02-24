import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './security/AuthContext'
function LoginComponent() {

    const [username, setUsername] = useState('in28minutes')
    const [password, setpassword] = useState('')
    const [showSuccessMessage, setshowSuccessMessage] = useState(false)
    const [showerrorMessage, setshowerrorMessage] = useState(false)

    const navigate = useNavigate();

    const authContext = useAuth(); 


    function handleUsernameChange(event) {
        // console.log(event.target.value);
        setUsername(event.target.value)

    }
    function handlepasswordChange(event) {
        // console.log(event.target.value);
        setpassword(event.target.value)

    }
    function handleSubmit() {
        // console.log(username)
        // console.log(password)
        if (username === 'in28minutes' && password === 'dummy') {
            authContext.setAuthenticated(true)

            console.log('success')
            setshowSuccessMessage(true)
            setshowerrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            authContext.setAuthenticated(false)

            console.log("failed")
            setshowSuccessMessage(false)
            setshowerrorMessage(true)
        }

    }
    function SuccessMessageComponent() {
        if (showSuccessMessage) {
            return <div className="successMessage">Authenticate Successfully</div>
        }

        return null


    }
    function ErrorMessageComponent() {
        if (showerrorMessage) {
            return <div className="errorMessage">Authentication Failed.Please check your credentials</div>
        }

        return null


    }

    return (
        <div className="Login">
            <h1>Time to Login </h1>
            {showSuccessMessage && <div className="successMessage">Authenticate Successfully</div>}
            {showerrorMessage && <div className="errorMessage">Authentication Failed.Please check your credentials</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlepasswordChange} />
                </div>
            </div>
            <div>
                <button type="button" name="login" onClick={handleSubmit}>Login</button>
            </div>

        </div>
    )

}

export default LoginComponent