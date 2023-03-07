import react from "react";
import {addPostActionCreator, ProfilePageType, profileReducer, updateNewPostActionCreator} from "./Propfile-reducer";
test('add new post for profile', ()=> {


    const initialState: ProfilePageType = {
        posts: [
            {id: 1, message: 'Hi, how are my posts! ', like: 12},
            {id: 2, message: 'Its my first post!', like: 18}
        ],
        newPostText: ''
    }

    const action = addPostActionCreator()

    const testState = profileReducer(initialState, action)

    expect(testState.posts.length).toBe(3)
    expect(testState.posts[2].like).toBe(0)
})

test('update new post text for profile', ()=> {
    const initialState: ProfilePageType = {
        posts: [
            {id: 1, message: 'Hi, how are my posts! ', like: 12},
            {id: 2, message: 'Its my first post!', like: 18}
        ],
        newPostText: ''
    }

    const action = updateNewPostActionCreator('hello world')

    const testState = profileReducer(initialState, action)

    expect(testState.newPostText).toEqual('hello world')

})