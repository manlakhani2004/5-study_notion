import React from "react";
import sir from "../asserts/sir.jpeg"
function PopularCourses() {
    return (
        <section className="flex flex-col mt-9 gap-2 w-11/12 max-w-[1250px] mx-auto justify-center items-center">
            <div className="heading text-white  flex flex-col gap-2 pt-6">
                <p className=" font-bold text-lg text-center text-green-400">OUR COURSES</p>
                <h1 className="font-bold text-3xl pb-4">Explore Our Popular Online Courses</h1>
            </div>

            <div className="packages flex gap-3 ">
                <div className="p1 bg-gray-200 p-8 w-[380px] rounded-lg ">

                    <div className=" flex flex-col gap-2 justify-center">
                        <h1 className=" text-2xl w-[90%]">Basic Fundamentals for Software <br></br> Engineering</h1>
                        <div className="flex  items-center gap-2"><img className=" rounded-full" src={sir} height={30} width={30}></img> <span> By Man Lakhani</span></div>
                        <h3 className=" text-green-600 font-semibold">50 lectures (190 hrs)</h3>
                        <div className=" py-2 px-3 rounded-md bg-slate-50 font-semibold">
                            $100 All Course / $15 per month
                        </div>
                        <button className=" py-2 px-4 border border-green-700 rounded-xl  hover:bg-green-500 font-bold transition-all duration-300">
                            ENROLL NOW!
                        </button>
                    </div>
                </div>

                <div className="p2 bg-gray-200  p-8 w-[380px] rounded-lg ">

                    <div className=" flex flex-col gap-2 justify-center">
                        <h1 className=" text-2xl w-[90%]">HTML, CSS, and Javascript for Web Developers</h1>
                        <div className="flex  items-center gap-2"><img className=" rounded-full" src={sir} height={30} width={30}></img> <span> By Man Lakhani</span></div>
                        <h3 className=" text-green-600 font-semibold">100 lectures (250 hrs)</h3>
                        <div className=" py-2 px-3 rounded-md bg-slate-50 font-semibold">
                            $140 All Course / $20 per month
                        </div>
                        <button className=" py-2 px-4 border border-green-700 rounded-xl  hover:bg-green-500 font-bold transition-all duration-300">
                            ENROLL NOW!
                        </button>
                    </div>
                </div>

                <div className="p3 bg-gray-200  p-8 w-[380px] rounded-lg ">

                    <div className=" flex flex-col gap-2 justify-center">
                        <h1 className=" text-2xl w-[90%]">Introducing to Programming with WordPress</h1>
                        <div className="flex  items-center gap-2"><img className=" rounded-full" src={sir} height={30} width={30}></img> <span> By Man Lakhani</span></div>
                        <h3 className=" text-green-600 font-semibold">50 lectures (190 hrs)</h3>
                        <div className=" py-2 px-3 rounded-md bg-slate-50 font-semibold">
                            $100 All Course / $15 per month
                        </div>
                        <button className=" py-2 px-4 border border-green-700 rounded-xl  hover:bg-green-500 font-bold transition-all duration-300">
                            ENROLL NOW!
                        </button>
                    </div>
                </div>
            </div>
        
        </section >


    )

}

export default PopularCourses