import ProfileCard from "../components/common/ProfileCard";
import Pragya from "../../public/Images/Pragya.png";
import Aparna from "../../public/Images/Aparna.jpg";
import Kushagra from "../../public/Images/Kushag.jpg";
import Harshil from "../../public/Images/Harshil.jpg";
import YellowHighlight from "../components/common/YellowHighlight";

const ContactUs = () => {
  return (
    <div className=" flex flex-col gap-2 justify-center items-center mx-auto bg-black text-[#d3cece]">
      {/* Heading */}
      <div className="flex">
        <h2 className="text-[4rem] ">
          <YellowHighlight text={"KNOW US"} />
        </h2>
      </div>

      {/* Sub Heading */}
      <div>
        <p className="text-base  mt-5">
          We are team <YellowHighlight text={" DARAI GHODA "} /> from SRM
          Institute of Science And Technology
        </p>
      </div>
      {/* Cards */}
      <div className="flex flex-row flex-wrap gap-14 w-[60%] rounded-md mt-14">
        <ProfileCard
          name={"Pragya Gaur"}
          profile={"Frontend developer"}
          year={"B.Tech 2nd Year"}
          tech={"React.js"}
          image={Pragya}
        />

        <ProfileCard
          name={"Aparna Singh"}
          profile={"Designer"}
          year={"B.Tech 1st Year"}
          tech={"Canva"}
          image={Aparna}
        />

        <ProfileCard
          name={"Kushagra Pandey"}
          profile={"Backend Developer"}
          year={"B.Tech 1st Year"}
          tech={"Flask"}
          image={Kushagra}
        />

        <ProfileCard
          name={"Harshil Srivastav"}
          profile={"Designer"}
          year={"B.Tech 1st Year"}
          tech={"Adobe Illustrator"}
          image={Harshil}
        />
      </div>
    </div>
  );
};

export default ContactUs;
