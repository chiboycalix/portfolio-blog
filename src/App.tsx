import './App.scss';
import { Hero, AboutMe, Projects } from './sections';
import { Footer } from './components';

const App = () => {
  return (
    <div className="app">
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
