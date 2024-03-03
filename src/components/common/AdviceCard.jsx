function AdviceCard({ image, title, description }) {
  return (
    <div className="card ">
      <img
        className="h-[240px] w-[240px] ml-[4rem] mb-4 mt-4"
        src={image}
        alt={title}
      />
      <div className="card-content border-2 border-t-2 ">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AdviceCard;
