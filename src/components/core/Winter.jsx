import CropsCard from "../common/CropsCard";
import "../common/CropsCard.css";
function Winter() {
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
        image="Images/wheat.jpg"
        title="Wheat"
        climate="Wheat is grown in a variety of climates, from temperate to subtropical."
        description="Wheat is a cereal grain that is a staple food in many parts of the world for making flour."
        uses="Wheat is used for making bread, pasta, noodles, biscuits, and more."
      />
      <CropsCard
        image="Images/apples.jpg"
        title="Apples"
        description="Apples are one of the most widely cultivated tree fruits."
        climate="Apples are grown in temperate climates."
        uses="Apples are eaten fresh, used in cooking, and used to make cider."
      />
    </div>
  );
}

export default Winter;
