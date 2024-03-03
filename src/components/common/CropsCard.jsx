import "./CropsCard.css";
import PropTypes from "prop-types";
function CropsCard({ image, title, description, climate, uses }) {
  return (
    <div className="card">
      <img className="cropsimg" src={image} alt={title} />
      <div className="card-content">
        <h2 className="text-4xl  font-semibold">
          <b>{title}</b>
        </h2>
        <p className="text-[14px]">{description}</p>
        <p>
          <h4 className="text-lg font-semibold">
            <b>Climate:</b>
          </h4>{" "}
          {climate}
        </p>
        <p>
          <h4 className="text-lg font-semibold">
            <b>Uses:</b>
          </h4>{" "}
          <p className="text-[14px]">{uses}</p>
        </p>
      </div>
    </div>
  );
}

CropsCard.propTypes = {
  //   image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CropsCard;
