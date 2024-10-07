
import footerImage from '/home/fouad/Desktop/Documents/project/React-Apps/cinesphere/src/pages/assets/Footer Email.png'


export default function Footer() {
    return (
        <div className='text-white'>
            <div className="mb-10 relative">
                <img src={footerImage} alt="" />

                <div className="absolute  top-32 left-96 ">
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-nowrap">Join Now with your Email Address and Choose your plan to get Started.</h1>
                        <div className="flex justify-center gap-5">
                            <input className='outline-none text-white text-sm bg-[#7300FF10] border-[#a473ff] border-[1px] px-6 py-3 rounded-xl w-96' type="email" placeholder='Email Address' />
                            <button className="bg-[#7300FF] rounded-tr-3xl rounded-bl-3xl py-1 px-9">join Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="mt-32 mb-6 flex flex-col items-center">
                <h1 className='text-4xl relative bottom-3'>
                    <span className='font- text-[#7300FF] text-6xl'>C</span>ine sphere
                </h1>
                <p className="text-xl">CineSphere is your go-to platform for a world of entertainment, offering a vast library of films, TV shows, and exclusive content.  </p>

                <div className="text-black w-full mt-10">
                    <hr className="border-[#a473ff90] " />
                </div>

                <div className="flex justify-center mt-6">
                    <div>
                        ⓒCinesphere Movies & Tv Shows , Made by <a href="" className="text-[#7300FF]" >Fouad Adnan</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}