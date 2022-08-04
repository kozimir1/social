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
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi in my fist prob post', likesCount: `15`},
            {id: 2, message: "It's my first post", likesCount: `0`},
        ],
    },
    navBar: {
        friends: [
            {id: 1, name: "Andrew"},
            {id: 2, name: "Sasha"},
            {id: 3, name: "Sveta"}
        ],
    }

}
export default state