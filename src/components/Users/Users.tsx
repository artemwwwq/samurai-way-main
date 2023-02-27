import React from 'react';
import {mapDispatchStateProps} from "./UsersContianer";
import styles from './users.module.css'

export const Users = (props: mapDispatchStateProps) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://static-cse.canva.com/blob/969178/1600w-2so4RyuRmfc.jpg',
                followed: true,
                fullName: 'Artem',
                status: 'I am a BOSS',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://static-cse.canva.com/blob/969178/1600w-2so4RyuRmfc.jpg',
                followed: true,
                fullName: 'Alexey',
                status: 'I am a BOSS',
                location: {city: 'Russia', country: 'Moscow'}
            },
            {
                id: 3,
                photoUrl: 'https://static-cse.canva.com/blob/969178/1600w-2so4RyuRmfc.jpg',
                followed: false,
                fullName: 'Tatyana',
                status: 'I am a BOSS',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 4,
                photoUrl: 'https://static-cse.canva.com/blob/969178/1600w-2so4RyuRmfc.jpg',
                followed: false,
                fullName: 'Kirill',
                status: 'I am a BOSS',
                location: {city: 'Minsk', country: 'Belarus'}
            },])
    }



    return (
        <div>
            {props.users.map(el=> <div key={el.id}>
                <span>
                    <div >
                        <img className={styles.userPhoto}  src={el.photoUrl}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={()=>{props.unfollow(el.id)}}>Unfollow</button>
                            : <button onClick={()=>{props.follow(el.id)}}>follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.fullName}</div><div>{el.status}</div>
                    </span>
                    <span>
                        <div>{el.location.country}</div><div>{el.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

