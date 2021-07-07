import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [isLoading, changeIsLoading] = useState("loading...")
  const [personData, changePersonData] = useState({
    img: defaultImage,
    name: "Current name",
    mail: "",
    age: "",
    street: "",
    phone: "",
    password: ""
  })
  const [current, changeCurrent] = useState([])

  const fetchData = async () => {
    try {
      
      changeIsLoading("loading...")
      const response = await fetch(url)
      const data = await response.json()
      changePersonData({
        img: data.results[0].picture.large,
        name: data.results[0].name.first + " " + data.results[0].name.last,
        mail: data.results[0].email,
        age: data.results[0].dob.age,
        street: data.results[0].location.street.number +" "+ data.results[0].location.street.name,
        phone: data.results[0].phone,
        password: data.results[0].login.password
      })
  }
    catch(error){
      console.log(error)
    }
  changeIsLoading("random user")
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    changeCurrent([personData.name, "name"])
  }, [personData])

  return (
    <main>
      <div id="upper_bg" />
      <div id="user_container">
        <div id="user_container_bg" />
        <img id="user_img" src= {personData.img} alt="person" />
        <div id="user_my">My {current[1]} is</div>
        <div id="user_detail">{current[0]}</div>
        <div id="user_icons_list">
          <div className="icon" onMouseEnter={() => changeCurrent([personData.name, "name"])}><FaUser /></div>
          <div className="icon" onMouseEnter={() => changeCurrent([personData.mail, "email"])}><FaEnvelopeOpen /></div>
          <div className="icon" onMouseEnter={() => changeCurrent([personData.age, "age"])}><FaCalendarTimes /></div>
          <div className="icon" onMouseEnter={() => changeCurrent([personData.street, "street"])}><FaMap /></div>
          <div className="icon" onMouseEnter={() => changeCurrent([personData.phone, "phone"])}><FaPhone /></div>
          <div className="icon" onMouseEnter={() => changeCurrent([personData.password, "password"])}><FaLock /></div>
        </div>
        <button id="random_user" onClick={() => fetchData()}>{isLoading}</button>
      </div>
    </main>
  )
}

export default App
