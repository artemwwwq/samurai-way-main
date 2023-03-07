import react from "react";
import {followAC, initialStateTypeUsers, setUsersAC, unFollowAC, userArrType, usersReducer} from "./Users-reducer";
import {mapDispatchStateProps} from "../components/Users/UsersContianer";

test('change followed check', () => {

    const initialState = {
        users: [
            {
            name: 'Kirril',
            id: 5,
            uniqueUrlName: 'ffasfsdhfryer.fasre.ru',
            photos: {
                small: 'fasfdfhfd',
                large: 'fsafgf'
            },
            status: 'fsafg',
            followed: false,
        }
        ]
    }

    const action = followAC(5)

    const testState = usersReducer(initialState, action)

    expect(testState.users[0].followed).toBe(true)
    expect(testState.users[0].id).toBe(5)
})

test('change unfollowed check', ()=> {
    const initialState = {
        users: [
            {
                name: 'Kirril',
                id: 7,
                uniqueUrlName: 'ffasfsdhfryer.fasre.ru',
                photos: {
                    small: 'fasfdfhfd',
                    large: 'fsafgf'
                },
                status: 'fsafg',
                followed: true,
            }
        ]
    }

    const action = unFollowAC(7)

    const testState = usersReducer(initialState, action)

    expect(testState.users[0].followed).toBe(false)
    expect(testState.users[0].id).toBe(7)
})


test('set users test', ()=> {
    const initialState = {
        users: [
            {
                name: 'Kirril',
                id: 7,
                uniqueUrlName: 'ffasfsdhfryer.fasre.ru',
                photos: {
                    small: 'fasfdfhfd',
                    large: 'fsafgf'
                },
                status: 'fsafg',
                followed: true,
            }
        ]
    }




    const action = setUsersAC(initialState.users)

    const testState = usersReducer(initialState, action)

    expect(testState.users.length).toBe(2)

})
