import { Search, Menu, TriangleAlert, X } from 'lucide-react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
// import plugin from 'tailwindcss';

export default function Nav() {
    const [displaySearch, setDisplaySearch] = useState('hidden');
    const [film, setFilm] = useState('');

    const [multiple, setMutliple] = useState([])

    function handleInputChange(e) {
        const value = e.target.value;
        setFilm(value);
        setDisplaySearch(value === '' ? 'hidden' : 'block');
    }

    

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTFkNDgxN2Y5MDQ1NjIyMTQyZmZkNjdhMDhiMmQxNSIsIm5iZiI6MTcyNzk1NDEyNi4xNDAyMDIsInN1YiI6IjY2ZjdkZDc5MmM0YmRjOWRiMDVmMjUwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I4uN8-MLcRsvD1cf1yZXXaMcTW4_xRqa7z1Jqbrw9gE'
        }
    };
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/multi?query=${film}&include_adult=false&language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => setMutliple(response.results))
            .catch(err => console.error(err));
    }, [film])

    const navigate = useNavigate()

    return (
        <div className='relative z-[1000]'>
            <header className=" lg:fixed z-50 flex flex-wrap lg:justify-start lg:flex-nowrap w-full text-sm py-2 px-1 ">
                <nav className="max-w-[95rem] w-full mx-auto px-4 lg:flex md:items-center md:justify-between bg-[#7300FF60] rounded-2xl backdrop-blur-lg   ">
                    <div className="flex items-center justify-between">
                        <NavLink to={'/'}>
                            <h1 className='text-4xl  text-white text-nowrap flex items-center'>
                                <span className='font- text-[#7300FF] text-6xl'>C</span><span>ine sphere</span>
                            </h1>
                        </NavLink>
                        <div className="lg:hidden">
                            <button type="button" className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-[#7300FF]  text-white shadow-sm hover:bg-[#7300FF80] focus:outline-none focus:bg-[#7300FF60] disabled:opacity-50 disabled:pointer-events-none" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
                                <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                                <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                <span className="sr-only">Toggle navigation</span>
                            </button>
                        </div>
                    </div>
                    <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow lg:block text-white  lg:text-xl py-3 lg:py-0" aria-labelledby="hs-navbar-example-collapse">
                        <div className="flex flex-col gap-5 mt-5 lg:flex-row lg:items-center lg:justify-end lg:mt-0 md:ps-5">
                            <NavLink to={'/Upcoming'} className='hover:text-[#7300FF] duration-500'>Upcoming</NavLink>
                            <a href="#" className='hover:text-[#7300FF] duration-500'>Shows</a>
                            <a href="#" className='hover:text-[#7300FF] duration-500'>Fanart</a>
                            <NavLink to={'/Account'} className='hover:text-[#7300FF] duration-500'>Account</NavLink>
                            <div className={`border bg-[#7300FF10] w-80  border-[#a473ff] rounded-xl flex items-center pr-2`}>
                                <input
                                    value={film}
                                    className={`bg-transparent outline-none text-white text-sm w-full px-6 py-3 `}
                                    type='search'
                                    placeholder='Search'
                                    onChange={handleInputChange}
                                />
                                <Search color='white' size={26} />
                            </div>

                        </div>

                    </div>
                </nav>
            </header>

            <div className={`lg:fixed backdrop-blur-lg rounded-xl bg-black/20 xl:w-[50%] h-96  lg:left-[50%] p-3  z-50 top-28 ${displaySearch} overflow-auto 
                    [&::-webkit-scrollbar]:w-1
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full 
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-[#7300FF10]
                    dark:[&::-webkit-scrollbar-thumb]:bg-[#7300FF]`}>
                {/* Search results will be displayed here */}
                {
                    multiple && multiple.length > 0 ?
                        multiple.map(movie =>
                            movie?.media_type != 'person' ?
                                <a href='' className='text-white cursor-pointer' onClick={() => navigate(`/${movie?.id}?type=${movie?.media_type}`)}>
                                    <div className='flex justify-start items-center gap-3 m-2'>
                                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w300/${movie?.poster_path}` : "/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.avif"} alt="" className="w-32 rounded-tr-3xl rounded-bl-3xl border-2 border-violet-500 bg-white" />
                                        <div className='flex flex-col justify-center items-start gap-2'>
                                            <h1 className="md:text-2xl text-lg font-bold">{movie?.title} {movie.name}</h1>
                                            <p className='text-sm text-gray-200 font-semibold'>{String(movie?.overview).split(' ').slice(0 , 30).join(' ')} {String(movie?.overview).split(' ').length < 30 ? '' : <span className='text-[#a473ff]'>see more</span> }</p>
                                            <i className='bg-indigo-500 text-white py-1 px-2 rounded-full capitalize'>{movie?.media_type}</i>
                                        </div>
                                    </div>
                                    <hr />
                                </a> : ''

                        )
                        : <div className='text-white text-2xl flex flex-col items-center gap-3 m-4'>
                            <TriangleAlert size={40} />
                            <span>No Movie or Tv show found</span>

                        </div>
                }
            </div>
        </div>
    );
}
