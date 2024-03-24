import React, { useEffect, useState } from 'react'

const Github = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/uzumakiNaruto2002")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setData(data)
        })
    },[])

  return (
    <div>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github