import "../../styles/Section.scss"
import "./ExperienceSection.scss";


const ExperienceSection = (props) => {
    return(
        <section id="experience" class="section section--secondaryBackground">
        <div class="section__experienceContainer">
        <h1 class="section__sectionHeader">Experience</h1>
          <div class="section__experienceCard">
            <h2 class="section__experienceHeader">Nology</h2>
            <p class="section__experienceStartDate">Start Date: 20/09/2022</p>
          </div>

          <hr class="section__divider"/>

          <div class="section__experienceCard">
            <h2 class="section__experienceHeader">Cat Hill Allotments</h2>
            <p class="section__experienceStartDate">November 2016 – Current</p>
            <ul>
              <li>Link to site: <a href="http://cathillallotments.btck.co.uk/">http://cathillallotments.btck.co.uk/</a></li>
            </ul>
          </div>

          <hr class="section__divider" />
          
          <div class="section__experienceCard">
            <h2 class="section__experienceHeader">Just IT Training</h2>
            <p class="section__experienceStartDate">May 2019 – September 2020</p>

          </div>

          <hr class="section__divider"/>

          <div class="section__experienceCard">
            <h2 class="section__experienceHeader">COMMUNITY BARNET</h2>
            <p class="section__experienceStartDate">March 2017 – May 2019</p>
            <ul>
              <li>Link to site: <a href="http://www.healthwatchbarnet.co.uk/">http://www.healthwatchbarnet.co.uk/</a></li>
              <li>Link to site:<a href="http://www.healthwatchbarnet.co.uk/">http://www.healthwatchbrent.co.uk/</a></li>
              <li>Link to site:<a href="http://www.healthwatchbarnet.co.uk/">http://www.healthwatchnewham.co.uk/</a></li>
            </ul>
          </div>

          <hr class="section__divider"/>

          <div class="section__experienceCard">
            <h2 class="section__experienceHeader">Montet Designs</h2>
            <p class="section__experienceStartDate">December 2018 – January 2019</p>
            <ul>
              <li>Link to site: <a href="http://montetdesigns.co.uk/">http://montetdesigns.co.uk/</a></li>
            </ul>
          </div>

          <hr class="section__divider"/>

          <div class="section__experienceCard">
            <h2 class="section__experienceHeader">Sallie Rose Literary Services</h2>
            <p class="section__experienceStartDate">March 2018 – May 2018</p>
            <ul>
              <li>Link to site: <a href="https://meditationow.co.uk/">https://meditationow.co.uk/</a></li>
            </ul>
          </div>

          <hr class="section__divider"/>

          <div class="section__experienceCard">
            <h2 class="section__experienceHeader">GemSkii</h2>
            <p class="section__experienceStartDate">Febuary 2017 – June 2017</p>
            <ul>
              <li>Link to site: <a href="http://www.cricklewoodboxingclub.co.uk/">http://www.cricklewoodboxingclub.co.uk/</a></li>
            </ul>
          </div>

        </div>
        <hr class="section__divider"/>
        <hr class="section__divider"/>
        <div class="section__qualificationsContainer">
        <h1 class="section__sectionHeader">Qualifications</h1>

        <div class="section__experienceCard">
            <h2 class="section__experienceHeader">Nology</h2>
            <p class="section__experienceStartDate">Secpember 2022 – Current</p>
          </div>

        <hr class="section__divider"/>

        <div class="section__experienceCard">
            <h2 class="section__experienceHeader">University of Hertfordshire</h2>
            <h3>BSc (Hons) Computer Science (Software Engineering) Direct Entry Year 3</h3>
            <p class="section__experienceStartDate">2015 – 2016</p>
            <p>Award - First Class</p>
        </div>

        <hr class="section__divider"/>
        
        <div class="section__experienceCard">
            <h2 class="section__experienceHeader">University of Hertfordshire/North Herts College </h2>
            <h3>Foundation Degree in Computing Technologies (Software Development)</h3>
            <p class="section__experienceStartDate">2013 – 2015</p>
            <p>Award - Commendation </p>
        </div>
        </div>
    
       

      </section>
    )
}
export default ExperienceSection;