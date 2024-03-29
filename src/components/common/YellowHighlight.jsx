import "./YellowHighlight.css";
const YellowHighlight = ({ text }) => {
  return (
    <span className="bg-gradient-to-r from-amber-500 to-yellow-300 text-transparent bg-clip-text font-bold text-[50px] family">
      {text}
    </span>
  );
};

export default YellowHighlight;
