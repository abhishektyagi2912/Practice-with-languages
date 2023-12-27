"use client";
import React, { useState } from 'react'

const page = () => {

  const [first, setFirst] = useState("");
  const [desc, setDesc] = useState("");
  const [main, setMain] = useState([]);
  
  const deletehandler = (i) => {
    var arr = [...main];
    arr.splice(i, 1);
    setMain(arr);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!first || !desc) {
      alert("Please fill all the fields")
      return
    }
    setMain([...main, { first, desc }]);
    setFirst("");
    setDesc("");
  }
  let renderTask = <h1>No Task Available</h1>
  if (main.length > 0) {
    renderTask = main.map((e, i) => {
      return <li key={i} className='flex items-centre justify-between mb-5'>
        <div className='flex items-center justify-between w-2/3'>
          <h1 className='text-2xl font-bold'>{e.first}</h1>
          <p className='text-lg'>{e.desc}</p>
        </div>
        <button onClick={()=>{deletehandler(i)}} className='font-bold bg-red-500 text-white px-3 py-2 rounded '>Delete</button>
      </li>
    })
  }
  return (
    <>
      <h1 className='bg-black text-white p-5 text-2xl font-bold text-center '>Abhishek's To-Do List</h1>
      <form className='flex justify-center p-5' onSubmit={submitHandler}>
        <input className='border-black border-2 m-2 p-2' type='text' placeholder='Add a task' value={first} onChange={(e) => {
          setFirst(e.target.value)
          // console.log(e.target.value)
        }} />
        <input className='border-black border-2 m-2 p-2' type='text' placeholder='Description' value={desc} onChange={(e) => {
          setDesc(e.target.value)
          // console.log(e.target.value)
        }} />
        <button className='bg-black text-white p-4 m-2 rounded-2xl '>Add</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-300 '>
        <ul>
          {renderTask} {/*mean run automatically*/}
        </ul>
      </div>
    </>
  )
}

export default page