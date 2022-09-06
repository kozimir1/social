import profilePageReducer, {addPostActionCreator, deletePost} from "./profilepage-reduser";

import React from "react";

const state = {
    posts: [
        {id: 1, message: 'Hi in my fist prob post', likesCount: `15`},
        {id: 2, message: "It's my first post", likesCount: `0`},],
}

test('length of post should be increment', () => {
//   1.start data
    const action = addPostActionCreator(`hello`)
    const state = {
        posts: [
            {id: 1, message: 'Hi in my fist prob post', likesCount: `15`},
            {id: 2, message: "It's my first post", likesCount: `0`},],
    }
   // 2. Actions
    const newState = profilePageReducer(state,action)
// 3. expectation
    expect(newState.posts.length).toBe(3)
});

test('message of new post is correct', () => {
//   1.start data
    const action = addPostActionCreator(`hello`)
   // 2. Actions
    const newState = profilePageReducer(state,action)
// 3. expectation
    expect(newState.posts[2].message).toBe(`hello`)
});
test('after delete posts length should be decrement', () => {
//   1.start data
    const action = deletePost(1)
   // 2. Actions
    const newState = profilePageReducer(state,action)
// 3. expectation
    expect(newState.posts.length).toBe(1)
});
test('after deleting posts length should`t be decrement if id incorrect', () => {
//   1.start data
    const action = deletePost(1000)
   // 2. Actions
    const newState = profilePageReducer(state,action)
// 3. expectation
    expect(newState.posts.length).toBe(2)
});
