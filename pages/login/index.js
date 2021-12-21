import React, { useState } from 'react'
// import {FaUserAlt} from 'react-icons/fa'
// import {FaEyeSlash} from 'react-icons/fa'
// import {FaEye} from 'react-icons/fa';

const index = () => {
    // const [hidePassword,setHidePassword] =useState("password");
    // const [userName,setUserName] = useState("");
    // const [password,setPassword] = useState("");
    // const handelHidePasswordClick=()=>{
    //     if(hidePassword==="password"){
    //         setHidePassword("text");
    //     }else{
    //         setHidePassword("password");
    //     }
    // }
    // const handelLoginClick=(e)=>{
    //     e.preventDefault();
    //     console.log('userName',userName);
    //     console.log('password',password);
    //     if(true){
    //         Router.push('/dashboard')
    //     }
        
    // }
    return (
        <div className="loginPage">
           {/* <div className="loginPageLeft"></div>
            <div className="loginPageRight">
                <h1>LOGIN</h1>
            <form>
                <label for="username"><b>Username</b></label><br></br>
                <i>{FaUserAlt}</i>
                <input onChange={(e)=>setUserName(e.target.value)} type="text" id="username" name="username"/>
                <span className="inputFieldIcons"><FaUserAlt/></span><br></br>
                <label for="password"><b>Password</b></label><br></br>
                <input onChange={(e)=>setPassword(e.target.value)} type={hidePassword} id="password" name="password"/>
                <span onClick={handelHidePasswordClick} className="inputFieldIcons">
                    {hidePassword==="text"?<FaEyeSlash/>:<FaEye/>}
                </span><br></br>
                <input onClick={(e)=>handelLoginClick(e)} id="submitBitton" type="submit" value="Login"/>
            </form>
            </div> */}
        </div>
    )
}

export default index
