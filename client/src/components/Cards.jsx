import React, { useEffect, useRef } from 'react';
import { Grid, Card, Text } from '@mantine/core';
import { IconBriefcase, IconChartBar, IconUsers, IconTarget } from '@tabler/icons-react';
import './Cards.css'; // Import the new CSS file

const Cards = () => {
  const cardRefs = useRef([]); // To reference each card DOM node

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => observer.unobserve(card));
    };
  }, []);

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
      description: 'Set and achieve ambitious business goals with our expert guidance and support.',
    },
  ];

  return (
    <div className="cards-container">
      <div className="cards-grid">
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
