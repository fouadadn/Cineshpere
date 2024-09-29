import HomePageSlider from './ui/HomePageSilder';
import { useEffect, useState } from 'react';

import MovieAndshowsSlider from './ui/Movies&ShowsSlider';

export default function HomePage() {

    const [movies, setMovies] = useState([]);
    const [topmovies, setTopMovies] = useState([]);

    useEffect(()=>{
            fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US&page=1')
                .then(response => response.json())
                .then(response => setMovies(response.results))
                .catch(err => console.error(err));
    } , [])
    useEffect(()=>{
        
            fetch('https://api.themoviedb.org/3/trending/all/week?api_key=091d4817f9045622142ffd67a08b2d15&language=en-US&page=1')
                .then(response => response.json())
                .then(response => setTopMovies(response.results))
                .catch(err => console.error(err));   
        
    } , [])

    

    return (
        <div className='bg-black w-full flex flex-col'>
          
            <HomePageSlider movieDetail={topmovies}/>
            <div className='space-y-32 mt-10 flex flex-col'>
                <MovieAndshowsSlider title={'Latest Release'} moviesorshows={movies} />
                <MovieAndshowsSlider title={'Trending Movies & Shows'} moviesorshows={topmovies} />
            </div>

        </div>
    )
}