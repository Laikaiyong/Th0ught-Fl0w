import { companies, testimonials } from '../../../data';

import { InfiniteMovingCards } from '../ui';
import React from 'react';

export const Clients = () => {
  return (
    <div className='py-20' id='stack'>
      <h1 className='heading'>
        Tech {''}
        <span className='text-blue'>Stack</span>
      </h1>
      <div className='flex flex-col items-center max-lg:mt-16'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-16'>
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className='flex md:max-w-60 max-w-32 gap-6'>
              <img key={id} src={img} alt={name} className='md:w-24 w-20' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
