import React from 'react';
import cl from "./../Dialogs.module.css";


const PersonMessage = (probs) => {
    return (

            <div className={cl.message}>{probs.message}</div>
    )
}


export default PersonMessage