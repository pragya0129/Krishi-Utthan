import "../common/CropsCard.css";
import { useState, useEffect } from "react";
import { crops } from "../../../data/crops.js";
import CropsCard from "../common/CropsCard.jsx";

function Monsoon() {
  const [filteredCrops, setFilteredCrops] = useState([]);

  useEffect(() => {
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

    filterCropsBySeason("monsoon");
  }, []);

  return (
    <div className="cards">
      {filteredCrops.map((crop, index) => {
        const cropName = Object.keys(crop)[0];
        const cropData = crop[cropName];
        return (
          <CropsCard
            key={index}
            title={cropName}
            description={cropData.description}
            climate={cropData.climate}
            uses={cropData.uses}
            image={cropData.image}
          />
        );
      })}
    </div>
  );
}

export default Monsoon;
