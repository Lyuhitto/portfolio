import About from './sections/About/About';
import Navbar from './sections/Navbar/Navbar';
import SkillAndStack from './sections/SkillAndStack/SkillAndStack';
import Education from './sections/Education/Education';
import ProjectList from './sections/ProjectList/ProjectList';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <SkillAndStack />
      <Education />
      <ProjectList />
    </>
  );
}

export default App;
