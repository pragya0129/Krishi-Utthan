import CropsCard from "../common/CropsCard";
import "../common/CropsCard.css";

function Summer() {
  return (
    <div className="cards">
      <CropsCard
        image="/public/barley.jpg"
        title="Barley"
        climate="Barley is grown in a variety of climates, from temperate to subtropical."
        description="Barley is a cereal grain that is a staple food in many parts of the world."
        uses="Barley is used for making beer, bread, and as a side dish."
      />
      <CropsCard
        image="/public/barley.jpg"
        title="Barley"
        climate="Barley is grown in a variety of climates, from temperate to subtropical."
        description="Barley is a cereal grain that is a staple food in many parts of the world."
        uses="Barley is used for making beer, bread, and as a side dish."
      />
    </div>
  );
}

export default Summer;
