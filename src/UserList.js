import React, { useEffect } from 'react'
import faker from 'faker'

const UserList = ({ list }) => {
    return (
        <div>
            {list && list.map(user => <div >
                <img className=" imgss" src={faker.image.avatar()}></img>
                {user.name}
                <br />
                {user.phone}
                <br />
                {user.email}
                <br />
                {user.address.city}
            </div>)}
        </div>
    )
}

export default UserList
