import "../../styles/Section.scss"
import "./SkillsSection.scss";


const SkillsSection = (props) => {
    return(
        <section id="skills" class="section section--primaryBackground">
        <h1 class="section__sectionHeader">Skills</h1>
        <ul class="section__skillsList">
            <li class="section__skill"><i class="fa-brands fa-html5 section__skillIcon"></i> HTML5</li>
            <li class="section__skill"><i class="fa-brands fa-css3-alt section__skillIcon"></i> CSS3</li>
            <li class="section__skill"><i class="fa-brands fa-square-js section__skillIcon"></i> JavaScript</li>
            <li class="section__skill"><i class="fa-brands fa-css3 section__skillIcon"></i> SCSS</li>
            <li class="section__skill"><i class="fa-solid fa-window-minimize section__skillIcon"></i> BEM</li>
            <li class="section__skill"><i class="fa-solid fa-grip section__skillIcon"></i> Grid</li>
            <li class="section__skill"><i class="fa-solid fa-boxes-stacked section__skillIcon"></i> FlexBox</li>
        </ul>
      </section>
    )
}
export default SkillsSection;