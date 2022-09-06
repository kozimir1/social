import React from "react";
import cl from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getSomeOneProfileThunk, getStatusThunk, setStatusThunk} from "../../../Redux/profilepage-reduser";
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
            if (!profileId){
                this.props.router.navigate("login")
            }
                profileId = this.props.authorizedUserId

        }

        setTimeout(()=>{
            this.props.getStatusThunk(profileId)
        },1000)
        this.props.getSomeOneProfileThunk(profileId)

    }


    render() {
        return (
            <div className={cl.profile}>
                <Profile profile={this.props.profile} setStatusThunk={this.props.setStatusThunk}
                         status={this.props.status} isAuth={this.props.isAuth}/>
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
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId,})



export default compose(
    connect(mapStateToProps, {getSomeOneProfileThunk,getStatusThunk,setStatusThunk}),
    WithRouter,
    // withAuthRedirect
)
(ProfileContainer)
//compose заменяет нижние 3
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

// let WithRouterProfile = WithRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, {getSomeOneProfileThunk})(WithRouterProfile)