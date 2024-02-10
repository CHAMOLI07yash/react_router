import { useEffect, useState } from "react"
import { useLoaderData } from 'react-router-dom'
export default function Github(){
    // const [data,setData]= useState([])

    // useEffect(()=>{
    //   fetch("https://api.github.com/users/CHAMOLI07yash")
    //   .then(res =>res.json())
    //   .then(
    //     data=> {console.log(data)
    //     setData(data) } 
    //   )
    // },[])
    const data = useLoaderData()
    return(
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/CHAMOLI07yash')
    return response.json()
}