import React, { useState } from 'react'
import { useEffect } from 'react'

const Github = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/rajneesh-y")
        .then(response=>response.json())
        .then(data=>{
            setData(data)
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-3xl p-4 text-white'>
      Github followers:{data.following}
      <img src={data.avatar_url} alt="Git Pic" width={300}/>
    </div>
  )
}

export default Github
