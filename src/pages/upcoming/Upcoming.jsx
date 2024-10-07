import { useEffect, useState } from 'react'
import MoviesPosters from '../assets/Login.jpg'

export default function Upcoming() {

    const [upcoming, setUpcoming] = useState([])

    useEffect(() => {

        async function fetchUpcomingMovies() {
            await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setUpcoming(response.results))
        }

        fetchUpcomingMovies()
    }, [])

    return (
        <div className='flex flex-col'>
            <div className="absolute h-[110vh] w-full bg-gradient-to-t z-30 from-[#000000]  to-90% to-transparent">
            </div>
            <img src={MoviesPosters} alt="" className=" " />

            <div className='text-white z-50 absolute bottom-32 w-full items-center flex justify-between px-10'>
                <div>
                    <h1 className='text-4xl font-bold'>Get Ready for Action: Upcoming <br /> Blockbusters You Can't Miss!</h1>
                    <p>Prepare for an adrenaline-packed season with our upcoming blockbusters! <br /> From thrilling action
                        sequences to heart-pounding adventures, these movies <br /> will keep you on the edge of your seat.
                        Mark your calendars for an unforgettable <br /> cinematic experience!
                    </p>
                </div>

                <div>
                    <select name="" id="" className='outline-none rounded-tr-xl bg-[#7300FF20] border border-white  rounded-bl-xl py-2 px-3'>
                        <option value="movie" className='bg-black '>Movies</option>
                        <option value="Tv" className='bg-black '>Tv Shows</option>
                    </select>
                </div>
            </div>


            <div className='z-50 mt-32 text-white px-10'>
                <h1 className='text-3xl font-bold'>UpComing Movies</h1>
                <div className='mt-10'>
                    <span className='text-2xl font-semibold '>October</span>
                </div>
                <hr className="border-[#a473ff90] " />

                {
                    upcoming.map(v => v.release_date.split('-')[1] === '10' ?
                        <div className='flex gap-6 items-center m-10'>
                            <div>
                                <span className='text-3xl font-bold border-[#7300FF] border-2 p-6 rounded-full text-[#7300FF] bg-[#7300FF40] '>{v.release_date.split('-')[2]}</span>
                            </div>
                            <div className='flex gap-3'>
                                <img src={`https://image.tmdb.org/t/p/w200/${v.backdrop_path}`} alt="" className="w-32 rounded-2xl" />
                                <div>
                                    <h2 className='text-xl font-bold'> {v.title}</h2>
                                </div>
                            </div>
                        </div> : '')
                }
            </div>
        </div>
    )
}