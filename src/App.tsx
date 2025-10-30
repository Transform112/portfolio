import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Contributions } from './components/Contributions';
import { Experience } from './components/Experience';
import { SkillsCarousel } from './components/SkillsCarousel';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Contributions />
        <Experience />
        <SkillsCarousel />
        <Footer />
      </main>
    </div>
  );
}

export default App;
