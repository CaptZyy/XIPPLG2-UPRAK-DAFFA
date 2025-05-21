import React from 'react'
import ErorPage from '../Pages/ErorPage'
import { Link } from 'react-router-dom'

function Content() {
  return (
    <div className=' mx-auto px-4 mt-16 max-w-[1300px]'>
        <div className='text-teal-300 uppercase font-bold text-sm mb-3'>
            kategori
        </div>
        <h2 className='uppercase mb-2 text-4xl font-bold text-white'> Mau belajar apa hari ini?</h2>
        <p className="text-slate-400 text-2xl mb-14">Temukan Tutorial Sesuai Minat Mu!</p>
        
        
        <div className="flex grid-cols-3 gap-4 h-[260px] ">
                <Link to="/eror" className='rounded-2xl py- px-8 bg-slate-800 shadow-md '>
                    <div>
                        <span className='flex justify-center items-center rounded-lg text-white bg-indigo-600 p-4 w-12 h-12 mx-3 mt-9'>
                            <svg className='h-6 w-6  'xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                            </svg>
                        </span>
                    </div>
                    <h3 className='text-white mt-4 text-3xl ml-2'>Basic Programing</h3>
                    <div>
                        <p className='text-slate-300 text-lg justify-center items-center ml-2'> Baca tutorial dasar-dasar pemrograman menggunakan C, C++, C#, Java, Javascript, dan masih banyak lagi.</p>
                    </div>
                </Link>
            
            


            <Link to='/eror' className='rounded-2xl py- px-8 bg-slate-800 shadow-md '>
                <div>
                    <span className='flex justify-center items-center rounded-lg text-white bg-orange-600 p-4 w-12 h-12 mx-3 mt-9'>
                        <svg className='h-6 w-6'xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                        </svg>
                    </span>
                </div>
                <h3 className='text-white mt-4 text-3xl ml-2'>Web Programing</h3>
                <div>
                    <p className='text-slate-300 text-lg justify-center items-center ml-2'> Baca tutorial cara membuat web. Mulai dari HTML, CSS, JS, PHP, MySQL, Codeigniter, React, dan masih banyak lagi.</p>
                </div>
            </Link>

            <Link to='/eror' href="" className='rounded-2xl py- px-8 bg-slate-800 shadow-md '>
                <div>
                    <span className='flex justify-center items-center rounded-lg text-white bg-blue-600 p-4 w-12 h-12 mx-3 mt-9'>
                        <svg className='h-6 w-6'xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-code" viewBox="0 0 16 16">
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
                        <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708"/>
                        </svg>
                    </span>
                </div>
                <h3 className='text-white mt-4 text-3xl ml-2'>Tutorial Lainnya</h3>
                <div>
                    <p className='text-slate-300 text-lg justify-center items-center ml-2'>Baca tutorial dalam kategori lainnya seperti Mobile programming, Game programming, IoT, Blockhain, dan masih banyak lagi.</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Content