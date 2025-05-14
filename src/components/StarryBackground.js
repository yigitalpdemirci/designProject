import { useEffect } from 'react';
import './StarryBackground.css';

const StarryBackground = () => {
  useEffect(() => {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.appendChild(starsContainer);
    
    const numberOfStars = 200;
    
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      const delay = Math.random() * 5;
      star.style.animationDelay = `${delay}s`;
      
      starsContainer.appendChild(star);
    }
    
    // Temizlik fonksiyonu
    return () => {
      if (starsContainer && starsContainer.parentNode) {
        starsContainer.parentNode.removeChild(starsContainer);
      }
    };
  }, []);
  
  return null;
};

export default StarryBackground;