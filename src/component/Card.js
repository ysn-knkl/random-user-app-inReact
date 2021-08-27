import React from "react";
import email from "../assets/email.svg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";

const Card = ({ user }) => {
  return (
    <div className="card-body">
      <div className="card-row">
        <img className="rounded-circle mx-auto" src={user.picture.large}></img>
        <p className="card-content">
          {user.name.title} {user.name.first} {user.name.last}
        </p>
      </div>
      <div className="card-row">
        <img class="fas fa-envelope-open-text" src={email}/>
        <p className="card-content">{user.email}</p>
      </div>
      <div className="card-row">
        <img class="fas fa-envelope-open-text" src={phone} />
        <p className="card-content">{user.phone}</p>
      </div>
      <div className="card-row">
        <img class="fas fa-envelope-open-text"  src={location} />
        <p className="card-content">
          {user.location.city} - {user.location.country}
        </p>
      </div>
      <div className="card-bottom">Age : {user.dob.age}</div>
      <div className="card-bottom">Register Date : {user.registered.date}</div>
    </div>
  );
};
export default Card;
