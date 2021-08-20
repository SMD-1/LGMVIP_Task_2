import "./navbar.css";

const Navbar = ({ getUser }) => {
  return (
    <>
      <nav>
        <div className="logo">Zippy</div>
        <div className="button">
          <button onClick={getUser}>Get Users</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
