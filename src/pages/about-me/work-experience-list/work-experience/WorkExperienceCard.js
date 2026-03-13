import "./WorkExperienceCard.css";
import {logos} from "../../../../assets/images";
import Card from "../../../../components/shared/card/Card";

const WorkExperienceCard = ({
       title, company, achievements, startDate, endDate, location, logo}) => {

  return (
    <Card>
      <div className="experience-card">
        <div className="experience-left">
          <img src={logos[logo]} alt={company} className="experience-logo" />
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

          {achievements && achievements.length > 0 && (
            <div className="experience-achievements">
              <p className="achievements-title">Key Achievements:</p>

              <ul>
                {achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Card>

  );
};

export default WorkExperienceCard;