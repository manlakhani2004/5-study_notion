import React from "react";
import Templates from "../componets/Templates";
import signup from '../asserts/signup.jpg';

function Signup(props)
{
    let setIsLogined = props.setIsLogined;

    return(
    <Templates setIsLogined = {setIsLogined}
    heading="join the millions learning to code with StudyNotion for free"
    desc1="Build skills for today, tomorrow, and beylond"
    desc2="Education to future-proof your career"
    formtype="signup"
    img={signup}
    >
    </Templates>
    );
}

export default Signup;