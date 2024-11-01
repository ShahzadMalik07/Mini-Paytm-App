import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Users = () => {
    const [user, setUser] = useState([])
    const [filter, setfilter] = useState("")
   

    
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/search?filter="+filter, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((response) => {
            setUser(response.data.user)
            })


    }, [filter])
    return (
        <div className='flex flex-col px-8 '>
         
            <div className="mb-1 text-xl font-semibold" >Users</div>
            <input onChange={(e) => { setfilter(e.target.value) }} className='p-1 border border-2px-solid' type="text" placeholder='Search users...' />
            {user?.map((user)=><User key={user._id} user={user} />)}
            
            



        </div>
    )
}

export default Users

function User({user}) {
    const navigate = useNavigate()
    return <div className='flex justify-between mt-3'>
        <div className='flex items-center'>
            <div className='w-10 h-10 bg-green-300 rounded-full flex justify-center items-center'>{user.firstname[0].toUpperCase()}</div>
            <div className='ml-2 '>{user.firstname}</div>
        </div>
        <button onClick={()=>{
            navigate("/send?id="+ user._id + "&name=" + user.firstname)
        }} className='px-2 py-1 bg-black text-white rounded-md flex items-center'>Send Money</button>
    </div>
}
