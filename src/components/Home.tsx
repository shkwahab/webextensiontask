import React from 'react'
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
const Home = () => {
    const [isConnected, setConnected] = useState(false)
    return (
        <React.Fragment>
            <div className=" py-8  px-10  w-[350px]  bg-black text-white  ">
                <div className="flex  items-center space-x-8">
                    <div>
                        <FaBars className='text-2xl ' />
                    </div>
                    <div className='text-2xl font-semibold font-[Arial]'>
                        Working Vpn
                    </div>
                </div>
                <div className='flex justify-center  mt-10 mb-4'>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={isConnected} onChange={(e)=>{
                            setConnected(e.target.checked)
                        }} className="sr-only peer" />
                        <div className="relative w-12 h-6 rounded-full peer bg-red-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-500"></div>
                    </label>
                </div>
                    <div className=' flex justify-center text-lg font-semibold'> 
                        {isConnected?"Connected":"Disconnected"}
                    </div>
            </div>

        </React.Fragment>
    )
}

export default Home