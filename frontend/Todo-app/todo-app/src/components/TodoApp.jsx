import { useState } from 'react'
import './TodoApp.css' 

export default function TodoApp() {
    return (
        <div className="TodoApp">
            Todo Management Application

            <LoginComponent />
            <WelcomeComponent ></WelcomeComponent>


        </div>

    ) 

}

function LoginComponent() {

    const [username,setUsername] = useState('in28minutes')

    function handleUsernameChange(event){
        console.log(event.target.value);
        setUsername(event.target.value)

    }

    return (
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/> 
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="pa ssword" /> 
                </div>
            </div>
            <div>
                <button type="button" name="login">Login</button>
            </div>

        </div>
    )

}

function WelcomeComponent() {
    return (
        <div className="welcome">
            Welcome  component

        </div>
    )

}