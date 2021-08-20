import React from "react";
import User from "../User/User";
import "./card.css";

const Card = ({ person }) => {
  return (
    <div className="card">
      {person.map((user) => {
        return (
          <User
            key={user.id}
            {...user}
            about={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
        );
      })}
    </div>
  );
};

export default Card;
