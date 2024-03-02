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
      <div className="w-11/12 flex flex-col gap-2 justify-center items-center mx-auto  text-[#d3cece] mt-10">
        <div>
          <h2 className="text-[4rem]">
            <YellowHighlight text={"Buy These"} />
          </h2>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-x-14 w-[80%]">
          <ProductCard
            image={Pump}
            name={"Portable Garden Pump Sprayer"}
            price1={2000}
            price2={1599}
          />
          <ProductCard
            image={Manure}
            name={"Organic Manure"}
            price1={1299}
            price2={899}
          />
          <ProductCard
            image={Pesticide}
            name={"Pesticides"}
            price1={500}
            price2={399}
          />
          <ProductCard
            image={wheetSeeds}
            name={"Wheet Seeds"}
            price1={200}
            price2={99}
          />
          <ProductCard image={Hoe} name={"Hoe"} price1={1000} price2={799} />
          <ProductCard
            image={riceSeeds}
            name={"Rice Seeds"}
            price1={199}
            price2={149}
          />
        </div>
      </div>
    </div>
  );
};

export default Buy;
