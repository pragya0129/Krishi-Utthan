import AdviceCard from "../components/common/AdviceCard";

function ExpertAdvice() {
  return (
    <div className="cards">
      <AdviceCard
        title="Dr. Ananya Sharma"
        image="/public/woman.png"
        description="Implementing integrated pest management techniques can significantly reduce pesticide usage while maintaining crop health. Additionally, adopting precision irrigation methods such as drip irrigation can optimize water usage and enhance crop yield."
      />
      <AdviceCard
        title="Mr. Rajesh Patel"
        image="/public/man.png"
        description="Transitioning to organic farming practices can improve soil health and promote biodiversity on your farm. Utilize natural fertilizers like compost and vermicompost to enrich soil fertility, and practice crop rotation to minimize pests and diseases."
      />
    </div>
  );
}

export default ExpertAdvice;
