import { FaLocationArrow } from 'react-icons/fa';
import Link from 'next/link';
import { MagicButton } from '../ui';
import React from 'react';
import { AnimatedTooltip } from "../ui/AnimatedTooltip";


export const Footer = () => {
  const people = [
    {
      id: 1,
      name: "Lai Kai Yong (Vandyck)",
      designation: "Software Engineer",
      image:
        "/vandyck.png",
    },
    {
      id: 2,
      name: "Looi Wei En",
      designation: "Researcher",
      image:
        "/weien.jpeg",
    },
    {
      id: 3,
      name: "Shaun Lim Chung Liang",
      designation: "Project Manager",
      image:
        "/shaun.jpg",
    }
  ];
  return (
    <footer className='w-full mb-[100px] md:mb-5 pb-10' id='team'>
    <h1 className='heading mb-4'>
    Our {''}
    <span className='text-blue'>Team</span>
  </h1>
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>

      <div className='flex mt-16 md:flex-row flex-col items-center justify-between gap-2'>
        <p className='md:text-base text-sm md:font-normal font-light'>
          Copyright © 2024 Th0ught-Fl0w
        </p>
      </div>
    </footer>
  );
};
