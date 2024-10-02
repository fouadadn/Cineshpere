import Slider from "react-slick"
import { ChevronRight, ChevronLeft, Star, Dot } from 'lucide-react';
import React, { useEffect, useState } from "react";

import MovieInfo from "./MovieInfo";




export default function Movies({ title, moviesorshows, genre }) {


    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <button
                className='border border-white rounded-full p-2 absolute right-0 -bottom-20 bg-[#a473ff50]'
                onClick={onClick}>
                <ChevronRight color="#ffffff" />
            </button>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <button
                className='border border-white rounded-full p-2 absolute right-16 -bottom-20 bg-[#a473ff50]'
                onClick={onClick}>
                <ChevronLeft color="#ffffff" />
            </button>
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        // autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dotsClass: 'release',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        swipeToSlide: true,

        // fade: true,
        responsive: [
            {
                breakpoint: 1360,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    className: 'slidsghir'
                }
            }

        ]
    };

    return (
        <div className="text-white space-y-10 px-10 z-50 hhh  ">
            <h1 className="text-2xl font-bold ">{title}</h1>
            <Slider {...settings} >
                {moviesorshows.map((v, i) =>
                    <div key={i}>
                        <img src={`https://image.tmdb.org/t/p/w500/${v.backdrop_path}`} alt="" className="w-64 rounded-2xl" />
                        <div >
                            <h1 className="mt-2 font-bold">{v.title} {v.name}</h1>
                            <div className="flex mb-10  items-center gap-1">
                                <Star size={13} color='yellow' fill='yellow' />
                                <p className="text-[#7300FF]  items-center flex">
                                    <span className="text-[#c0a6ff] font-bold">{String(v.vote_average).slice(0, 3)}</span>
                                    <hr className="w-4 text-[#a473ff] rotate-90" />
                                    <div key={i} className=" ">
                                        <MovieInfo
                                            genreStyle={'text-[#a473ff] text-sm'}
                                            descDisplay={'hidden'}
                                            divDisplay={'hidden'}
                                            yearDisplay={'hidden'}
                                            Genre={[genre.map((va) => va.id == v.genre_ids[0] ? va.name : ''), genre.map((va) => va.id == v.genre_ids[1] ? va.name : '')]}
                                        />
                                    </div>
                                </p>
                            </div>


                        </div>
                    </div>
                )}
            </Slider>
        </div>
    )
}