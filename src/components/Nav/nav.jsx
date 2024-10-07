import { Search, Menu, TriangleAlert } from 'lucide-react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate  , NavLink} from 'react-router-dom';

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
        <div className='relative'>
            
            <nav className='relative xl:absolute pl-0 lg:pl-20 w-full top-0 z-50 text-white gap-28 justify-around xl:justify-start flex items-center py-5'>
                <NavLink to={'/Home'}> 
                    <h1 className='text-4xl relative bottom-3'>
                        <span className='font- text-[#7300FF] text-6xl'>C</span>ine sphere
                    </h1>
                </NavLink>
                <div className='hidden xl:flex text-2xl gap-10 items-center duration-500'>
                    <NavLink to={'/Upcoming'} className='hover:text-[#7300FF] duration-500'>Upcoming</NavLink>
                    <a href="#" className='hover:text-[#7300FF] duration-500'>Shows</a>
                    <a href="#" className='hover:text-[#7300FF] duration-500'>Fanart</a>
                    <a href="#" className='hover:text-[#7300FF] duration-500'>Plans</a>
                    <a href="#" className='hover:text-[#7300FF] duration-500'>Community</a>
                    <NavLink to={'/Account'} className='hover:text-[#7300FF] duration-500'>Account</NavLink>

                    <div className={`border bg-[#7300FF10] w-80  border-[#a473ff] rounded-xl `}>
                        <input
                            value={film}
                            className={`bg-transparent outline-none text-white text-sm w-full px-6 py-3 `}
                            type='search'
                            placeholder='Search'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div >
                        <Search color='white' size={26} />
                    </div>
                </div>

                <button className='block xl:hidden'>
                    <Menu color='#ffffff' />
                </button>
            </nav>

            <div className={`backdrop-blur-lg rounded-xl bg-black/20 w-[50%] h-96 left-[50%] p-3 absolute z-50 top-28 ${displaySearch} overflow-auto`}>
                {/* Search results will be displayed here */}
                {
                    multiple && multiple.length > 0 ?
                        multiple.map(movie =>
                            movie?.media_type != 'person' ?
                                <a href='' className='text-white cursor-pointer' onClick={() => navigate(`/${movie?.id}?type=${movie?.media_type}`)}>
                                    <div className='flex justify-start items-center gap-3 m-2'>
                                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w300/${movie?.poster_path}` : "/no-img-found.png"} alt="" className="w-32 rounded-tr-3xl rounded-bl-3xl border-2 border-violet-500 bg-white" />
                                        <div className='flex flex-col justify-center items-start gap-2'>
                                            <h1 className="md:text-2xl text-lg font-bold">{movie?.title} {movie.name}</h1>
                                            <p className='text-sm text-gray-200 font-semibold'>{movie?.overview}</p>
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
