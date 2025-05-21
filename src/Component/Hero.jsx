import React from 'react'

function Hero() {
  return (
    <div className='bg-slate-800 h-[568px]'>
        <div className='flex '>
            <div className='pt-50 text-white w-[700px] mx-[120px]'>
                <h1 className=' text-7xl font-bold mb-5'>Petani Kode</h1>
                <p className='text-3xl font-light '>Belajar budidaya kode <i>(coding)</i> dengan tutorial yang mudah dipahami. <i>Mostlyi</i> pakai Linux.</p>
                
                <div className='flex flex-row mt-5 gap-3 '>
                    <a href="" className='px-3 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg '>Mulai Belajar</a>
                    <a href="" className='px-3 py-2 bg-teal-400/10 border border-teal-400/50 hover:bg-teal-700 text-teal-100 rounded-lg '>Join Newsletter</a>
               </div>
            </div>
             <div className='w-[700px] m-44 '>
                <img src="https://www.petanikode.com/img/petanikode-hero.svg" alt="" />
            </div>
        </div>

    </div>
 
  )
}

export default Hero