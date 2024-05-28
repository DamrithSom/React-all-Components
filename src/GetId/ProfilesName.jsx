import React from 'react'

const ProfilesName = (props) => {
    const {name, positions, id, getID}=props;
    console.log(props)
const heanler = ()=>{
    getID(id)
}
  return (
    <div>
        <h3>{name}</h3>
        <h3>{positions}</h3>
        <button onClick={heanler}>Click</button>
    </div>
  )
}

export default ProfilesName