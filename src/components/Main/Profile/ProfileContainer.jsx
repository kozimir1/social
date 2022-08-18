import React from "react";
import cl from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getSomeOneProfileThunk} from "../../../Redux/profilepage-reduser";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {WithRouter} from "../../../hoc/withRouter";
import {compose} from "redux";



class ProfileContainer extends React.Component {
    constructor(props) {
        super (props);
        this.props = props
    }
    componentDidMount() {
        let profileId = this.props.router.params["*"]
        if (!profileId) {
            profileId = 2
        }
        this.props.getSomeOneProfileThunk(profileId)
    }

    render() {
        return (
            <div className={cl.profile}>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}



  //    (props)=>{
  //     if (!props.isAuth) return <Navigate to='/login'/>
  //     return <ProfileContainer {...props} />
  // }



// const ProfileContainerWithRouter= (props)=>{
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return (
//         <AuthRedirectComponent {...props} router={{params}}/>
//     )
// }
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,

})

export default compose(
    connect(mapStateToProps, {getSomeOneProfileThunk}),
    WithRouter,
    withAuthRedirect)
(ProfileContainer)
//compose заменяет нижние 3
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

// let WithRouterProfile = WithRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, {getSomeOneProfileThunk})(WithRouterProfile)