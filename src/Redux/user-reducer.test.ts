
import react from "react";
import {follow, initialStateTypeUsers, setUsers, unFollow, userArrType, usersReducer} from "./Users-reducer";
let startState: initialStateTypeUsers

beforeEach(() => {
        startState = {
            users: [{
                name: 'Kirril',
                id: 5,
                uniqueUrlName: 'ffasfsdhfryer.fasre.ru',
                photos: {
                    small: 'fasfdfhfd',
                    large: 'fsafgf'
                },
                status: 'fsafg',
                followed: true,
            }],
            pageSize: 5,
            totalPageCount: 0,
            currentPage: 0,
            isFetching: true
        }
    }
)


test('change followed check', () => {


    const action = follow(5)

    const testState = usersReducer(startState, action)

    expect(testState.users[0].followed).toBe(true)
    expect(testState.users[0].id).toBe(5)
})

test('change unfollowed check', () => {

    const action = unFollow(5)

    const testState = usersReducer(startState, action)

    expect(testState.users[0].followed).toBe(false)
    expect(testState.users[0].id).toBe(5)
})


test('set users test', () => {

    const action = setUsers(startState.users)

    const testState = usersReducer(startState, action)

    expect(testState.users.length).toBe(2)

})
