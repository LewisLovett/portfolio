import "../../styles/Section.scss"
import "./WelcomeSection.scss";
import profileImg from "../../assets/images/profile.jpg"

const WelcomeSection = (props) => {
    return(
        <section id="landingSection" class="section section--primaryBackground">
        <h1 class="section__myName">Lewis Lovett</h1>
        <img class="section__profileImage" alt="Picture of Lewis Lovett" src={profileImg}/>
        <h2 class="section__jobTitle">Junior Software Developer</h2>
      </section>
    )
}
export default WelcomeSection;