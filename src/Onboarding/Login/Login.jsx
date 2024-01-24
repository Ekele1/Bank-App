import { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'

const Login=()=>{
        const navigate = useNavigate()
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")


    const handleLogin =()=>{
        const presentUser = JSON.parse(localStorage.getItem("allAcountUsers"))

        const logedInuser = presentUser.find((e)=> e.email === email && e.password === password)

        if(logedInuser){
            localStorage.setItem("loggedinUser", JSON.stringify(logedInuser))
            navigate("/home")
        }else{
            alert("you don't have an account with us pls signUp")
        }
        // console.log(logedinUser)
    }
    return(
        <div className='login-wrapper'>
            <div className='bck-img'>
                <img src="https://media.istockphoto.com/id/1447011226/photo/hydroponic-robot-farming.webp?b=1&s=170667a&w=0&k=20&c=qNXOhn1pX0rnMTQuzOcaTVIhjHRqh8N6IqgzrFPQXec=" alt="" />
            </div>
            <div className='login-body'>
                <div className='loginh1'><h1>Login</h1></div>
                <div className='email'>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='email'/>
                </div>
                <div className='email'>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='password'/>
                </div>
                <div className='loginbutt'>
                    <button onClick={handleLogin}>Login</button>
                </div>
                <div className='pass'>
                    <p>Forgot password? or go back to <Link to="/">SignUp</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login