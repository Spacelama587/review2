import React from 'react';

const cards = [
  {
    url: "./screen1.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "./screen2.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "./screen3.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "./screen4.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "./screen5.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "./screen6.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "./screen7.png",
    title: "Title 7",
    id: 7,
  },
];

const Card = ({ url, title }) => (
  <div className="p-4">
    <img src={url} alt={title} className="w-full h-auto" />
    <h3 className="mt-2 text-center">{title}</h3>
  </div>
);

const CardGrid = () => (
  <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map(card => (
        <Card key={card.id} url={card.url} title={card.title} />
      ))}
    </div>
  </div>
);

export default CardGrid;
