'use client';

import React, { useEffect, useState } from 'react';

import { BackgroundGradientAnimation } from './GradientBg';
import { GlobeDemo } from './GridGlobe';
import { IoCopyOutline } from 'react-icons/io5';
import { MagicButton } from './MagicButton';
import animationData from '../../../data/confetti.json';
import { cn } from '@/utils/cn';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:gap-8',
        className,
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imgSrc?: string;
  img?: React.ReactNode;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id: number;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  title,
  description,
  imgSrc,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}) => {
  const leftLists = ['ReactJS', 'NextJS', 'Typescript', 'TailwindCSS'];
  const rightLists = ['NodeJS', 'Express', 'MongoDB', 'Prisma'];
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('bk10895@gmail.com');
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4 border border-white/[0.1]',
        className,
      )}
      style={{
        // background: 'rgba(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      <div className={`${id === 6 ? 'flex justify-center' : ''} h-full`}>
        <div className='h-full w-full absolute'>
          {imgSrc && (
            <img
              src={imgSrc}
              alt={typeof title === 'string' ? title : 'Image'}
              className={cn(
                imgClassName,
                'object-cover object-center w-full h-full',
              )}
            />
          )}
          {img && typeof img !== 'string' && (
            <div
              className={cn(
                imgClassName,
                'object-cover object-center w-full h-full',
              )}
            >
              {img}
            </div>
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 ? 'w-full opacity-80' : ''}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={typeof title === 'string' ? title : 'Image'}
              className='object-cover object-center w-full h-full'
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className='absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl'></div> */}
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative h-full min-h-40 flex flex-col px-5 p-5 lg:p-10',
          )}
        >
          <div className='font-sans font-extralight text-sm text-[#C1C2D3] z-10 md:text-xs lg:text-base'>
            {description}
          </div>
          <div className='font-sans text-lg font-bold z-10 lg:text-3xl max-w-96'>
            {title}
          </div>

          {id === 3 && (
            <div className='flex flex-wrap gap-2 lg:gap-4 mt-4'>
              {leftLists.concat(rightLists).map((item, i) => (
                <span
                  key={i}
                  className='py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] whitespace-nowrap'
                >
                  {item}
                </span>
              ))}
            </div>
          )}
          {id === 6 && isClient && (
            <div className='mt-5 relative'>
              <div
                className={`absolute -bottom-5 right-0 ${copied ? 'block' : 'block'}`}
              >
                <Lottie
                  play={copied}
                  loop={copied}
                  animationData={animationData}
                  style={{ height: '200px', width: '400px' }}
                />
              </div>
              <MagicButton
                title={copied ? 'Email is Copied!' : 'Copy my Email'}
                icon={<IoCopyOutline />}
                position='left'
                handleClick={handleCopy}
                otherClasses='!bg-[#161A31]'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
