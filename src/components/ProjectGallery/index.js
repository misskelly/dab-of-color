import React from 'react';
import uniqid from 'uniqid';
import Project from '../Project';


const Gallery = () => {
  // set up for redux
  // map through projects, return a project component
  const mockProjects = [
    {
      name: 'Fred',
      palettes: [{
        name: 'Fancy',
        color_1: '#F655AA',
        color_2: '#FBA904',
        color_3: '#7AFDDF',
        color_4: '#571E7F',
        color_5: '#0071BD'
      },
      {
        name: 'Dazzle',
        color_1: '#32213A',
        color_2: '#383B53',
        color_3: '#66717E',
        color_4: '#D4D6B9',
        color_5: '#D1CAA1'
      }

      ]
    },
    {
      name: 'Bob',
      palettes: [{
        name: 'Fancy',
        color_1: '#F655AA',
        color_2: '#FBA904',
        color_3: '#7AFDDF',
        color_4: '#571E7F',
        color_5: '#0071BD'
      },
      {
        name: 'Dazzle',
        color_1: '#32213A',
        color_2: '#383B53',
        color_3: '#66717E',
        color_4: '#D4D6B9',
        color_5: '#D1CAA1'
      }
      ]
    }
  ];
  const projects = (unicorns) => {
    const key = uniqid();
    const lilUnis = unicorns.map(uni => (
      <Project
        key={key}
        name={uni.name}
        palettes={uni.palettes}
      />
    ));
    return lilUnis;
  };

  return (
    <section className="project-gallery">
      { projects(mockProjects) }
    </section>
  );
};

export default Gallery;
