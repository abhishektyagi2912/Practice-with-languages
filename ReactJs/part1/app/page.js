"use client";
import React, { useState } from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// const Page = () => {
//   const [marks, setMarks] = useState(100);

//   return (

//     <>
//       <h1 className=' font-sans text-xl text-cyan-400 '>Page {marks}</h1>
//       <button onClick={()=>{
//         setMarks(90)
//       }} className=' bg-black px-4 text-white py-5 '>Button</button>
//     </>
//   );
// }

// export default Page;

const Page = () => {
  const [name, setname] = useState("Abhishek")
  return (
    <>
      {/* <Header user={name} /> */}
      <div>
        user: {name}
      </div>
      {/* <Link href='/About'> About </Link>
      <Link href='/Project'> Project </Link> */}
      <Header />
      <Footer />
    </>
  )
}

export default Page