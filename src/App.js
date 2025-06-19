import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import StarryBackground from './components/StarryBackground';
import Home from './components/Home';
import About from './components/About';
import World from './components/World';
import Poster from './components/Poster';
import Slide from './components/Slide';

function App() {
  return (
    <>
      <StarryBackground />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About />} />
          {process.env.NODE_ENV === 'development' && (
            <Route path="world" element={<World />} />
          )}
          <Route path="poster" element={<Poster />} />
          <Route path="slide" element={<Slide />} />
        </Route>
        
      </Routes>
    </>

  )
}

export default App;
