import { Dot, Play, Bookmark } from 'lucide-react';

export default function MovieInfo({ year, name, Genre, desc, position, divDisplay, yearDisplay, descDisplay, genreStyle }) {
    let y1
    let y2

    if (year) {
        y1 = year[0]
        y2 = year[1]
    }
    let genre1 = ''
    let genre2 = ''
    Genre[0].forEach(v => v === '' ? '' : genre1 = v)
    Genre[1].forEach(v => v === '' ? '' : genre2 = v)

    let xi7aja = ''
    Genre[1].forEach(v => xi7aja += v)

    return (
        <div className={`${position} bottom-16 md:bottom-20  left-3 lg:left-10 text-white z-50 t9iil px-4`}>
            <span className={`text-sm hidden sm:${yearDisplay}`}>{y1 === undefined ? String(y2).substring(0, 4) : String(y1).substring(0, 4)}</span>
            <h1 className="text-3xl ">{name}</h1>
            <p className={`hidden sm:flex ${genreStyle}`}>{genre1} {xi7aja === '' ? '' : <Dot />} {genre2}</p>
            <p className={`w-[370px] sm:w-[450px] md:w-[470px] text-xs sm:text-base ${descDisplay}`}>{desc}</p>

            <div className={`flex gap-2 md:gap-4 mt-5 ${divDisplay}`}>
                <a href=''>
                    <button className='flex rounded-tr-xl bg-[#7300FF]  rounded-bl-xl py-1 px-2 md:px-4 md:py-2  gap-1'>
                        <Play strokeWidth={3} /><span className='text-nowrap'>Play Now</span>
                    </button>
                </a>
                <a href='' className='hidden sm:block'>
                    <button className='flex rounded-tr-xl backdrop-blur-lg  bg-[#ffffff10] rounded-bl-xl py-1 px-2 md:px-4 md:py-2 gap-1'>
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
    )
}