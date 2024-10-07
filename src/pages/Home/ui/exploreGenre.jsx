import Slider from "react-slick"
import { ChevronRight, ChevronLeft } from 'lucide-react';
import React from "react";

export default function ExploreGenres({ Genre, backdropImage }) {

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div className="flex justify-center">
                <button
                    className='border border-white rounded-full p-2 absolute bottom-0 right-[40%] md:right-[43%] lg:right-[50%] z-50 bg-[#a473ff50]'
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
                    className='border border-white rounded-full p-2 absolute bottom-0 left-[36%] md:left-[40%] lg:eft-[45%] z-50 bg-[#a473ff50]'
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

    let listSlice = backdropImage.slice(0, 19)
    return (
        <div className="text-white px-4 lg:px-10 pt-32">
            <h1 className="text-3xl font-bold">Explore Genres</h1>
            <p>See Wide Range of genres you like</p>
            
            <div className="relative top-">
                <div className="z-50  px-4 lg:px-10 ">
                    <Slider {...settings} >
                        {
                            listSlice.map((v, i) =>
                                <div key={i}>
                                    <img src={`https://image.tmdb.org/t/p/original/${v.backdrop_path}`} className="w-[150px] md:w-[200px] rounded-xl brightness-50" />
                                    <p className="relative bottom-[84px] md:bottom-[113px] w-[150px] md:w-[200px] flex justify-center items-center h-[84px] md:h-[114px] font-bold text-xl">
                                        <span >
                                            {Genre[i] !== undefined ? Genre[i].name : ''}
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