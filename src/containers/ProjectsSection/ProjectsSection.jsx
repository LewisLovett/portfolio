import "../../styles/Section.scss"
import "./ProjectsSection.scss";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

const ProjectsSection = (props) => {
  const [isModalShown,setIsModalShown] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    images: [],
    skills:[],
    description:"",
    link:"profile.jpg",
    projectLink:"",
    repoLink:""
  });

  const showProjectModal = (id, e) => {
    e.preventDefault();
    switch(id){
      case "project1":
        setProjectDetails({
          title: "Calculator",
          images: ["calculator1.png","calculator2.png","calculator3.png"],
          skills:["HTML","SCSS","JavaScript"],
          description:"This is my calculator project. The languages used are HTML, SCSS and JavaScript. This calculator can handle multiple number inputs, carry out division, multiplication, addition and subtraction. It also allows the user to input decimal, positive, negative numbers and can convert numbers into percentages.",
          projectLink:"https://lewislovett.github.io/calculator/",
          repoLink:"https://github.com/LewisLovett/calculator"
        })
        break;
        case "project2":
          setProjectDetails({
            title: "Word Guesser",
            images: ["word-guesser.png","word-guesser.png","word-guesser.png"],
            skills:["HTML","SCSS","JavaScript"],
            description:"This is my word guesser project. The languages used are HTML, SCSS and JavaScript. It also uses a random word and definition api. When the start button is pressed the countdown time starts and a scrambled word and definition in outputted. The user must guess what the original word is before the computer guesses the word. The game ends when the time runs out or either the user or computer gets a score of 10.",
            projectLink:"https://lewislovett.github.io/word_guesser/",
            repoLink:"https://github.com/LewisLovett/word_guesser"
          })
          break;
          case "project3":
            setProjectDetails({
              title: "Morser Code",
              images: ["morse-code.png","morse-code.png","morse-code.png"],
              skills:["HTML","SCSS","JavaScript"],
              description:"This is my morse code project.",
              projectLink:"https://lewislovett.github.io/word_guesser/",
              repoLink:"https://github.com/LewisLovett/word_guesser"
            })
            break;
    }
    setIsModalShown(true)
  }

    const closeModal = () =>{
      setIsModalShown(false);
    }
  
    return(
        <section id="portfolio" class="section section--secondaryBackground">
        {isModalShown && <Modal setShown={closeModal} title={projectDetails.title} images={projectDetails.images} skills={projectDetails.skills} description ={projectDetails.description} projectLink={projectDetails.projectLink} repoLink={projectDetails.repoLink}/>} 
        <h1 class="section__sectionHeader">Portfolio</h1>
        <div class="section__portfolioContainer">
          <article class="section__projectCard" onClick={(e) => showProjectModal("project1", e)}>
            <h2>Calculator</h2>
            <img class="section__projectImage" alt="Project 1 image" src={require("../../assets/images/calculator1.png" )}/>
          </article>
          <article class="section__projectCard" onClick={(e) => showProjectModal("project2", e)}>
            <h2>Word Guesser</h2>
            <img class="section__projectImage" alt="Project 2 image" src={require("../../assets/images/word-guesser.png" )}/>
          </article>
          <article class="section__projectCard" onClick={(e) => showProjectModal("project3", e)}>
            <h2>Morse Code</h2>
            <img class="section__projectImage" alt="Project 3 image" src={require("../../assets/images/morse-code.png" )}/>
          </article>
        </div>
      </section>
    )
}
export default ProjectsSection;