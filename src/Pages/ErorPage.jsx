import React from 'react'
import {Link} from 'react-router';

function ErorPage() {
  return (
    <div className="bg-slate-800 flex justify-center pt-[20vh] h-screen w-screen">
        <div className="bg-petaniDark text-white h-max items-center leading-8 ">
          <img src="404.svg" width={300}/>
          <h1 className='text-[#2dd4bf] font-bold'>404 NOT FOUND</h1>
          <h1 className='text-2xl font-bold'>Halaman Hilang </h1>
          <p className='text-sm font-extralight'>Mungkin saja karena sudah dihapus atau belum dibuat. coba hubungi <br /> admin untuk info lebih lanjut atau kembali ke home! </p>
          
          <Link to="/">
             <button  className='bg-teal-600 p-2 rounded-lg mt-10 cursor-pointer hover:bg-petani'>Kembali ke home</button>
          </Link>
          
         
          
        </div>
    </div>
    
  )
}

export default ErorPage