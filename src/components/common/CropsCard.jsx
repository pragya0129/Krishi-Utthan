import "./CropsCard.css";
import PropTypes from "prop-types";
function CropsCard({ image, title, description, climate, uses }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          <h4>Climate:</h4> {climate}
        </p>
        <p>
          <h4>Uses:</h4> {uses}
        </p>
      </div>
    </div>
  );
}

CropsCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CropsCard;
