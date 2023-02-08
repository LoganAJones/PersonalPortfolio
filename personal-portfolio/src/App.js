import './App.css';
import NavBar from './components/NavBar.jsx';
import Banner from './components/Banner.jsx';
import Skills from './components/Skills.jsx';
import Background from './components/Background.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Background />
      <NavBar/>
      <Banner/>
      <Skills/>
    </div>
  );
}

export default App;
