import { MagicButton, Spotlight, TextGenerateEffect } from '../ui';
import { Brain } from '../Brain/Brain';

import { FaLocationArrow } from 'react-icons/fa';
import React from 'react';

export const Hero = () => {
  return (
    <div className='h-[160vh] pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen fill-white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vh] fill-purple' />
        <Spotlight className='top-28 left-80 md:-left-32 md:-top-20 h-[80vh] w-[50vh] fill-blue' />
      </div>
      <div
        className='h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center'
      >
       <Brain />
          </div>
        </div>
  );
};

//   <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
// </div>
// <div className='flex justify-center relative my-20 z-10'>
//   <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
//     <TextGenerateEffect
//       words='Th0ught-Fl0w'
//       className='text-center text-[40px] md:text-5xl lg:text-6xl'
//     />
//     </div>
//     </div>
