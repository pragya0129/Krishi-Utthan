import "./Tutorial.css";
function Tutorial() {
  return (
    <div className="tutorial">
      <div className="cardbody">
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/JDqTTyPPf-o?si=yLlBf4tbOW71GPiS"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/THBd-AId4os?si=iS8XfCyl-IW6kBdu"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/U3fJyOhsRgE?si=VAJH_NLtKpwQJl1c"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Tutorial;
