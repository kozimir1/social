import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControl";
import {required} from "../../../util/validators/validators";
import {connect} from "react-redux";
import {login} from "../../../Redux/auth-reduser";
import {compose} from "redux";
import cl from "./../../common/FormControl.module.css";
import {withAuthRedirectToProfile} from "../../../hoc/withAuthRedirect";
import {WithRouter} from "../../../hoc/withRouter";


const LoginForm=({handleSubmit, error,captchaURL})=>{
    return (
        <form onSubmit={handleSubmit}>
            {/*<div>*/}
            {createField(`Login`,`login`, [required], Input)}
                {/*<Field placeholder='Login' name='login'*/}
                {/*       validate={[required]}*/}
                {/*       component={Input}/>*/}
            {/*</div>*/}
            {createField(`Password`,`password`, [required], Input)}
            {/*<div>*/}
            {/*    <Field name='password'*/}
            {/*           validate={[required]}*/}
            {/*           placeholder='Password'  component={Input}/>*/}
            {/*</div>*/}
            {createField(null,`rememberMe`, [], Input, {type:"checkbox"}, `remember me`)}
            {/*<div>*/}
            {/*    <Field type="checkbox" name='rememberMe' component={Input}/> remember me*/}
            {/*</div>*/}
            <div>
                <div>{captchaURL && <img src={captchaURL}/>}</div>
                <div>{captchaURL && createField(`enter symbols`,`captcha`, [required], Input)}</div>
                {error && <div className={cl.formError}>{error}</div>}
                <div><button>Login</button></div>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'Login'
})(LoginForm)



const Login = (props) => {
    const onSubmit=(formData)=>{
        props.login(formData.login,formData.password, formData.rememberMe, formData.captcha)
    }
    return (
        <div>
            <h2>
                Login
            </h2>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
        </div>

    );
};
const mapStateToProps = (state)=> ({
    captchaURL:state.auth.captchaURL
})

export default compose(
    WithRouter,
withAuthRedirectToProfile,
    connect(mapStateToProps,{login})
)(Login)
// connect(null,{login} )(Login);