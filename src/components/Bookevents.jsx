// Bookevents.jsx
import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/Bookevents.css' // Import the CSS file for styling

const GridItem = ({ imageSrc, title, description }) => (
  <div className="grid-item">
    
    <img src={imageSrc} alt={title} className="grid-item-image" />
    <div className="grid-item-content">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to="/Booking">
      <button>Book Now</button>
      </Link>
    </div>
  </div>
);



const Bookevents = () => {


    
    

  
  const gridItems = [
    {
      imageSrc: 'https://i.pinimg.com/564x/f2/b2/54/f2b2547696dc405872993e401da721d5.jpg',
      title: 'Marriage',
      description: 'we will oversee setup, place your personal belongings, and help keep the flow of the day on track. ',
    },
    {
      imageSrc: 'https://i.pinimg.com/564x/4a/46/90/4a46908c4f23fa62efa9e87629bef15f.jpg',
      title: 'Birthday Party',
      description: 'An occasion on which people can assemble for social interaction and entertainment.',
    },
    {
      imageSrc: 'https://i.pinimg.com/564x/d3/56/9f/d3569f488602324a909b67b1b7fcb228.jpg',
      title: 'Job Promotion',
      description: 'Is the practice of spreading the word about the event across all relevant channels to achieve the stated goal.',
    },
    {
      imageSrc: 'https://i.pinimg.com/564x/4e/5c/6c/4e5c6c9cff6c3f69017d53d0c734b1a6.jpg',
      title: 'Title 3',
      description: 'Description 3',
    },
    // Add more grid items as needed
  ];

  return (
    
    <div className="grid-container">
      {gridItems.map((item, index) => (
        <GridItem
          key={index}
          imageSrc={item.imageSrc}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Bookevents;
