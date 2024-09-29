import Slider from "react-slick"
import { ChevronRight, ChevronLeft } from 'lucide-react';


export default function MovieAndshowsSlider({ title, moviesorshows }) {

    function SampleNextArrow(props) {
        const {  onClick } = props;
        return (
            <button
                className='border border-white rounded-full p-2 absolute right-0 -bottom-20'
                onClick={onClick}>
                <ChevronRight color="#ffffff" />
            </button>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <button
                className='border border-white rounded-full p-2 absolute right-16 -bottom-20'
                onClick={onClick}>
                <ChevronLeft color="#ffffff" />
            </button>
        );
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        dotsClass: 'release',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        swipeToSlide: true,
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
                        <img src={`https://image.tmdb.org/t/p/w300/${v.poster_path}`} alt="" className="w-48 rounded-tr-3xl rounded-bl-3xl" />
                        <div>
                            <h1 className="text-lg">{v.title} {v.name}</h1>
                            <span className="text-[#7300FF] tetxt-sm">{v.release_date}{v.first_air_date}</span>
                        </div>
                    </div>
                )}
            </Slider>
        </div>
    )
}