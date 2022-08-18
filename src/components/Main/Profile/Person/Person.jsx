import React from "react";
import cl from './Person.module.css'
import pic from '../../../../img/Image.jpg'

const Person = (props) => {

    return (
        <div>
            <div className={cl.image}><img src={pic} alt='картинки нет'/></div>
            <div className={cl.person}>Person</div>
        </div>

    )
}


export default Person