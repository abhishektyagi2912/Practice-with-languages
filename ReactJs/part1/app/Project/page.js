"use client";
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
  const [Images, setImages] = useState([]);
  const getImages = async () => {
    try {
      const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30')
      var data = response.data;
      setImages(data);
      console.log(Images);
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div>
      <button onClick={getImages} className='px-5 py-3 bg-blue-600 text-cyan-50 m-10'>Get Images</button>
      <div className='pd-10 '>
        {Images.map((image,i) => (
          <div key={i} className='m-10 inline-block'>
            {/* <h1 key={i}>{image.author}</h1> */}
            <img  src={image.download_url} alt={image.author} width={300} height={300}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page