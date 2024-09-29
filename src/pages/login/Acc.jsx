import Login from './ui/login'
import SignUp from './ui/SignUp'

import { useState } from 'react';

export default function Account() {

    const data = [
        { title: 'Login', action: 0 },
        { title: 'Sign Up', action: 1 }
    ]

    const [checkSign, setCheckSign] = useState(0)
    const [changeColor, setChangeColor] = useState('')

    function handleChangeSign(v , i) {
        setCheckSign(v)

    }
    
    
    return (
        <div className='loginBg  xl:h-[100vh]  flex justify-around gap-24 xl:gap-0 py-20  flex-wrap items-center duration-500'>
            <div className='text-white space-y-6'>
                <h1 className=' text-6xl text-center'><span className='text-[#7300FF] font-extrabold'>C</span>ine Sphere</h1>
                <h2 className='text-6xl md:text-7xl font-extrabold text-center'>The world’s Largest <br /> Movie Library </h2>
            </div>
            <div className='py-12 px-4 md:px-20 shadow-sm shadow-white bg-[#ffffff10] backdrop-blur-md border-[1px] rounded-[30px] space-y-3  border-[#ffffff20]'>
                <div className='text-white space-y-4'>
                    <div className='flex items-center justify-center gap-3' >
                        {
                            data.map(
                                (e, index) =>
                                    <>
                                        <button id={e.index} className={`${e.action == 0 ? 'font-bold' : 'text-[#a473ff]'} text-2xl  `}onClick={() => handleChangeSign(e.action , index)}>{e.title}</button>
                                        <hr className={`w-8 rotate-90 ${index == 1 ? 'hidden' : ''} `} />
                                    </>
                            )
                        }
                    </div>
                </div>
                <div className='duration-700'>
                {
                    checkSign == 0 ? <Login />  : <SignUp/>
                }
                </div>

            </div>
        </div>
    )
}