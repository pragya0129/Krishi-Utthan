import CropsCard from "../common/CropsCard";
import "../common/CropsCard.css";

function Summer() {
  return (
    <div className="cards">
      <CropsCard
        image="Images/maize.jpg"
        title="Maize"
        climate="Maize can be grown in a variety of climates, from tropical to temperate."
        description="Maize, also known as corn, is a staple food in many parts of the world."
        uses="Maize is used for making corn dishes, soups, and as a side dish."
      />
      <CropsCard
        image="Images/tomato.jpg"
        title="Tomato"
        description="Tomato is a fruit that is commonly used as a vegetable in cooking."
        climate="Tomatoes thrive in warm weather and are typically grown in the summer."
        uses="Tomatoes are used in salads, sandwiches, sauces, soups, and as a side dish."
      />
      <CropsCard
        image="Images/litchi.JPG"
        title="Lychee"
        description="Lychee is a tropical fruit known for its sweet and juicy flesh."
        climate="Lychee trees thrive in warm, tropical climates."
        uses="Lychee is eaten fresh and used in desserts and drinks."
      />
      <CropsCard
        image="Images/cotton.png"
        title="Cotton"
        description="Cotton is a soft, fluffy staple fiber that grows in a boll, or protective case, around the seeds of the cotton plants of the genus Gossypium in the mallow family Malvaceae."
        climate="Cotton is grown in warm climates with moderate rainfall."
        uses="Cotton is used to make clothing, textiles, and other products."
      />
    </div>
  );
}

export default Summer;
