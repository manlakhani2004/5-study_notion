import React from "react";
import Templates from "../componets/Templates";
import login from "../asserts/login.jpg";
function Login(props)
{
    let setIsLogined = props.setIsLogined;
    return(
        <Templates 
        setIsLogined = {setIsLogined}
        heading="Welcome Back"
        desc1="Build skills for today, tomorrow, and beylond"
        desc2="Education to future-proof your career"
        formtype="login"
        img={login}
        ></Templates>
    )
}

export default Login;