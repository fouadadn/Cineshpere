import {Search , Menu} from 'lucide-react';
export default function Nav(){
    return(
        <nav className='relative xl:absolute pl-0 lg:pl-20  w-full top-0 z-50 text-white gap-28 justify-around xl:justify-start flex items-center py-5'>
            <div>
                <h1 className='text-4xl relative bottom-3'><span className='font- text-[#7300FF] text-6xl'>C</span>ine sphere</h1>
            </div>
            <div className='hidden xl:flex text-2xl gap-10 items-center '>
                <a href="" className='hover:text-[#7300FF] duration-500'>Upcoming</a>
                <a href="" className='hover:text-[#7300FF] duration-500'>Shows</a>
                <a href="" className='hover:text-[#7300FF] duration-500'>Fanart</a>
                <a href="" className='hover:text-[#7300FF] duration-500'>Plans</a>
                <a href="" className='hover:text-[#7300FF] duration-500'>Community</a>
                <a href="" className='hover:text-[#7300FF] duration-500'>Account</a>
                <a href="">
                    <Search/>
                </a>
            </div>

            <button className='block xl:hidden'>
            <Menu color="#ffffff" />
            </button>
        </nav>
    )
}