import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PrivateRoute({isLogined,children})
{
    let navigate = useNavigate();

    if(isLogined)
    {
        return children
    }
    else
    {
        navigate('/login');
    }
}

export default PrivateRoute;