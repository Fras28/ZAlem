import React from "react";
import "./Admin.css"
import { useDispatch } from "react-redux";
import { asyncAppSwitch, asyncGetStatus } from "../Components/redux/slice";


export const Admin =()=>{
    const dispatch = useDispatch()

    const switchStat = () =>{
        dispatch(asyncAppSwitch())
        .then(dispatch(asyncGetStatus()))
    }
    return(
        <div>
            <button onClick={switchStat}>Status</button>
        </div>
    )
}