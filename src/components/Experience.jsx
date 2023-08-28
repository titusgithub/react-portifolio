import React from 'react'
import reactio from "../assets/react-logo.png"
import jss from "../assets/javascript-39393.png"
import laravel from "../assets/Laravel.png"
import html from "../assets/kisspng-web-development-responsive-web-design-advanced-css-5b1e73aae576a6.4591989815287223469399.png"
import c from "../assets/PngItem_1550132.png"
import tt from "../assets/tailwindcss_logo_icon_170649.png"
const Experience = () => {
    const techs =[
        {
            id:1,
            src:jss,
            title:'Javascript',
            style:'shadow-yellow-400'
        },
        {
            id:2,
            src:reactio,
            title:'React',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:laravel,
            title:'Laravel',
            style:'shadow-red-600'
        },
        {
            id:4,
            src:html,
            title:'Html',
            style:'shadow-orange-800'
        },
        {
            id:4,
            src:c,
            title:'CSS',
            style:'shadow-blue-500'
        },
         {
            id:5,
            src:tt,
            title:'Tailwind',
            style:'shadow-blue-500'
        }
    ]
  return (
    <div name="experience" className='bg-gradient-to-b  from-black to-gray-500
    w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4
               border-black p-2 inline'>Experience</p>
                    <p className='py-6'>These are the technologies that i have worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8
            text-center py-8 px-12 sm:px-0'>
    {
    techs.map(({ id, src, title, style }) => (
        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} className='w-20 mx-auto' alt={title} />
            <p className='mt-2'>{title}</p>
        </div>
    ))
}
            </div>
        </div>
    </div>
  )
} 

export default Experience