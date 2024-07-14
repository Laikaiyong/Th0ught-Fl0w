import {
  Approach,
  Clients,
  Footer,
  Grid,
  Hero,
} from '@/components';

import { FloatingNav } from '@/components/ui';
import { navItems } from '../../data';
import { GlobeDemo } from '@/components/ui/GridGlobe';
import { Intro } from '@/components/Intro';

export default function Home() {
  return (
    <main className='relative flex flex-col items-center justify-center w-full px-5 mx-auto  sm:px-10 overflow-clip'>
      <div className='w-full max-w-7xl'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <>
        <GlobeDemo />
        </>
        <Intro />
        <Grid />
        <Clients />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
