import "../../styles/Section.scss"
import "./ContactSection.scss";


const ContactSection = (props) => {
    return(
        <footer>
        <section id="contact" class="section section--secondaryBackground">
          <h1 class="section__sectionHeader">Contact</h1>
          <div class="section__iconContainer">
            <a href="mailto:llovett7575@gmail.com"><i class="fa-solid fa-envelope section__contactIcon"></i></a>
            <a href="https://www.linkedin.com/in/lewis-lovett/"><i class="fa-brands fa-linkedin section__contactIcon"></i></a>
            <a href="https://github.com/LewisLovett"><i class="fa-brands fa-github section__contactIcon"></i></a>
          </div>
        </section>
      </footer>
    )
}
export default ContactSection;