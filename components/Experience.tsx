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
            //  className='flex flex-1 jtems-center lg:flex-col '
             className='flex-1 flex lg:flex-row md:flex-col sm:flex-col xl:flex-row 2xl:flex-row text-white border-neutral-200 dark:border-slate-800 py-5 lg:py-8  px-3'
                   duration={Math.floor(Math.random() * 10000) + 10000}

            >
        <div className='flex lg:flex-row flex-col  lg:items-center p-3  md:p-5 lg:p-10 ' >
          <img src={card.thumbnail} alt={card.thumbnail}  className='hidden sm:block md:block lg:block' />
           </div>

            <div className='lg:ms-5 mb-3'>
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
