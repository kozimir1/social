import React from "react";
import spinner from "../../img/Spinner.svg";

const Preloader = (props)=>{
   return (
       <div style={{textAlign: "center",}}><img  role={'main'} src={spinner} alt=""></img></div>
)

}
export default Preloader