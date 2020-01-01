import React from 'react';

const Card = ({robot}) => {
  const {name, id, email} = robot;
  return (
    <div className="tc grow bg-light-green br3 pa3 dib bw2 shadow-5">
      <img src={`https://robohash.org/${id}?150x150`} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card;