import { useEffect, useState } from "react"
import Slider from "react-slick";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import MovieInfo from "./MovieInfo";


export default function SecondSlider() {

    const [genre, setGenre] = useState()


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US&page=1')
            .then(res => res.json())
            .then(res => setGenre(res.genres))
    }, [])

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <button
                className='border border-white rounded-full p-2 absolute right-0 -bottom-20 z-50 bg-[#a473ff50]'
                onClick={onClick}>
                <ChevronRight color="#ffffff" />
            </button>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <button
                className='border border-white rounded-full p-2 absolute right-16 -bottom-20 z-50 bg-[#a473ff50]'
                onClick={onClick}>
                <ChevronLeft color="#ffffff" />
            </button>
        );
    }

    const [tvShows, setTvShows] = useState([])
    const [ShowIndex, setShowIndex] = useState(0)

    var settings = {
        className: "secondSlider",
        dots: false,
        infinite: true,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // autoplay: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "0px",
        slidesToScroll: 1,
        arrows: true,
        swipeToSlide: true,
        afterChange: (i) => setShowIndex(i),
        responsive: [
            {
                breakpoint: 1360,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1
                }
            },
            

        ]


    };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=091d4817f9045622142ffd67a08b2d15')
            .then(Response => Response.json())
            .then(Response => setTvShows(Response.results))
    }, [])

    return (
        <div className="mt-32 mb-48">
            <div className="absolute h-[120vh] w-full bg-gradient-to-r z-30 from-[#000000]  to-70% to-transparent">
            </div>
            <div className="">
                    {tvShows.map((v, i) => i == ShowIndex ? <img key={i} src={`https://image.tmdb.org/t/p/original/${v.backdrop_path}`} className="t9iil absolute" /> : '')}
                
                <div className="flex flex-col items-center lg:flex-row justify-around z-50 relative top- md:top-24  xl:top-56">
                    <div className="relative z-50 ">
                        {
                            tvShows.map((v, i) =>
                                <div key={i} >
                                    {ShowIndex == i ? <MovieInfo
                                        name={[v.title, v.name]} year={[v.release_date, v.first_air_date]}
                                        Genre={[genre.map((va) => va.id == v.genre_ids[0] ? va.name : ''), genre.map((va) => va.id == v.genre_ids[1] ? va.name : '')]}
                                        desc={v.overview} /> : ''}
                                </div>
                            )
                        }
                    </div>
                    <div className=" lg:w-[50%] relative left-10 lg:left-0">
                        <Slider {...settings} >
                            {tvShows.map((v, i) =>
                                <div key={i} className="">
                                    <img src={`https://image.tmdb.org/t/p/w300/${v.poster_path}`} alt="" className="w-32 lg:w-52 border-4 border-[#7300FF] rounded-tr-3xl rounded-bl-3xl" />
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}