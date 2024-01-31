import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { type } from "@testing-library/user-event/dist/type";

function LoginForm(props) {

    let setIsLogined = props.setIsLogined;

    let navigate = useNavigate();

    const[formdata,setformdata] = useState({
        email:'',
        password:''
    })
    
    function Storeformdetails(event)
    {
        setformdata((previousvalue)=>
        {
            return{
                ...previousvalue,
                [event.target.name]:event.target.value
            }
        })
    }

    function changehandler(e)
    {
        e.preventDefault();
        if(formdata.email.length >= 3 && formdata.password.length >=5)
        {
            setIsLogined(true)
            navigate('/dashboard');
            toast.success("Logined");
        }
        else
        {
            toast.error("Password must have 5 latter")
        }
        console.log("printing login data...")
        console.log(formdata);

    }

    return(
    <div className="mt-4">
        <form className="flex flex-col">
            <div className="flex flex-col mb-3">
            <label className="text-white text-md"> Email Address <span className=" text-red-600 text-xl">*</span></label>
                <input type="email"
                name="email"
                onChange={Storeformdetails}
                value={formdata.email}
                placeholder="Enter Your Email"
                className=" bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300 w-[95%] text-white"></input>
            </div>

            <div className="flex flex-col mb-6">
            <label className="text-white"> Password <span className="text-red-600 text-xl">*</span></label>
                <input                   
                type="password"
                name="password"
                onChange={Storeformdetails}
                value={formdata.password}
                placeholder="Enter password"
                className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300  w-[95%] text-white"></input>
                <span className=" text-sm text-blue-400 flex justify-end pr-6 pt-1">Forget Password</span>
            </div>

            <button onClick={changehandler} className= " bg-yellow-400 py-2 px-4 rounded-md w-[95%]">
                Login
            </button>
        </form>
    </div>
    );

}

export default LoginForm