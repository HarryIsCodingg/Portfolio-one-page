import './WorkPage.css';
import CompleteAppsCard from '../../components/complete-apps/CompleteAppsCard';
import feedbackUiImage from '../../assets/images/feedback-ui.png';
import ecommerceImage from '../../assets/images/ecommerce.png';
import ecommerceAPI from '../../assets/images/ecommerce-backend.png';
import hotel from '../../assets/images/Hotel.png';
import edgeLedger from '../../assets/images/edgeLedger.png';
import petAdoption from '../../assets/images/pet-adoption.png';
import vibeCheck from '../../assets/images/vibeCheck.png';
import ShortApps from '../../components/short-apps/ShortApps';
import ProjectsSection from '../../components/projects/ProjectsSection';

const WorkPage = () => {
  const feedbackList = ['ReactJs', 'Javascript', 'HTML', 'CSS'];
  const ecommerceList = ['ReactJs', 'Javascript', 'SpringBoot', 'MongoDB', 'HTML', 'CSS'];
  const ecommerceAPIList = ['SpringBoot', 'MongoDB'];
  const hotelUIList = ['HTML', 'CSS', 'JavaScript'];
  const edgeLedgerList = ['HTML', 'CSS'];
  const petAdoptionList = ['PHP', 'HTML', 'CSS'];
  const diningPhilosopher =
    'This algorithm is example of concurrency problem dealing with the allocation of ' +
    'limited resources among competing processes';
  const salesMenu =
    'This application will load a series of sales record files and then display the data based upon user selection';

  return (
    <div className="work-page-wrapper">
      <div className="font-size-large">
        <span className="primary-color">/</span>projects
      </div>
      <div>List of my projects</div>
      <div className="app-wrapper">
        <div className="font-size-large">
          <span className="primary-color">#</span>apps
        </div>
        <div className="app-container">
          <ProjectsSection />
        </div>
      </div>

      <div className="app-wrapper">
        <div className="font-size-large">
          <span className="primary-color">#</span>mini-apps
        </div>
        <div className="app-container">
          <ShortApps
            language="java"
            name="Dining philosopher"
            description={diningPhilosopher}
            navigateTo="https://github.com/HarryIsCodingg/Dining-Philosopher-Algorithm"
          />
          <ShortApps
            language="clojure"
            name="Sales menu"
            description={salesMenu}
            navigateTo="https://github.com/HarryIsCodingg/Clojure"
          />
          <ShortApps
            language="java"
            name="Snake and ladder"
            description="Game based upon snake and ladder board game"
            navigateTo="https://github.com/HarryIsCodingg/SnakeAndLadder"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
