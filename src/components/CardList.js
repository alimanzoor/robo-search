import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  return (
    <div className="card-list">
      {robots.map((robot, i) => <Card key={i} robot={robot} />)}
    </div>
  )
}

export default CardList;