import React, { useEffect, useState } from 'react'
import "./login.css"
import { Navigate } from 'react-router-dom'
import { Use_r_state } from '../context/Store'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [idata, setIdata] = useState('')

    const { log, disp } = Use_r_state()
     
    const handleLogin = async(e)=>{
        e.preventDefault();
        try {  
            const respone = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({username, password})
            });

            const data = await respone.json();
            setIdata(data)
            console.log(data);

        } catch (error) {
            console.error("Error Loggin In :", error)
        }
    }

   
    useEffect(()=>{
        const login = () =>{
            if(username == idata.username){
            disp({type:"True"})
            }else{
                disp({type:"False"})
            }
        }
        login()
    },[handleLogin])



    return (
        <>
            { log ? <Navigate to='/product'/> :
                <div className=''>
                    <div className='background'>
                        <div className='shape'></div>
                        <div className='shape'></div>
                    </div>
                    <form  className='form' onSubmit={handleLogin}>
                        <h3>Login Here</h3>
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder='Username' id='username' value={username} onChange={(e)=> setUsername(e.target.value)} />

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Password' id='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>

                        <button className='btn' type='submit'>LogIn</button>
                    </form>
                </div>
            }
        </>

    )
}

export default Login