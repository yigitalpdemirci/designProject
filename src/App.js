import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import StarryBackground from './components/StarryBackground';
import Home from './components/Home';
import About from './components/About';
import World from './components/World';

function App() {
  return (
    <>
      <StarryBackground />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About />} />
          <Route path="world" element={<World />} />
        </Route>
        
      </Routes>
    </>

  )
}

export default App;
