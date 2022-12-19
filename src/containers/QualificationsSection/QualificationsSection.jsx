import "../../styles/Section.scss"
import "./QualificationsSection.scss";


const QualificationsSection= (props) => {
    return(
        <section id="Qualifications" class="section section--primaryBackground">
                <div class="section__qualificationsContainer">
        <h1 class="section__sectionHeader">Qualifications</h1>

        <div class="section__qualificationCard">
            <h2 class="section__qualificationHeader">Nology</h2>
            <p class="section__qualificationStartDate">Secpember 2022 – Current</p>
          </div>

        <hr class="section__divider--altColor"/>

        <div class="section__qualificationCard">
            <h2 class="section__qualificationHeader">University of Hertfordshire</h2>
            <h3>BSc (Hons) Computer Science (Software Engineering) Direct Entry Year 3</h3>
            <p class="section__qualificationStartDate">2015 – 2016</p>
            <p>Award - First Class</p>
        </div>

        <hr class="section__divider--altColor"/>
        
        <div class="section__qualificationCard">
            <h2 class="section__qualificationHeader">University of Hertfordshire/North Herts College </h2>
            <h3>Foundation Degree in Computing Technologies (Software Development)</h3>
            <p class="section__qualificationStartDate">2013 – 2015</p>
            <p>Award - Commendation </p>
        </div>
       
    
       
        </div>
      </section>
    )
}
export default QualificationsSection;