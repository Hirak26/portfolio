import PageLoader from "./components/PageLoader";
import { WebflowNav } from '../app/components/WebflowNav';
import { WebflowHero } from '../app/components/WebflowHero';
import { WebflowAbout } from '../app/components/WebflowAbout';
import { WebflowExperience } from '../app/components/WebflowExperience';
import { WebflowProjects } from '../app/components/WebflowProjects';
import { WebflowSkills } from '../app/components/WebflowSkills';
import { WebflowPublications } from '../app/components/WebflowPublications';
import { WebflowContact } from '../app/components/WebflowContact';
import { CustomCursor } from '../app/components/CustomCursor';

export default function App() {
  return (
    <>
      <PageLoader />

              <CustomCursor />
        <WebflowNav />
        <WebflowHero />
        <WebflowAbout />
        <WebflowExperience />
        <WebflowProjects />
        <WebflowSkills />
        <WebflowPublications />
        <WebflowContact />
      <main className="min-h-screen bg-black text-white">
        
      </main>
    </>
  );
}


    