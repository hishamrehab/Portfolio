import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'

const Experience = () => {
  return (
    <div className='py-20' id="experience">
      <h1 className='heading'>
        My  
      <span className='text-purple'>  Work Experiece
      </span>
      </h1>

      <div className='w-full mt-12 m-auto'>
     
         {workExperience.map((card) => (
            <Button 
             key={card.id}
             borderRadius='1.75rem'
             className='flex justify-between items-center gap-5 lg:py-8  text-white border-neutral-200 dark:border-slate-800 py-8 px-4 lg:px-6 hover:scale-105 transition-all duration-200 ease-in-out'
             duration={Math.floor(Math.random() * 10000) + 10000}

            >
       
          

            <div className='lg:ms-5 mb-3 w-full'>
                <h1 className='text-start text-xl md:text-3xl font-extrabold loading-4'>
                    {card.title}
                </h1>
        <p className='text-start text-white-100 text-lg md:text-xl font-bold pt-2'>{card.desc}</p>
            </div>

            </Button>
             
         ))}

      </div>
 
    </div>
  )
}

export default Experience