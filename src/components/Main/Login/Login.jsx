import React from 'react';
import {reduxForm} from "redux-form";
import {formControl, Input} from "../../common/FormsControl";
import {required} from "../../../util/validators/validators";
import {connect} from "react-redux";
import {login} from "../../../Redux/auth-reduser";
import {compose} from "redux";
import cl from "./../../common/FormControl.module.css";
import {withAuthRedirectToProfile} from "../../../hoc/withAuthRedirect";
import {WithRouter} from "../../../hoc/withRouter";


const LoginForm=({handleSubmit, error})=>{
    return (
        <form onSubmit={handleSubmit}>
            {/*<div>*/}
            {formControl(`Login`,`login`, [required], Input)}
                {/*<Field placeholder='Login' name='login'*/}
                {/*       validate={[required]}*/}
                {/*       component={Input}/>*/}
            {/*</div>*/}
            {formControl(`Password`,`password`, [required], Input)}
            {/*<div>*/}
            {/*    <Field name='password'*/}
            {/*           validate={[required]}*/}
            {/*           placeholder='Password'  component={Input}/>*/}
            {/*</div>*/}
            {formControl(null,`rememberMe`, [], Input, {type:"checkbox"}, `remember me`)}
            {/*<div>*/}
            {/*    <Field type="checkbox" name='rememberMe' component={Input}/> remember me*/}
            {/*</div>*/}
            <div>
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
        props.login(formData.login,formData.password, formData.rememberMe)
    }
    return (
        <div>
            <h2>
                Login
            </h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    );
};

export default compose(
    WithRouter,
withAuthRedirectToProfile,
    connect(null,{login})
)(Login)
// connect(null,{login} )(Login);