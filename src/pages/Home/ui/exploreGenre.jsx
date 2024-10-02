import Slider from "react-slick"
import { ChevronRight, ChevronLeft, Star, Dot } from 'lucide-react';
import React, { useEffect, useState } from "react";
import MovieInfo from "./MovieInfo";

export default function ExploreGenres({ Genre, backdropImage }) {

    const [ShowIndex, setShowIndex] = useState(0)

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div className="flex justify-center">
                <button
                    className='border border-white rounded-full p-2 relative bottom-[108px] left-7 z-50 bg-[#a473ff50]'
                    onClick={onClick}>
                    <ChevronRight color="#ffffff" />
                </button>
            </div>

        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div className="flex justify-center ">
                <button
                    className='border border-white rounded-full p-2 relative top-56 right-7  z-50 bg-[#a473ff50]'
                    onClick={onClick}>
                    <ChevronLeft color="#ffffff" />
                </button>
            </div>

        );
    }


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        // autoplay: true,
        slidesToShow: 5,
        centerMode: true,
        className: "center",
        centerPadding: "0px",
        slidesToScroll: 1,
        dotsClass: 'release',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        swipeToSlide: true,

        afterChange: (i) => setShowIndex(i),


        // fade: true,
        responsive: [
            {
                breakpoint: 1360,
                settings: {
                    slidesToShow: 4,
                    centerMode: false,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    centerMode: false,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    centerMode: false,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1.5,
                    centerMode: false,
                    slidesToScroll: 1,
                    className: 'slidsghir'
                }
            }

        ]
    };
    let back;
    {backdropImage.map((v, i) => back =  v.backdrop_path)}

    // let listSlice = backdropImage.slice(0, 19)
    return (
        <div className="text-white mt-32 relative">
            <div className="absolute h-[120vh] w-full bg-gradient-to-r z-30 from-[#000000]  to-70% to-transparent">
            </div>

            <div className="h absole">

                <img src={`https://image.tmdb.org/t/p/original/${back}`} className="t9iil" />
                
                
            </div>

            <div className="relative top-">
                <div className="absolute bottom-56 z-50 px-10">
                    <div className="relative ">
                        {/* {
                            listSlice.map((v, i) =>
                                <div key={i} >
                                    {ShowIndex == i ? <MovieInfo
                                        name={[v.title, v.name]} year={[v.release_date, v.first_air_date]}
                                        Genre={[Genre.map((va) => va.id == v.genre_ids[0] ? va.name : ''), Genre.map((va) => va.id == v.genre_ids[1] ? va.name : '')]}
                                        desc={v.overview} /> : ''}
                                </div>
                            )
                        } */}

                        {/* <div  >
                             <MovieInfo
                                name={[listSlice[6].title, listSlice[6].name]} year={[listSlice[6].release_date, listSlice[6].first_air_date]}
                                Genre={[Genre.map((va) => va.id == listSlice[6].genre_ids[0] ? va.name : ''), Genre.map((va) => va.id == listSlice[6].genre_ids[1] ? va.name : '')]}
                                desc={listSlice[6].overview} />
                        </div> */}

                    </div>
                </div>
                <div className="z-50  px-10 relative top-28">
                    <Slider {...settings} >
                        {
                            backdropImage.map((v, i) =>
                                <div key={i}>
                                    <img src={`https://image.tmdb.org/t/p/original/${v.backdrop_path}`} className="w-[150px] md:w-[200px] rounded-xl brightness-50" />
                                    <p className="relative bottom-[84px] md:bottom-[113px] w-[150px] md:w-[200px] flex justify-center items-center h-[84px] md:h-[114px] font-bold text-xl">
                                        <span >
                                            {Genre[i] != undefined ? Genre[i].name : ''}
                                        </span>
                                    </p>
                                </div>
                            )
                        }
                    </Slider>

                </div>
            </div>
        </div>
    )
}