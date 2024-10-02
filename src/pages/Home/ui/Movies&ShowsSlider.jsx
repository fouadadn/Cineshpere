import Slider from "react-slick"
import { ChevronRight, ChevronLeft } from 'lucide-react';

import { useSwiper } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function MovieAndshowsSlider({ title, moviesorshows }) {
  const swiper = useSwiper();



  // Now you can use all slider methods like

  // function SampleNextArrow(props) {
  //   const { onClick } = props;
  //   return (
  //     <button
  //       className='border border-white rounded-full p-2 absolute right-0 -bottom-20 bg-[#a473ff50]'
  //       onClick={onClick}>
  //       <ChevronRight color="#ffffff" />
  //     </button>
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { onClick } = props;
  //   return (
  //     <button
  //       className='border border-white rounded-full p-2 absolute right-16 -bottom-20 bg-[#a473ff50]'
  //       onClick={onClick}>
  //       <ChevronLeft color="#ffffff" />
  //     </button>
  //   );
  // }

  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   // autoplay: true,
  //   slidesToShow: 6.5,
  //   slidesToScroll: 1,
  //   dotsClass: 'release',
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  //   swipeToSlide: true,
  //   // fade: true,
  //   responsive: [
  //     {
  //       breakpoint: 1360,
  //       settings: {
  //         slidesToShow: 5,
  //         slidesToScroll: 2,
  //         infinite: true,

  //       }
  //     },
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 960,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 760,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 450,
  //       settings: {
  //         slidesToShow: 1.5,
  //         slidesToScroll: 1,
  //         className: 'slidsghir'
  //       }
  //     }

  //   ]
  // };



  return (
    <div className="text-white space-y-10 px-10 z-50 hhh  ">
      <h1 className="text-2xl font-bold ">{title}</h1>
      <Swiper
      slidesPerView={6}
      navigation
      freeMode={{enabled : true}}
       modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}>
        {moviesorshows.map((v, i) =>
          <SwiperSlide key={i}>
            <img src={`https://image.tmdb.org/t/p/w300/${v.poster_path}`} alt="" className="w-48 rounded-tr-3xl rounded-bl-3xl" />
            <div>
              <h1 className="text-lg">{v.title} {v.name}</h1>
              <span className="text-[#7300FF] tetxt-sm">{v.release_date}{v.first_air_date}</span>
            </div>
          </SwiperSlide>
        )}
      </Swiper>

      {/* <button onClick={() => swiper.slideNext(300 , ()=>console.log('hhhhh'))}>Slide to the next slide</button> */}

      
    </div> 
  )
}