import React from 'react'

function Hero() {
  return (
    <div className='bg-slate-800  h-[550px]'>
        <div className='flex mx-10 '>
            <div className='pt-50 text-white w-[1200px] mx-[20px]'>
                <h1 className=' text-7xl font-bold mb-5'>Petani Kode</h1>
                <p className='text-2xl font-light '>Belajar budidaya kode <i>(coding)</i> dengan tutorial yang mudah dipahami. <i>Mostlyi</i> pakai Linux.</p>
                
                <div className='flex flex-row mt-5 gap-3 '>
                    <a href="" className='px-3 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg '>Mulai Belajar</a>
                    <a href="" className='px-3 py-2 bg-teal-400/10 border border-teal-400/50 hover:bg-teal-700 text-teal-100 rounded-lg '>Join Newsletter</a>
               </div>
            </div>
             <div className='w-[900px]'>
                <img className='w-[800px] mt-50 ' src="https://www.petanikode.com/img/petanikode-hero.svg" alt="" />
            </div>
        </div>

    </div>
 
  )
}

export default Hero