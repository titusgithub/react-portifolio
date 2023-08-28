import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-ful h-screen bg-gradient-to-b from-gray-800 to-black
    text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full
        '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500
                '>About</p>
            </div>
            <div className='font-small'>
            <p className='mt-5'>
                 I'm a passionate and skilled full stack developer
                  dedicated to crafting exceptional digital experiences.
                   With a solid foundation in both front-end and back-end technologies,
                    I bring ideas to life by seamlessly integrating design and
                     functionality. My journey in the world of development has
                      equipped me with a diverse set of tools and languages, 
                      allowing me to build robust and user-friendly web 
                      applications from start to finish.

            </p>
            <br />
            <p>
                I'm always excited to collaborate on new projects, 
                exchange ideas, or simply have a chat about the latest
                 in the tech world. Feel free to reach out to me through 
                 [email address] or connect with me on [LinkedIn/GitHub/Twitter], 
                 and let's embark on 
                a journey to create remarkable digital experiences together!

            </p>
            </div>
        </div>
    </div>
  )
}

export default About