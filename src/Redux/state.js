let randerTreeAll=()=>{ //let - потому что перезаписываем randerTreeAll на observer
    console.log(`state was changed`)
}

const state = {
    dialogsPage: {
        persons: [
            {id: 1, name: "Max"},
            {id: 2, name: "Jake"},
            {id: 3, name: "Iren"},
            {id: 4, name: "Andreu"},
            {id: 5, name: "Mike"},
            {id: 6, name: "Victor"},
            {id: 7, name: "Kate"},
        ],
        messages: [
            {id: 1, message: "Hello"},
            {id: 2, message: "Hi"},
            {id: 3, message: "well done"},
            {id: 4, message: "well"},
        ],
        newMessage: `введите текст`
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi in my fist prob post', likesCount: `15`},
            {id: 2, message: "It's my first post", likesCount: `0`},],
        newTextPost: `Hello everybody`
    },
    navBar: {
        friends: [
            {id: 1, name: "Andrew"},
            {id: 2, name: "Sasha"},
            {id: 3, name: "Sveta"}
        ],
    }
}
window.state=state

export const addPost= ()=>{

    const newPost = {
        id: 5,
        likesCount: `1`,
        message: state.profilePage.newTextPost,
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newTextPost=""
    randerTreeAll(state)}

export const updateNewTextPost=(post)=>{
    state.profilePage.newTextPost=post
    randerTreeAll(state)
}

export const addMessage=()=> {

    const newMessage = {
        id: 3,
        message: state.dialogsPage.newMessage,
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessage=""
    randerTreeAll(state)
}
export const updateMessage=(message)=>{
    state.dialogsPage.newMessage=message
    randerTreeAll(state)
}
 export const subscribe=(observer)=>{   //наблюдатель callback
     randerTreeAll=observer
 }

export default state