import { FaLocationArrow } from 'react-icons/fa';
import Link from 'next/link';
import { MagicButton } from '../ui';
import React from 'react';

export const Footer = () => {
  return (
    <footer className='w-full mb-[100px] md:mb-5 pb-10' id='contact'>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital
          presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center '>
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals
        </p>
        <Link href='mailto:bk10895@gmail.com'>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position='right'
          />
        </Link>
      </div>
      <div className='flex mt-16 md:flex-row flex-col items-center justify-between gap-2'>
        <p className='md:text-base text-sm md:font-normal font-light'>
          Copyright © 2024 Th0ught-Fl0w
        </p>
      </div>
    </footer>
  );
};
