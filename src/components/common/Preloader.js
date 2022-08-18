import React from "react";
import spinner from "../../img/Spinner.svg";

const Preloader = (props)=>{
   return (
       <div style={{textAlign: "center"}}>{props.isFetching ? <img src={spinner} alt=""></img> : null}</div>
)

}
export default Preloader