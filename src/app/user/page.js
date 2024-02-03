"use client"
import { useState } from "react";
import './user.css'

export default function page() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [age, setAge] = useState("");


const addUser= async()=>{
    let data = await fetch("http://localhost:3000/api/users",{
    method:"post",
    body:JSON.stringify({name,age,email})});

  data = await data.json();
console.log(data)}
  return (
    <div>
        <h1>add user </h1>
        <input className="input" type='text' value={name} placeholder='enter your Name' onChange={(e)=>setName(e.target.value)}/>
        <input className="input" type='text' value={age} placeholder='enter your Age' onChange={(e)=>setAge(e.target.value)}/>
        <input className="input" type='text' value={email} placeholder='enter your Email' onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={addUser} className="btn" type="submit">add user</button>
    </div>
  )
}
