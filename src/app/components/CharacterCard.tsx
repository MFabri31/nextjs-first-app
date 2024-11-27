import React from "react";

const CharacterCard = ({ name, species, image }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{species}</p>
    </div>
  );
};

export default CharacterCard;
