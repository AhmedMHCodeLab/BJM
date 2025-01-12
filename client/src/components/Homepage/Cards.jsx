import React, { useEffect, useRef } from 'react';
import { Grid, Card, Text } from '@mantine/core';
import { IconBriefcase, IconChartBar, IconUsers, IconTarget } from '@tabler/icons-react';
import './Cards.css'; // Import the new CSS file

const Cards = () => {
  const cardRefs = useRef([]); // To reference each card DOM node

  const cardsData = [
    {
      icon: IconBriefcase,
      title: 'Business Strategy',
      description:
        "Develop comprehensive business strategies to achieve your company's goals and objectives.",
    },
    {
      icon: IconChartBar,
      title: 'Market Analysis',
      description:
        'Conduct in-depth market analysis to identify opportunities and threats in your industry.',
    },
    {
      icon: IconUsers,
      title: 'Team Building',
      description: 'Build and manage high-performing teams to drive your business forward.',
    },
    {
      icon: IconTarget,
      title: 'Goal Setting',
      description: 'Set clear and achievable goals to measure your company’s success.',
    },
  ];

  

  return (
    <div className="cards-container">
      <div className="cards-grid" >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="card"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            {/* Card Icon */}
            <div className="card-icon">
              <card.icon />
            </div>

            {/* Card Title */}
            <Text className="card-title">{card.title}</Text>

            {/* Card Description */}
            <Text className="card-description">{card.description}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
