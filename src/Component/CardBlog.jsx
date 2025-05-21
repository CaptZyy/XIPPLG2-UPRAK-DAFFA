import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CardBlog() {
  const [posts, setPosts] = useState([])

  useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/posts?') 
    .then(function (response) {
      setPosts(response.data)
    })
  },[])
  console.log(posts)
  return (
    <>    
      <div className=' mx-auto px-4 mt-16 max-w-[1605px]'>
        <div className='text-teal-300 uppercase font-bold text-sm mb-3'>
            kategori
        </div>
        <h2 className='uppercase mb-2 text-4xl font-bold text-white'>Apa yang baru di Petani Kode? 🔥</h2>
        <p className="text-slate-400 text-2xl mb-14">Baca artikel terbaru yang masih fresh dan hangat!</p>
      </div>

    <div className='max-w-[1605px] mx-auto grid grid-cols-3 gap-7 px-4 mb-10'>
      {posts.slice(0, 12). map(posts => (
        <div key={posts.id} className="bg-slate-800 rounded-lg p-6 mb-4">
          <div className='flex justify-center items-center bg-teal-400 h-[240px] text-2xl font-bold  rounded-lg ' >{posts.id}</div>
          <h3 className='text-white text-xl font-bold mb-2 mt-4'>{posts.title}</h3>
          <p className="text-white">{posts.body.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
    </>
  )

}

export default CardBlog