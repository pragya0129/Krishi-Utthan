import CropsCard from "../common/CropsCard";
import "../common/CropsCard.css";
function Summer() {
  return (
    <div className="cards">
      <CropsCard
        image="/public/7c098280951a28c0f2aa4291f179ae42.png"
        title="Maize"
        climate="Maize can be grown in a variety of climates, from tropical to temperate."
        description="Maize, also known as corn, is a staple food in many parts of the world."
        uses="Maize is used for making corn dishes, soups, and as a side dish."
      />
    </div>
  );
}

export default Summer;
