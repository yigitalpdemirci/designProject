// src/components/Home/index.js
import './index.scss';
import { Link } from 'react-router-dom';
import WorldImage from '../../assets/images/clippedworld.png';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="header">
        <h1>Procedural World Generation with NLP</h1>
      </div>
      
      <div className="content-section">
        <div className="introduction-section">
          <h2>Introduction</h2>
          <p>
            Welcome to our research project on procedural world generation 
            using natural language processing. We aim to bridge the gap 
            between textual descriptions and visual representations by 
            creating intelligent systems that can interpret language and 
            transform it into immersive virtual environments.
          </p>
          <p>
            This project explores the intersection of computational linguistics, 
            computer graphics, and artificial intelligence to develop tools that 
            allow for intuitive world creation through natural language inputs.
          </p>
          <p>
            Our team consists of experts in NLP, procedural generation, and 
            interactive design who are passionate about creating new ways for 
            humans to interact with and create digital environments.
          </p>
          <Link to="/about" className="flat-button">MEET THE TEAM</Link>
        </div>
        
        <div className="image-section">

          <img src={WorldImage} alt="Procedural World" className="world-image" />


        </div>
        
        <div className="methodology-section">
          <h2>Methodology</h2>
          <p>
            Our approach combines advanced natural language processing techniques 
            with procedural generation algorithms to create dynamic and responsive 
            world environments. By analyzing textual descriptions and context, 
            our system can generate coherent and meaningful virtual spaces.
          </p>
          <p>
            The methodology involves several key steps:
          </p>
          <ul>
            <li>Text parsing and semantic analysis</li>
            <li>Context-aware environment mapping</li>
            <li>Procedural asset generation and placement</li>
            <li>Dynamic adaptation based on narrative flow</li>
          </ul>
          <Link to="/world" className="flat-button">EXPLORE</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;