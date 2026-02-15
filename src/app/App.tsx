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
