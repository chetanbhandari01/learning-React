

import { useLoaderData } from 'react-router-dom'
function Github(){
    const data = useLoaderData()
    // const [data ,setData]=useState([])
    // useEffect (()=>{
    //     fetch('https://api.github.com/users/chetanbhandari01')
    //     .then(response => response.json())
    //     .then(data=>{
    //         setData(data)
    //     })
    // },[])
    return (
        <div className="flex text-left  m-10 bg-gray-600 text-white p-6 text-3xl">
            <img src  ={data.avatar_url} alt="Git picture" className='m-4 mt-1' width={100}  />
            Github Name:{data.name}<br/>
            Github Following:{data.following}
            
        </div>
    )
}
export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/chetanbhandari01')
    return response.json()
}