import './App.css';
import MyNav from './components/MyNav.js';
import HeroSection from './components/HeroSection.js';
import ProjectSection from './components/ProjectSection.js';
import SkillsSection from './components/SkillsSection.js';

function App() {
  return (
    <div>
      <MyNav />
      <HeroSection />
      <ProjectSection/>
      <SkillsSection />
    </div>
  );
  
}

export default App;
