import "../../styles/Section.scss"
import "./ExperienceSection.scss";


const ExperienceSection = (props) => {
    return(
        <section id="experience" class="section section--secondaryBackground">
        <h1 class="section__sectionHeader">Experience</h1>
        <div class="section__experienceContainer">
          <div class="section__experienceCard">
            <h2 class="section__experienceHeader">Nology</h2>
            <p class="section__experienceStartDate">Start Date: 20/09/2022</p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>

          <hr class="section__divider" />

          <div class="section__experienceCard">
            <h2 class="section__experienceHeader">Placeholder name</h2>
            <p class="section__experienceStartDate">Start Date: xx/xx/xxxx</p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>

          <hr class="section__divider"/>

          <div class="section__experienceCard">
            <h2 class="section__experienceHeader">Placeholder name</h2>
            <p class="section__experienceStartDate">Start Date: xx/xx/xxxx</p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>

          <hr class="section__divider"/>

          <div class="section__experienceCard">
            <h2 class="section__experienceHeader">Placeholder name</h2>
            <p class="section__experienceStartDate">Start Date: xx/xx/xxxx</p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>

        </div>
      </section>
    )
}
export default ExperienceSection;