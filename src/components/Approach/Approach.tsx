'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { CanvasRevealEffect } from '../ui';
import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & {
  className?: string;
};

export const Approach = () => {
  return (
    <section className='w-full py-20' id="feature">
    <h1 className='heading'>
    Use {''}
    <span className='text-blue'>Case</span>
  </h1>
      <div className='my-20 flex flex-col lg:flex-col items-center justify-center gap-4'>
        <div className='flex flex-col lg:flex-row gap-6 my-4'>
          <div>
            <Card
              title='Productivity'
              icon={<AceternityIcon order='Use Case 1' />}
              description="Cognitive overload reduces productivity as individuals struggle to express thoughts or get stuck in errors. Th0ught-Fl0w reads your thoughts, forms a mind map, and organizes them into actionable items, prioritizing tasks. It also suggests breaks and relaxation techniques when overload is detected, helping maintain a balanced workflow."
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName='bg-emerald-900'
              />
            </Card>
          </div>
          <div>
            <Card
          title='Emergency Response'
          icon={<AceternityIcon order='Use Case 2' />}
          description='In emergencies, individuals may be unable to call for help. Th0ught-Fl0w detects high anxiety, fear, or distress through brainwave activity, identifies situations like falls or panic attacks, and contacts emergency services or a guardian. It also provides real-time calming techniques and reassurance until help arrives.'
        >
          <CanvasRevealEffect
            animationSpeed={3}
            // containerClassName='bg-black'
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            // dotSize={2}
          />
        </Card>
          </div>
        <div>
          <Card
          title='Mental Health'
          icon={<AceternityIcon order='Use Case 3' />}
          description="Many individuals struggle with mental health issues but find it hard to recognize symptoms or seek help. Th0ught-Fl0w monitors brainwaves to detect signs of depression and anxiety, prompting users to engage in therapeutic activities like mindfulness or breathing exercises. It can also connect users with mental health professionals and provide real-time support through guided meditation or CBT exercises."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName='bg-sky-400'
            colors={[[125, 211, 252]]}
          />
        </Card>
          </div>
          <div>
            <Card
              title='Education'
              icon={<AceternityIcon order='Use Case 4' />}
              description="Students often struggle with concentration, retention, and comprehension. Th0ught-Fl0w tracks brain activity to gauge focus and comprehension in real time, offering personalized learning strategies like breaks, interactive exercises, and alternative explanations. It also creates a dynamic study schedule based on cognitive load and peak performance times, optimizing learning efficiency."
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName='bg-sky-400'
                colors={[[125, 211, 252]]}
              />
            </Card>
          </div>
        
        </div>
        <div className='flex flex-col lg:flex-row gap-6 my-4'>
          <div>
            <Card
              title='Convinience'
              icon={<AceternityIcon order='Use Case 5' />}
              description="Managing daily tasks can be overwhelming, leading to missed deadlines. Th0ught-Fl0w integrates with calendars and to-do lists, using brainwaves to predict and remind users of tasks. It suggests optimal times based on cognitive readiness and can automate routine actions like setting reminders for medication or ordering groceries."
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName='bg-emerald-900'
              />
            </Card>
          </div>
          <div>
            <Card
              title='Entertainment'
              icon={<AceternityIcon order='Use Case 6' />}
              description="Finding suitable entertainment can be time-consuming. Th0ught-Fl0w reads brainwaves to gauge the user's mood and suggests matching options, like soothing music when stressed or stimulating games when bored. It also creates personalized playlists and content recommendations to enhance the entertainment experience."
            >
              <CanvasRevealEffect
                animationSpeed={3}
                // containerClassName='bg-black'
                colors={[
                  [236, 72, 153],
                  [232, 121, 249],
                ]}
                // dotSize={2}
              />
            </Card>
          </div>
          <div>
              <Card
              title='Social'
              icon={<AceternityIcon order='Use Case 7' />}
              description="Social anxiety and communication issues can disrupt relationships. Th0ught-Fl0w helps by detecting anxiety and offering real-time coping strategies such as deep breathing, affirmations, and mindfulness. It analyzes conversations and provides cues to boost confidence, improving personal and professional interactions."
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName='bg-sky-600'
                colors={[[125, 211, 252]]}
              />
            </Card>
          </div>
          <div>
            <Card
              title='Creativity'
              icon={<AceternityIcon order='Use Case 8' />}
              description="Creative blocks can stifle innovation and productivity. Th0ught-Flow monitors brain activity to detect these blocks and suggests techniques like changing environments or taking breaks. It also captures and organizes spontaneous ideas into a digital mind map, aiding brainstorming and idea generation for more effective creativity."
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName='bg-sky-600'
                colors={[[125, 211, 252]]}
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 lg:h-[35rem] relative rounded-3xl'
    >
      <Icon className='absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black' />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='h-full w-full absolute inset-0'
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className='relative z-20'>
        <div className='text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center'>
          {icon}
        </div>
        <h2 className='dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center'>
          {title}
        </h2>
        <h2
          className='dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center'
          style={{ color: '#e4ecff' }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
        <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-2xl font-bold text-white backdrop-blur-3xl'>
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={className}
      {...rest}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  );
};
