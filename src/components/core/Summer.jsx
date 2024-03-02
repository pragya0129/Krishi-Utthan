// import CropsCard from "../common/CropsCard";
import "../common/CropsCard.css";
import { useState, useEffect } from "react";
import { crops } from "../../../data/crops.js";
import CropsCard from "../common/CropsCard.jsx";

function Summer() {
  const [filteredCrops, setFilteredCrops] = useState([]);

  useEffect(() => {
    // Function to filter crops by season
    const filterCropsBySeason = (season) => {
      const filtered = [];
      for (let i = 0; i < crops.length; i++) {
        const cropName = Object.keys(crops[i])[0];
        const cropData = crops[i][cropName];
        if (cropData.season.toLowerCase() === season.toLowerCase()) {
          filtered.push(crops[i]);
        }
      }
      console.log(filtered);
      setFilteredCrops(filtered);
    };

    // Call the filter function with a season (e.g., 'Summer')
    filterCropsBySeason("summer");
  }, []);

  return (
    <div className="cards">
      {filteredCrops.map((crop, index) => {
        const cropName = Object.keys(crop)[0];
        const cropData = crop[cropName]; // Get the crop data
        return (
          <CropsCard
            key={index}
            title={cropName}
            description={cropData.description}
            climate={cropData.climate}
            uses={cropData.uses}
          />
        );
      })}
    </div>
  );

  //   return (
  //     <div className="cards">
  //       <CropsCard
  //         image="Images/maize.jpg"
  //         title="Maize"
  //         climate="Maize can be grown in a variety of climates, from tropical to temperate."
  //         description="Maize, also known as corn, is a staple food in many parts of the world."
  //         uses="Maize is used for making corn dishes, soups, and as a side dish."
  //       />
  //       <CropsCard
  //         image="Images/tomato.jpg"
  //         title="Tomato"
  //         description="Tomato is a fruit that is commonly used as a vegetable in cooking."
  //         climate="Tomatoes thrive in warm weather and are typically grown in the summer."
  //         uses="Tomatoes are used in salads, sandwiches, sauces, soups, and as a side dish."
  //       />
  //       <CropsCard
  //         image="mango.jpg"
  //         title="Mango"
  //         description="Mango is a tropical fruit known for its sweet and juicy flesh."
  //         climate="Mango trees thrive in warm, tropical climates."
  //         season="Summer"
  //         uses="Mango is eaten fresh, used in desserts, smoothies, and cooking."
  //       />
  //       <CropsCard
  //         image="Images/cotton.png"
  //         title="Cotton"
  //         description="Cotton is a soft, fluffy staple fiber that grows in a boll, or protective case, around the seeds of the cotton plants of the genus Gossypium in the mallow family Malvaceae."
  //         climate="Cotton is grown in warm climates with moderate rainfall."
  //         uses="Cotton is used to make clothing, textiles, and other products."
  //       />
  //     </div>
  //   );
}

export default Summer;
