import React from "react";
import cl from './Posts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../util/validators/validators";
import {TextAria} from "../../../common/FormsControl";

const maxlength50 = maxLengthCreator(50)
const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="addNewPostEl" component={TextAria}
                       validate={[required, maxlength50]}
                       placeholder="Hello everybody"/>
            </div>
            <button className="new">add Post</button>
        </form>

    )
}
const AddPostReduxForm = reduxForm({form: 'addPost'})(addPostForm)

const Posts = (props) => {
    console.log(`Render Post`)
    const postEL = props.posts
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    // const createNewPostEl = React.createRef()
    // const onAddPost = () => {
    //     props.addPost()
    // }
    // const onPostChange = () => {
    //     const text = createNewPostEl.current.value
    //     props.newMessageChange(text)
    // }
    const createNewPost=(values)=>{
        props.addPost(values.addNewPostEl)
    }
    return (
        <div className={cl.posts}>
            <div className={cl.title}>Posts</div>
            <AddPostReduxForm onSubmit={createNewPost} />
            {postEL}
            {/*{[`fsdfsdfsdf`, ` like spread`]}*/}
        </div>
    )


}

export default Posts