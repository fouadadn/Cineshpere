import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import Nav from "../../nav";

import MovieInfo from "./MovieInfo";



export default function HomePageSlider({ movieDetail }) {

    const [movieIndex, setMovieIndex] = useState(0)

    const [genre, setGenre] = useState()

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        className: 'bigSlider',
        afterChange: (i) => setMovieIndex(i),

    };
    const Movies5 = movieDetail.slice(6, 11)

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US&page=1')
            .then(res => res.json())
            .then(res => setGenre(res.genres))
    }, [movieIndex])

    return (
        <div>
            <Nav />
            <div className="relative ">
                <div className="absolute h-[120vh] w-full bg-gradient-to-r z-30 from-[#000000]  to-70% to-transparent">
                </div>
                <div >
                    {
                        Movies5.map((v, i) =>
                            <div key={i} >
                                {movieIndex == i ? <MovieInfo
                                    name={[v.title, v.name]} year={[v.release_date, v.first_air_date]}
                                    Genre={[genre.map((va) => va.id == v.genre_ids[0] ? va.name : ''), genre.map((va) => va.id == v.genre_ids[1] ? va.name : '')]}
                                    desc={v.overview} /> : ''}

                            </div>
                        )
                    }
                    <Slider {...settings} >
                        {Movies5.map((v, i) =>
                            <img key={i} src={`https://image.tmdb.org/t/p/original/${v.backdrop_path}`} />
                        )}
                    </Slider>
                </div>
            </div>


        </div>
    )
}