<<<<<<< HEAD
import { WebflowNav } from '@/app/components/WebflowNav';
import { WebflowHero } from '@/app/components/WebflowHero';
import { WebflowAbout } from '@/app/components/WebflowAbout';
import { WebflowExperience } from '@/app/components/WebflowExperience';
import { WebflowProjects } from '@/app/components/WebflowProjects';
import { WebflowSkills } from '@/app/components/WebflowSkills';
import { WebflowPublications } from '@/app/components/WebflowPublications';
import { WebflowContact } from '@/app/components/WebflowContact';
import { CustomCursor } from '@/app/components/CustomCursor';
import { PageLoader } from '@/app/components/PageLoader';

export default function App() {
  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-white">
        <CustomCursor />
        <WebflowNav />
        <WebflowHero />
        <WebflowAbout />
        <WebflowExperience />
        <WebflowProjects />
        <WebflowSkills />
        <WebflowPublications />
        <WebflowContact />
      </div>
    </>
  );
}
=======
import { AboutChicago } from '../app/components/AboutChicago';
import { ExperienceStreet } from '../app/components/ExperienceStreet';
import { Projects } from '../app/components/Projects';
import { Skills } from '../app/components/Skills';
import { Publications } from '../app/components/Publications';
import { Contact } from '../app/components/Contact';
import SmoothScroll from "./components/SmoothScroll";
import PaperBirdsHero from "./components/PaperBirdsHero";

export default function App() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black text-white">
        <PaperBirdsHero
          title="HIRAK MODI"
          subtitle="Software Engineer • Data + Systems • Built with Webflow-style motion"
        />

      <AboutChicago />
      <ExperienceStreet />
      <Projects />
      <Skills />
      <Publications />
      <Contact />
      </main>
    </SmoothScroll>
    );
}
>>>>>>> 9c42043afc1135f9fdacae80eb446b3a22d4630f
