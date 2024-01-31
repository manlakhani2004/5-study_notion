import React from "react";
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";


function Navbar(props) {
    let isLogined = props.isLogined;
    let setIsLogined = props.setIsLogined;

    function logoutHandler() {
        setIsLogined(false);
        toast.success("Logged Out");
    }
    return (
        <div className='flex justify-evenly items-center pt-5  w-[1350px] mx-auto'>

            <div>
                <Link to={'/'} className=" text-white text-3xl font-bold">
                    <h2 className='no-underlin'>Study Notion</h2>
                </Link>
            </div>

            <nav className="">
                <ul className="flex gap-5 text-white text-lg font-medium">
                    <li className="flex flex-col justify-center items-center">
                        <NavLink to={'/'} className=" opacity-90"> Home </NavLink>
                        
                    </li>
                    <li>
                        <NavLink to={'/about'}> About </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'}> Contact </NavLink>
                    </li>
                </ul>
            </nav>

            <div className='flex gap-4 text-md  font-medium text-white'>
                {!isLogined &&
                    <div>
                        <Link to={'/login'}>
                            <button className=" bg-slate-700  font-bold rounded-md py-2 px-4 border border-gray-500">Login</button>
                        </Link>
                    </div>
                }

                {!isLogined &&
                    <div>
                        <Link to={'/signup'}>
                            <button className="bg-slate-700   font-bold  rounded-md py-2 px-4 border border-gray-500">Signup</button>
                        </Link>
                    </div>
                }

                {isLogined &&
                    <div>
                        <Link to={'/'}>
                            <button onClick={logoutHandler} className="bg-slate-700   font-bold  rounded-md py-2 px-4 border border-gray-500">Logout</button>
                        </Link>

                    </div>
                }

                {isLogined &&
                    <div>
                        <Link to={'/dashboard'}>
                            <button className="bg-slate-700   font-bold  rounded-md py-2 px-4 border border-gray-500">Dashboard</button>
                        </Link>
                    </div>
                }

            </div>

        </div>
    )
}

export default Navbar