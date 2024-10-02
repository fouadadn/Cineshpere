import { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Test1() {

    const [tajriba, setTajriba] = useState([])

    useEffect(() => {


        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US&page=1')
            .then(response => response.json())
            .then(response => setTajriba(response.results))
            .catch(err => console.error(err));


    }, [])


    return (
        <div className="flex">



            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    tajriba.map(v => <SwiperSlide className="text-white w-96 bg-violet-600 m-2 flex" >
                        {v.title}
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    )
}