import React from "react";
import cl from './FormControl.module.css'
import {Field} from "redux-form";

const FormControl=({input, meta: {touched, error}, children,...props})=>{
const hasError= touched && error
return (
    <div>
        <div className={cl.formItem + " " + (hasError ? cl.error: undefined)}>
            {children}
        </div>
        <div> {hasError && <span className={cl.errorMessage}>{error}</span>}</div>
    </div>

)
}
export const TextAria=(props) =>{
    const {input, meta, ...restProps} = props
    return <FormControl {...props} >
        <textarea {...input} {...restProps}/>
    </FormControl>
}
export const Input =(props) =>{
    const {input, meta, ...restProps} = props
    return <FormControl {...props} ><input {...input} {...restProps}/></FormControl>
}

export const createField =(placeholder, name, validate, component, props={}, text='') =>{
    return <div>
     <Field placeholder={placeholder} name={name}
           validate={validate}
           component={component} {...props}/>{text}
    </div>
}



// export const TextAria = ({input, meta, ...props}) => {
//     const error= meta.touched && meta.error
//     return (
//         <div>
//             <div className={cl.formItem + " " + (error ? cl.error: undefined)}>
//                 <textarea {...input} {...props}/>
//             </div>
//             <div> {error && <span className={cl.errorMessage}>{meta.error}</span>}</div>
//         </div>
//
//     )
// }
// export const Input = ({input, meta, ...props}) => {
//     const error= meta.touched && meta.error
//     return (
//         <div>
//             <div className={cl.formItem + " " + (error ? cl.error: undefined)}>
//                 <input {...input} {...props}/>
//             </div>
//             <div> {error && <span className={cl.errorMessage}>{meta.error}</span>}</div>
//         </div>
//
//     )
// }