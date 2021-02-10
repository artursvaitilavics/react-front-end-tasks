import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Clicked!!!");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="CornflowerBlue" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = { title: "Default Title: Hello From Space..." };

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// css in js:
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
