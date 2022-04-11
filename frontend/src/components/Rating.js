import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  const ratingStars = calculateTotalStars(value, color);
  return (
    <div>
      <span>{ratingStars}</span>
      <span>{text && text}</span>
    </div>
  );
};

const calculateTotalStars = (value, color) => {
  let totalStar = [];
  if (value % 1 === 0.5) {
    totalStar.push(
      <FontAwesomeIcon icon={faStarHalfStroke} style={{ color }} />
    );
    value = value - 0.5;
  }
  for (let i = value; i > 0; i--) {
    totalStar.unshift(<FontAwesomeIcon style={{ color }} icon={faStar} />);
  }
  while (totalStar.length < 5) {
    totalStar.push(<FontAwesomeIcon style={{ color }} icon={faStarRegular} />);
  }
  return totalStar;
};

Rating.defaultProps = {
  color: "#f8e825",
};

Rating.propType = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.number,
};

export default Rating;
