import React, { useState } from 'react'
import axios from 'axios'
import { UserDataContext } from "../../context/userContext";
import { useNavigate } from 'react-router-dom';

function LoginPopUp({setShowLogin,state = "Login"}) {
    const [currentState,setCurrentstate]=useState(state);
    const [username,setusername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate=useNavigate();

    const {user,setUser}=React.useContext(UserDataContext);

    const Handeluserdata = async (e) => {
        e.preventDefault();
    
        if (currentState === "Sign up") {
            const userData = { username, email, password };
            const response = await axios.post('http://localhost:4000/users/register', userData);
    
            if (response.status === 201) {
                setCurrentstate("Login");
            }
        } else {
            const userData = { email, password };
            const response = await axios.post('http://localhost:4000/users/login', userData);
    
            if (response.status === 200) {
                const data = response.data;
                setUser(data.user);
                setShowLogin(false);
                localStorage.setItem('token',data.token);
                navigate('/Cart');
                // navigate('/');
            }
        }
    
        setusername("");
        setEmail("");
        setPassword("");
    };
    return (
        <div className='fixed h-full w-full z-10 bg-zinc-900 bg-opacity-30 flex justify-center items-center'>
            <form className='place-self-center w-[max(26vw,280px)] h-[max(50vh,390px)] text-gray-500 bg-white flex flex-col gap-[25px] p-[25px_30px] rounded-lg text-[14px] animate-fadeIn'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-zinc-600 text-2xl font-bold'>{currentState==="Sign up"?"Sign Up":"Log In"}</h2>
                    <i onClick={()=>setShowLogin(false)} className="fa-solid fa-xmark text-xl hover:text-zinc-900 hover:cursor-pointer"></i>
                </div>
                <div className="inputUser">
                    {currentState==="Login"?<></>:<input className="block w-full rounded-md mt-3 outline-none px-3 py-2 border-2" type="text" placeholder="Name" value={username} onChange={(e)=>setusername(e.target.value)} name="name"/>}
                    <input 
                        className="block w-full rounded-md mt-3 outline-none px-3 py-2 border-2" 
                        type="email" 
                        placeholder="Email ID" 
                        name="email" value={email} 
                        onChange={(e)=>setEmail(e.target.value)} 
                        required
                    />
                    <input 
                        className="block w-full rounded-md mt-2 outline-none px-3 py-2 border-2" 
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)} 
                        required
                    />
                    <input 
                        className="block mt-4 mb-2 px-3 py-2 bg-orange-400 px-2 py-1 rounded-md text-white font-medium hover:bg-orange-300" 
                        type="submit" 
                        value={currentState==="Sign up"?"Sign up":"Log In"}
                        onClick={(e)=>Handeluserdata(e)}
                    />
                    {currentState==='Login'?
                        <a className="mt-5 text-zinc-500">Dont have Account? <span onClick={()=>setCurrentstate("Sign up")} className='text-orange-300 cursor-pointer'>Sign up</span></a>:
                        <a className="mt-5 text-zinc-500">have Account alredy? <span onClick={()=>setCurrentstate("Login")} className='text-orange-300 cursor-pointer'>Login</span></a>
                    }
                </div>
                <p className='text-[10px] mt-1'>By creating this account, you agree to our<span className='text-orange-300 cursor-pointer'>Privacy Policy</span> &<span className='text-orange-300 cursor-pointer'>Cookie Policy</span>.</p>
            </form>
        </div>
    )
}

export default LoginPopUp