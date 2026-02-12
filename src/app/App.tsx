import { ChicagoHero } from '@/app/components/ChicagoHero';
import { AboutChicago } from '@/app/components/AboutChicago';
import { ExperienceStreet } from '@/app/components/ExperienceStreet';
import { Projects } from '@/app/components/Projects';
import { Skills } from '@/app/components/Skills';
import { Publications } from '@/app/components/Publications';
import { Contact } from '@/app/components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <ChicagoHero />
      <AboutChicago />
      <ExperienceStreet />
      <Projects />
      <Skills />
      <Publications />
      <Contact />
    </div>
  );
}
