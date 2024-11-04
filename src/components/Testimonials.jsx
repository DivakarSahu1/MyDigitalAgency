import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from '../assets/bg1.jpg'
import { motion } from 'framer-motion';


const TestimonialData = [
    {
        id: 1,
        name: "Payal",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Rohit",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Aman",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 5,
        name: "Ankit",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103",
    },
];

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnfocus: true,
        responsive:[
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite:true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
       
      };
  return (
   <div style={{
       height: '600px',
       backgroundImage: `url(${bg})`,
       overlay: '#111111',
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       zIndex: -1
   }} 
   className='relative py-20 overflow-x-hidden overflow-y-hidden px-7 md:px-0 bg-white'>
        <div className='absolute inset-0 bg-black opacity-85'></div>
        <div className='relative max-w-7xl mx-auto items-center text-center'>
            {/* header section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <motion.h2 
                initial={{opacity:0, scale:0.5}}
                whileInView={{opacity:1, scale:1}}
                transition={{duration:1, delay:0.2}}
                className='text-3xl md:text-4xl font-bold mb-4 text-[#33CCCC] text-center'>Testimonials</motion.h2>
                <motion.p 
                initial={{opacity:0, scale:0.5}}
                whileInView={{opacity:1, scale:1}}
                transition={{duration:1.5, delay:0.4}}
                className='text-gray-300 max-w-xl mx-auto mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perspiciatis amet voluptate libero reprehenderit, repellendus aliquam vero. Unde, harum assumenda!</motion.p>
                </div>
                {/* Testimonials cards */}
                <div>
                    <Slider {...settings}>
                       {TestimonialData.map((data)=>{
                        return <div className='my-6'>
                            <div key={data.id} className='flex flex-col gap-4 shadow-lg shadow-[#33CCCC] py-8 px-6 mx-4 rounded-xl bg-gray-950 relative'>
                                <div className='mb-4'>
                                    <img src={data.img} alt="" className='rounded-full w-20 h-20 border-2 border-[#33CCCC]'/>                           
                                </div>
                                <div className='flex flex-col items-center gap-4'>
                                    <div className='space-y-3'>
                                        <p className='text-xs text-gray-500 text-start'>{data.text}</p>
                                        <h1 className='text-xl font-bold text-[#33CCCC] text-start'>{data.name}</h1>
                                    </div>
                                </div>
                                <p className='text-[#33CCCC]/20 text-9xl font-serif absolute top-0 right-0'></p>
                            </div>
                        </div>
                       })}
                    </Slider>
            </div>
        </div>
   </div>
  )
}

export default Testimonials
