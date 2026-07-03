import "./FeatureCard.css";

function FeatureCard({
    image,
    tag,
    title,
    description,
    reverse,
}) {
    return (
        <div className={`feature-card ${reverse ? "reverse" : ""}`}>

            <div className="feature-content">

                <h5>{tag}</h5>
                <h3 className="feature-title">
                    <span className="blue-text">
                        {title.split(" ").slice(0, 2).join(" ")}
                    </span>{" "}
                    {title.split(" ").slice(2).join(" ")}
                </h3>

                <p>{description}</p>

                <button>REQUEST A DEMO</button>

            </div>
            <div className="feature-image">
                <img src={image} alt={title} />
            </div>

        </div>
    );
}

export default FeatureCard;