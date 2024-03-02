import ProductCard from "../components/core/ProductCard";
import Manure from "../../public/Images/Products/Organic Manure.png";
import Pump from "../../public/Images/Products/Pump.png";
import Pesticide from "../../public/Images/Products/Plant Pesticides.png";
import wheetSeeds from "../../public/Images/Products/Wheet Seeds.png";
import Hoe from "../../public/Images/Products/Hoe.png";
import riceSeeds from "../../public/Images/Products/Rice Seeds.png";
import YellowHighlight from "../components/common/YellowHighlight";
const Buy = () => {
  return (
    <div className="bg-black">
      <div className="w-11/12 flex flex-col gap-2 justify-center items-center mx-auto  text-[#d3cece] mt-10 mb-10">
        {/* Heading */}
        <div>
          <h2 className="text-[4rem]">
            <YellowHighlight text={"Buy These"} />
          </h2>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-x-14 w-[80%]">
          {/* Product Card */}
          <ProductCard
            image={Pump}
            name={"Portable Garden Pump Sprayer"}
            price1={200}
            price2={100}
          />
          <ProductCard
            image={Manure}
            name={"Portable Garden Pump Sprayer"}
            price1={200}
            price2={100}
          />
          <ProductCard
            image={Pesticide}
            name={"Portable Garden Pump Sprayer"}
            price1={200}
            price2={100}
          />
          <ProductCard
            image={wheetSeeds}
            name={"Portable Garden Pump Sprayer"}
            price1={200}
            price2={100}
          />
          <ProductCard
            image={Hoe}
            name={"Portable Garden Pump Sprayer"}
            price1={200}
            price2={100}
          />
          <ProductCard
            image={riceSeeds}
            name={"Portable Garden Pump Sprayer"}
            price1={200}
            price2={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Buy;
