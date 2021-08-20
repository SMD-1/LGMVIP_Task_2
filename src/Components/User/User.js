import "./user.css";

const User = ({ email, first_name, last_name, avatar, about }) => {
  return (
    <div className="user">
      <div className="image">
        <img src={avatar} alt={first_name} />
      </div>
      <div className="details">
        <h4>
          Name: {first_name} {last_name}
        </h4>
        <h4>Email: {email}</h4>
        <blockquote>{about}</blockquote>
      </div>
    </div>
  );
};

export default User;
