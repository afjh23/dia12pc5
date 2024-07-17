import React from 'react'
import { TestimonialCard } from './TestimonialCard'
import emilyImg from '../assets/image-emily.jpg'
import thomasImg from '../assets/image-thomas.jpg'
import jennieImg from '../assets/image-jennie.jpg'

export const TestimonialContainer = () => {
  return (
    <section className='bg-white px-6 pt-16 desktop:pt-40'>
        <h2 className='text-center uppercase font-Fraunces mb-16 text-Grayish-blue xl:text-xl desktop:mb-20'>Client testimonials</h2>
        <div className='lg:flex lg:w-[900px] lg:mx-auto xl:w-[1110px]'>
        <TestimonialCard
          img={emilyImg}
          testimonial='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
          name='Emily R.'
          position='Marketing Director'
        />
        <TestimonialCard
          img={thomasImg}
          testimonial='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
          name='Thomas S.'
          position='Chief Operating Officer'
        />
        <TestimonialCard
          img={jennieImg}
          testimonial='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
          name='Jennie F.'
          position='Business Owner'
        />
        </div>
    </section>
  )
}
