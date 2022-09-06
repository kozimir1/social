import React from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";

export const WithRouter = (Component) => {
    const WithRouterWrapper= (props)=>{
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component {...props} router={{params, navigate,location}}/>
        )
    }
    return WithRouterWrapper
};

