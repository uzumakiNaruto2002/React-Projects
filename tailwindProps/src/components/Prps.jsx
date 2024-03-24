import React from 'react'

const Prps = (prop) => {
    console.log("props: ", prop);
  return (
    <div>
        <h1>How are you {prop.channel}</h1>
        <h2>I think your age is {prop.obj.age}</h2>
    </div>
  )
}

export default Prps