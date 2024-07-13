import {
  Approach,
  Clients,
  Experience,
  Footer,
  Grid,
  Hero,
  RecentProjects,
} from '@/components';

import { FloatingNav } from '@/components/ui';
import { navItems } from '../../data';
import { GlobeDemo } from '@/components/ui/GridGlobe';

export default function Home() {
  return (
    <main className='relative flex flex-col items-center justify-center w-full px-5 mx-auto  sm:px-10 overflow-clip'>
      <div className='w-full max-w-7xl'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <>
        <GlobeDemo />
        </>
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
