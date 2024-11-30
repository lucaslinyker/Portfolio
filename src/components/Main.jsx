import { About } from './About.jsx';
import { Hello } from './Hello.jsx';
import { Projects } from './Projects.jsx';
import { Skills } from './Skills.jsx';

export function Main() {
  return (
    <main>
      <Hello />
      <Projects />
      <About />
      <Skills />
    </main>
  );
}
