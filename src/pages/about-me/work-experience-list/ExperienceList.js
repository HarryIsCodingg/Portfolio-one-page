import experiences from "../../../core/data/experiences.json";
import WorkExperienceCard from "./work-experience/WorkExperienceCard";

const ExperienceList = () => {
  return (
    <section className='flex flex-column gap-24'>
      {experiences.map((exp, index) => (
        <WorkExperienceCard key={index} {...exp} />
      ))}
    </section>
  );
};

export default ExperienceList;