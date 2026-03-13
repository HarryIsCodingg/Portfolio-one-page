import "./WorkExperienceCard.css";

const WorkExperienceCard = ({
       title, company, description, achievements, startDate, endDate, location, logo}) => {

  return (
    <div className="experience-card">
      <div className="experience-left">
        <img src={logo} alt={company} className="experience-logo" />
      </div>

      <div className="experience-content">
        <div className="experience-header">
          <div>
            <h2 className="experience-title">{title}</h2>
            <p className="experience-company">{company}</p>
          </div>

          <div className="experience-meta">
            <span className="experience-date">
              {startDate} - {endDate}
            </span>
            <span className="experience-location">{location}</span>
          </div>
        </div>

        <p className="experience-description">{description}</p>

        <div className="experience-achievements">
          <p className="achievements-title">Key Achievements:</p>

          <ul>
            {achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;