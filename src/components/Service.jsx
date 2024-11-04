import React from 'react'
import email from '../assets/email.gif'
import content from '../assets/content.gif'
import laptop from '../assets/laptop.gif'
import ads from '../assets/ads.gif'
import seo from '../assets/seo.gif'
import analytics from '../assets/analytics.gif'
import affiliate from '../assets/stakeholders.gif'
import marketing from '../assets/marketing.gif'
import { motion } from 'framer-motion'

const Service = () => {
    const serviceJson = [
        {
            "name": "SEO Optimization",
            "description": "Increase your website's visibility on search engines with strategic SEO techniques.",
            "icon": seo,
        },
        {
            "name": "Social Media Marketing",
            "description": "Engage your audience across social media platforms with tailored content and campaigns.",
            "icon": laptop,
        },
        {
            "name": "Content Marketing",
            "description": "Attract and retain your audience through valuable and relevant content.",
            "icon": content,
        },
        {
            "name": "Pay-Per-Click Advertising",
            "description": "Drive targeted traffic to your website through effective PPC campaigns.",
            "icon": ads,
        },
        {
            "name": "Email Marketing",
            "description": "Connect with your audience directly with personalized email campaigns.",
            "icon": email,
        },
        {
            "name": "Web Analytics",
            "description": "Monitor and analyze your website’s performance to improve strategy.",
            "icon": analytics,
        },
        {
            "name": "Affiliate Marketing",
            "description": "Leverage affiliate marketing partnerships to expand your reach and drive sales.",
            "icon": affiliate,
        },
        {
            "name": "Influencer Marketing",
            "description": "Collaborate with influencers to build brand trust and reach new audiences.",
            "icon": marketing,
        }
    ]
    return (
        <div className='bg-gray-900 pt-10 pb-20 px-5 md:px-0'>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-center font-bold text-4xl pb-12 text-[#33CCCC]'>Our Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        serviceJson.map((item) => {
                            return <motion.div 
                            initial={{opacity:0, y:100}}
                            whileInView={{opacity:1, y:0}}
                            transition={{duration:1, delay:0.2}}
                            className='relative'>
                                <div className='absolute -inset-0 blur bg-[#33CCCC]'></div>
                                <div className='border rounded-md relative flex flex-col space-y-3 bg-[#8eecec] hover:bg-[#33CCCC] hover:transition-all p-7'>
                                    <img src={item.icon} alt="" className='w-20 rounded-full' />
                                    <h3 className='font-semibold text-xl'>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Service
