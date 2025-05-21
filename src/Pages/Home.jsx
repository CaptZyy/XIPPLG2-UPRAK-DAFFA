import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Content from '../Component/Content'
import CardBlog from '../Component/CardBlog'
import Footer from '../Component/Footer'


function Home() {
  return (
    <div className='bg-[#0f172a] h-full  '>
        <Navbar/>
        <Hero/>
        <Content/>
        <CardBlog/>
        <Footer/>
        
    </div>
  )
}

export default Home