import {useState} from 'react'

const Profile = () => {
    const [myProfile, setMyProfile] = useState({
        firstname : "Sara",
        lastname : "medjmadj",
        job : " Stagière ISTQB",
        city : "Lille"
    })

    const {firstname, lastname, job, city} = myProfile

  return (
  <>

  <div>
  <h1>{firstname} {lastname} {job} {city} </h1>

  </div>
 

  
  </>


  )
}

export default Profile