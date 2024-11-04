import React, { useState } from 'react'
import AboutImg from '../assets/AboutImg.jpg'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const About = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div className='bg-gray-950 py-20 px-5 md:px-0 overflow-x-hidden overflow-y-hidden'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row gap-7 items-center'>
                    <div className='md:w-1/2 space-y-5'>
                        <h1 className='font-bold text-4xl text-[#33CCCC]'>About Us</h1>
                        <p className='text-gray-300'>Welcome to Webelite Builders, where we blend creativity, strategy, and technology to help businesses excel in the digital landscape. Founded in 2024, we are a young and dynamic digital marketing agency based in Kolkata, dedicated to delivering results-driven solutions tailored to your unique business goals. Our mission is simple – to empower brands with powerful digital strategies that elevate online presence, engage audiences, and drive sustainable growth.</p>
                        <p className='text-gray-300'>Whether you’re a startup or an established brand, we are here to help you navigate the digital world, maximizing your potential with solutions that make an impact. Let us build your digital success story.</p>
                        <button className='rounded-md px-4 py-2 bg-transparent text-white border-2 border-green-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]'>Learn More</button>
                    </div>
                    <div className='md:w-1/2'>
                        <img src={AboutImg} alt="" className='rounded-lg'/>
                    </div>
                </div>
                <div className='mt-4'>
                   <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                     <div className='flex gap-10'>
                        <div className='flex flex-col items-center text-center'>
                            <h1 className='font-bold text-3xl md:text-4xl text-[#33CCCC]'>
                                {
                                    counterOn && <CountUp start={0} end={120} duration={2} delay={0} />
                                }
                                +
                            </h1>
                            <h3 className='text-sm text-gray-300'>Happy Customers</h3>
                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <h1 className='font-bold text-3xl md:text-4xl text-[#33CCCC]'>
                                {
                                    counterOn && <CountUp start={0} end={200} duration={2} delay={0} />
                                }
                                +
                            </h1>
                            <h3 className='text-sm text-gray-300'>Success Projects</h3>
                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <h1 className='font-bold text-3xl md:text-4xl text-[#33CCCC]'>
                                {
                                    counterOn && <CountUp start={0} end={160} duration={2} delay={0} />
                                }
                                %
                            </h1>
                            <h3 className='text-sm text-gray-300'>Conversion Rate Increased</h3>
                        </div>
                     </div>
                   </ScrollTrigger>
                </div>
            </div>
        </div>
    )
}

export default About
