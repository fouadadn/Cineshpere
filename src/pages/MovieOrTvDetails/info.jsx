import { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { Dot, Bookmark, Play, Star ,TriangleAlert } from 'lucide-react';
import YouTube from "react-youtube";
import Footer from "../../components/footer/footer";
import profil from '../assets/profil.jpg'


export default function Info() {

    // window.scrollTo(0, 0)

    const [movie, setMovie] = useState({})
    const [cast, setCast] = useState([])
    const [videos, setVideos] = useState([])
    const [similar, setSimilar] = useState([])
    const [Genre, setGenre] = useState([])
    const [review, setReviws] = useState([])
    const [urlMediaType] = useSearchParams()
    const params = useParams();
    const media_type = urlMediaType.getAll('type')
    const navigate = useNavigate()

    const opts = {
        height: '810',
        width: '100%',

    };

    useEffect(() => {
        async function fetchdMoviedetails() {


            await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=091d4817f9045622142ffd67a08b2d15`)
                .then(response => response.json())
                .then(response => setMovie(response))
        }

        async function fetchdTvdetails() {


            await fetch(`https://api.themoviedb.org/3/tv/${params.id}?api_key=091d4817f9045622142ffd67a08b2d15`)
                .then(response => response.json())
                .then(response => setMovie(response))
        }

        async function fetchdTvdCast() {


            await fetch(`https://api.themoviedb.org/3/${media_type}/${params.id}/credits?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setCast(response.cast))
        }

        async function fetchdMovieCast() {


            await fetch(`https://api.themoviedb.org/3/${media_type}/${params.id}/credits?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setCast(response.cast))
        }

        async function fetchdMovieVideo() {
            await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setVideos(response.results))
        }

        async function fetchdTvVideo() {
            await fetch(`https://api.themoviedb.org/3/tv/${params.id}/videos?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setVideos(response.results))
        }

        async function fetchSimilarMovies() {
            await fetch(`https://api.themoviedb.org/3/${media_type}/${params.id}/recommendations?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setSimilar(response.results))
        }

        async function fetchSimilarTvs() {
            await fetch(`https://api.themoviedb.org/3/${media_type}/${params.id}/recommendations?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setSimilar(response.results))
        }

        async function fetchGenreMovies() {
            await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setGenre(response.genres))
        }

        async function fetchGenreTvs() {
            await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setGenre(response.genres))
        }

        async function fetchMovieReview() {
            await fetch(`https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setReviws(response.results))
        }

        async function fetchTvReview() {
            await fetch(`https://api.themoviedb.org/3/tv/${params.id}/reviews?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US`)
                .then(response => response.json())
                .then(response => setReviws(response.results))
        }


        media_type == 'movie' ? fetchdMoviedetails() : fetchdTvdetails()
        media_type == 'movie' ? fetchdMovieCast() : fetchdTvdCast()
        media_type == 'movie' ? fetchdMovieVideo() : fetchdTvVideo()
        media_type == 'movie' ? fetchSimilarMovies() : fetchSimilarTvs()
        media_type == 'movie' ? fetchGenreMovies() : fetchGenreTvs()
        media_type == 'movie' ? fetchMovieReview() : fetchTvReview()

    }, [])

    // console.log(review)


    const year = String(movie.release_date).slice(0, 4)
    const yearTv = String(movie.first_air_date).slice(0, 4)
    let Trailer;
    videos.map(v => v.type === "Trailer" ? Trailer = v : '')

    return (
        <div className="text-white flex flex-col">
            <div className="relative">
                <div className="absolute h-[110vh] w-full bg-gradient-to-t z-30 from-[#000000]  to-90% to-transparent">
                </div>
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" className=" " />
                <div className="absolute  bottom-0 md:bottom-32 px-4 lg:px-10 z-50" >
                    <p>{media_type == 'movie' ? year : yearTv}</p>
                    <h1 className=" text-3xl lg:text-5xl font-semibold mb-3">{media_type == 'movie' ? movie.title : movie.name}</h1>
                    <div className="flex gap-2 font-semibold text-lg mb-2">
                        {
                            media_type === 'tv' ? <p>{movie.number_of_seasons} Seasons</p> : ''
                        }
                        {
                            movie.genres ?
                                movie.genres.map((v, i) =>
                                    <span key={i}>
                                        <span>{v.name} </span>
                                        {movie.genres.length - 1 !== i ? <span><Dot className="inline-block" /></span> : ''}
                                    </span>
                                )
                                : ''
                        }
                    </div>
                    <div className="flex gap-6">
                        <a href='#trailer' className='hidden sm:block'>
                            <button className='flex rounded-tr-xl backdrop-blur-lg  bg-[#7300FF] rounded-bl-xl py-1 px-2 md:px-4 md:py-2 gap-1'>
                                <Play strokeWidth={3} /><span className='text-nowrap'>Watch Trailer</span>
                            </button>
                        </a>
                        <a className='hidden sm:block'>
                            <button className='flex rounded-tr-xl bg-[#7300FF20] border border-white  rounded-bl-xl py-1 px-2 md:px-4 md:py-2 gap-1'>
                                <Bookmark strokeWidth={3} /><span className='text-nowrap'>Add to Wishlist</span>
                            </button>
                        </a>
                    </div>

                </div>
            </div>

            <div className="6 w-full bg-black z-50 mt-5 md:mt-0 px-4 lg:px-10">
                <h1 className="text-white text-4xl font-semibold my-3">Synopsis</h1>
                <p className="ztext-xl">{movie.overview}</p>
            </div>

            <div className="px-4 lg:px-10 my-24 z-50">
                {/* cast display */}
                <h1 className="text-4xl font-bold my-3">Cast</h1>
                <div className="flex gap-10 scroll overflow-auto py-4
                    [&::-webkit-scrollbar]:h-1
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full 
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-[#7300FF10]
                    dark:[&::-webkit-scrollbar-thumb]:bg-[#7300FF]">
                    {
                        cast.map((c , i) =>
                            <div key={i} className="flex items-center justify-center gap-2" >
                                <div className="rounded-full overflow-hidden bg-red-200 w-20 h-20">
                                    <img src={`https://image.tmdb.org/t/p/w300/${c.profile_path}`} alt="" className="w-20 lg:w-[113px] bottom-3 relative  " />
                                </div>
                                <div>
                                    <h1 className="text-nowrap text-lg md:text-2xl text-semibold">{c.name}</h1>
                                    <span className="text-nowrap text-sm text-[#7300ffe0] ">{c.character}</span>
                                </div>
                            </div>)
                    }
                </div>
            </div>

            {/* watch Triller */}
            <div className="z-50">
                <h1 className="text-4xl font-bold my-3 px-4 lg:px-10">Official Trailer</h1>
                <div className="flex justify-center mb-32 mt-10 " id="trailer">
                    <div className="w-[80%] h-[600px]">

                        {
                            videos[0] ? <YouTube opts={opts} videoId={Trailer?.key} id={Trailer?.id} /> : ''
                        }
                    </div>

                </div>
            </div>


            <div className="mt-32 px-4 lg:px-10">
                <h1 className="text-4xl font-semibold py-6">Similar {media_type == 'movie' ? 'Movies' : 'Shows'} for you</h1>

                <div className="flex gap-6 overflow-auto [&::-webkit-scrollbar]:h-1
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full 
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-[#7300FF10]
                    dark:[&::-webkit-scrollbar-thumb]:bg-[#7300FF] py-6">
                    {
                        similar.map((v , i) =>
                            <a href="" key={i} className="flex-shrink-0 " onClick={() => {
                                navigate(`/${v?.id}?type=${v?.media_type}`)
                            }}>
                                <img src={`https://image.tmdb.org/t/p/original/${v.backdrop_path}`} alt="" className=" w-72 md:w-96 rounded-xl" />
                                <div>
                                    <h1 className="text-xl font-semibold">{media_type == 'movie' ? v.title : v.name}</h1>
                                    <div className="flex items-center gap-2">
                                        <Star color="yellow" fill="yellow" />
                                        <span className="text-[#c0a6ff] font-bold">{String(v.vote_average).slice(0, 4)}</span>
                                        <hr className="w-3 border-[#a473ff] rotate-90" />

                                        <div className=" flex text-[#a473ff]">
                                            {
                                                Genre.map((g , i) =>
                                                    v.genre_ids[0] === g.id ? <span key={i}>{g.name}</span> : ''
                                                )
                                            }
                                            {v.genre_ids[1] ? <Dot /> : ''}
                                            {
                                                Genre.map(g =>
                                                    v.genre_ids[1] === g.id ? <span key={i}>{g.name}</span> : ''
                                                )
                                            }

                                        </div>
                                    </div>
                                </div>
                            </a>
                        )
                    }
                </div>
            </div>

            <div className="lg:px-10 px-4 py-10">
                <h1 className="text-4xl font-semibold  py-10">Reviews</h1>
                <div className="flex gap-6 overflow-auto [&::-webkit-scrollbar]:h-1
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full 
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-[#7300FF30]
                    dark:[&::-webkit-scrollbar-thumb]:bg-[#7300FF] py-6">
                    {
                        review && review.length > 0 ? review.map((v , i) =>
                            <div key={i} className=" border-2 shadow-[#7300FF] shadow-md border-[#7300FF] rounded-3xl w-[350px] md:w-[440px] flex-shrink-0 p-3">
                                <div className="flex items-center gap-3 bg-[#7300FF30] rounded-3xl px-2 py-1">
                                    <div className="border-2 border-[#7300FF] rounded-full w-20 h-20 overflow-hidden p-1">
                                        <img src={v.author_details.avatar_path ? `https://image.tmdb.org/t/p/w200/${v.author_details.avatar_path}` : profil} alt="" className="w-20 h-18 rounded-full" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">{v.author}</h2>
                                        
                                        <span className="flex gap-2"> <Star color="yellow" fill="yellow" /> <span className="text-[#7300FF] font-bold text-xl">{v.author_details.rating}</span> </span>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="h-20 pxj-3 overflow-auto [&::-webkit-scrollbar]:w-1
                                        [&::-webkit-scrollbar-track]:rounded-full
                                        [&::-webkit-scrollbar-track]:bg-gray-100
                                        [&::-webkit-scrollbar-thumb]:rounded-full 
                                        [&::-webkit-scrollbar-thumb]:bg-gray-300
                                        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                                        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 ">
                                        {v.content}
                                    </p>
                                </div>
                            </div>
                        ) :   
                        <div className="text-center w-full flex justify-center gap-3">
                            <TriangleAlert size={40} />
                            <h1 className="text-4xl font-semibold  text-white">No Reviews found</h1>
                        </div>
                    }
                </div>

            </div>

            <Footer />

        </div>
    )
}