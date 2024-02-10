import React from 'react'
import { useSelector } from 'react-redux';

const LastName = () => {

    const surname = useSelector(state => state?.user?.lastName)

    return <div className='font-bold'>{surname}</div>
}

export default LastName
