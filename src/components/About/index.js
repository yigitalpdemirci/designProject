// src/components/About/index.js
import './index.scss';
import TeamImg from '../../assets/images/img1.JPG';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/mehmet.jpeg';
import img4 from '../../assets/images/zafer.jpeg';
import img5 from '../../assets/images/ahmet.jpeg';

const About = () => {
  const teamMembers = [
    { 
      id: 1, 
      name: "Ali Seydi Keçeli Advisor", 
      image: img2,
      description: "Assoc. Prof.  at the Computer Engineering Department in Hacettepe University"
    },
    { 
      id: 2, 
      name: "Zafer İçen", 
      image: img4,
      description: "Team captain, developer"
    },
    { 
      id: 3, 
      name: "Gülşen Ebrar Cırık", 
      image: TeamImg,
      description: "Developer"
    },
    { 
      id: 4, 
      name: "Mehmet Erdem Gündüz", 
      image: img3,
      description: "Developer"
    },
    { 
      id: 5, 
      name: "Ahmet Yiğitalp Demirci", 
      image: img5,
      description: "Developer"
    },
  ];

  return (
    <div className='container about-page'>
      <h1>Our Team</h1>
      
      <div className='team-container'>
        <div className='team-row top-row'>
          {teamMembers.slice(0, 1).map((member) => (
            <div key={member.id} className='team-member'>
              <div className='image-container'>
                <img src={member.image} alt={member.name} />
              </div>
              <h2>{member.name}</h2>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
        
        <div className='team-row bottom-row'>
          {teamMembers.slice(1, 5).map((member) => (
            <div key={member.id} className='team-member'>
              <div className='image-container'>
                <img src={member.image} alt={member.name} />
              </div>
              <h2>{member.name}</h2>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;