import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
const Users = () => {
    const [user, setUser] = useState([])
    const [filter, setfilter] = useState("")

    const token = localStorage.getItem('token');

    let loggedInUserId = null;

    if (token) {
        const decodedToken = jwtDecode(token);
        loggedInUserId = decodedToken.userId;
    }




    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/search?filter=" + filter, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((response) => {
                const filteredUsers = response.data.user.filter(user => user._id !== loggedInUserId)
                setUser(filteredUsers)
            })


    }, [filter])
    return (
        <div className='flex flex-col px-8 '>

            <div className="mb-2 text-xl font-semibold" >Users</div>
            <div className='flex items-center border rounded-lg bg-white'>
                <img className='h-8 w-8 ml-2' src="https://assetscdn1.paytm.com/movies_new/_next/static/media/search-icon-blue.4ea06561.png" alt="" />
                <input onChange={(e) => { setfilter(e.target.value) }} className='caret-[#00BAF2]  bg-transparent border-none p-3 outline-none rounded-md border text-lg stroke-1 border-2px-solid' type="text" placeholder='Search users...' />

            </div>

            {user?.map((user) => <User key={user._id} user={user} />)}





        </div>
    )
}

export default Users

function User({ user }) {
    const navigate = useNavigate()
    return <div className='flex justify-between mt-4'>
        <div className='flex items-center justify-center'>
            <div className='text-4xl'>+</div>
            {/* <div className='w-10 h-10 bg-green-500 rounded-full flex justify-center items-center'>{user.firstname[0].toUpperCase()}</div> */}
            <div className='ml-2 mt-2 text-lg font-medium '>{user.firstname.toUpperCase()}</div>
        </div>
        <button onClick={() => {
            navigate("/send?id=" + user._id + "&name=" + user.firstname)
        }} className='px-4 py-2 font-medium bg-[#00BAF2] text-white rounded-md flex items-center'>Send Money</button>
    </div>
}
