import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function SignupForm(props) {

    let setIsLogined = props.setIsLogined;

    let [account,setaccount] = useState("student");
    let navigate = useNavigate();


    const [formdata, setformdata] = useState(
        {
            fname: '',
            lname: '',
            email: '',
            createpass: '',
            confrimpass: '',
        }
    )

    function changeHandler(event) {
        event.preventDefault();
        if (formdata.createpass == formdata.confrimpass  && formdata.createpass.length > 3) {
            navigate("/login");
            toast.success("Account Created");
        }
        else {
            toast.error("Both Password Not Same!");
        }

        let allformdata = {
            ...formdata,
            accountType:account,
        }
        
        console.log(allformdata);

    }

    function Storeformdetails(event) {
        setformdata((previousvalue) => {
            return {
                ...previousvalue,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div>
            <div className="py-1 px-2 bg-gray-600  rounded-3xl w-fit flex gap-2 my-4">
                <button className={`${account == "student"?"bg-slate-900 text-white":" bg-transparent text-white"}     py-2 px-3 rounded-3xl transition-all duration-200`} onClick={()=> setaccount("student")}>Student</button>
                <button className={`${account == "instructor"?" bg-slate-900 text-white":" bg-transparent text-white"} py-2 px-3 rounded-3xl `}  onClick={()=> setaccount("instructor")}>Instructor</button>
            </div>

            <form onSubmit={changeHandler}>
                <div className="flex gap-4">

                    <div className="flex flex-col mb-3 w-[45%]">
                        <label  className="text-white"> First name <span className="text-red-600 text-xl">*</span></label>
                        <input type="text"
                            onChange={Storeformdetails}
                            name="fname"
                            value={formdata.fname}
                            placeholder="Enter First Name"
                            className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300 text-white"
                        ></input>
                    </div>

                    <div className="flex flex-col mb-3 w-[45%]">
                        <label className="text-white">Last name <span className="text-red-600 text-xl">*</span></label>
                        <input type="text"
                            onChange={Storeformdetails}
                            value={formdata.lname}
                            name="lname"
                            placeholder="Enter Last Name"
                            className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300 text-white"></input>
                    </div>
                </div>

                <div className="flex flex-col mb-3 ">
                    <label className="text-white">Email <span className="text-red-600 text-xl">*</span></label>
                    <input type="email"
                        onChange={Storeformdetails}
                        value={formdata.email}
                        name="email"
                        placeholder="Enter Your Email"
                        className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300  w-[94%] text-white"></input>
                </div>

                <div className="flex gap-4">
                    <div className="flex flex-col mb-3 w-[45%] ">
                        <label className="text-white">Create Password <span className="text-red-600 text-xl">*</span></label>
                        <input type="password"
                            onChange={Storeformdetails}
                            value={formdata.createpass}
                            name="createpass"
                            placeholder="Create Password"
                            className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300 text-white"></input>
                    </div>

                    <div className="flex flex-col mb-3 w-[45%]">
                        <label className="text-white">Confrim Password <span className="text-red-600 text-xl">*</span></label>
                        <input type="password"
                            onChange={Storeformdetails}
                            value={formdata.confrimpass}
                            name="confrimpass"
                            placeholder="Confrim Password"
                            className="bg-gray-600 py-2 px-4 rounded-md placeholder:text-gray-300 text-white"></input>
                    </div>
                </div>

                <div>
                    <button type="submit" className=" bg-yellow-400 py-2 px-4 rounded-md w-[95%] mt-4">Create Account</button>
                </div>
            </form>
        </div >
    );
}

export default SignupForm;