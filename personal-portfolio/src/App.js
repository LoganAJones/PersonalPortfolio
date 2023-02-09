import './App.css';
import NavBar from './components/NavBar.jsx';
import Banner from './components/Banner.jsx';
import Skills from './components/Skills.jsx';
import Background from './components/Background.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Background />
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
