import "../../styles/Section.scss"
import "./ProjectsSection.scss";
import Modal from "../../components/Modal/Modal";
import {useState, useEffect} from "react";

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

  // useEffect(() => {
  //   if(isModalShown){
  //     console.log(document.querySelector('#modal'));
  //     document.querySelector('#modal').focus();
  //   }
  // }, [isModalShown]);

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
            images: ["word-guesser1.png","word-guesser2.png","word-guesser3.png"],
            skills:["HTML","SCSS","JavaScript"],
            description:"This is my word guesser project. The languages used are HTML, SCSS and JavaScript. It also uses a random word and definition api. When the start button is pressed the countdown time starts and a scrambled word and definition in outputted. The user must guess what the original word is before the computer guesses the word. The game ends when the time runs out or either the user or computer gets a score of 10.",
            projectLink:"https://lewislovett.github.io/word_guesser/",
            repoLink:"https://github.com/LewisLovett/word_guesser"
          })
          break;
          case "project3":
            setProjectDetails({
              title: "Morser Code",
              images: ["morse-code1.png","morse-code2.png","morse-code3.png"],
              skills:["HTML","SCSS","JavaScript"],
              description:"This is my morse code project.",
              projectLink:"https://lewislovett.github.io/word_guesser/",
              repoLink:"https://github.com/LewisLovett/word_guesser"
            })
            break;
            case "project4":
              setProjectDetails({
                title: "Currency Converter Group Project",
                images: ["currency-converter1.png","currency-converter2.png","currency-converter3.png","currency-converter4.png","currency-converter5.png"],
                skills:["HTML","SCSS","JavaScript","React", "Trello"],
                description:"This is my Currency Converter group project that I took part in during my software engineer training at _nology. The goal of the project was to create a currency converter designed to match mock ups and to fulfil a list of requirements that were collated during meetings with a mock client. The project lasted two weeks and we used an Agile project methodology. We had two-day long sprints during which we were split into alternating pairs to complete tasks. For one of the sprints, I was assigned to be one of two project managers. The responsibility of the PMs was to create and assign tasks for the rest of the pairs via tickets created with Trello. At the end of the two weeks, we were able to create a project that visually matched the mock-ups and satisfied the client’s requirements. .",
                projectLink:"",
                repoLink:""
              })
              break;
    }
    setIsModalShown(true);
    document.body.style.overflow = 'hidden';
  }

    const closeModal = () =>{
      setIsModalShown(false);
      document.body.style.overflow = 'unset';
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
            <img class="section__projectImage" alt="Project 2 image" src={require("../../assets/images/word-guesser1.png" )}/>
          </article>
          <article class="section__projectCard" onClick={(e) => showProjectModal("project3", e)}>
            <h2>Morse Code</h2>
            <img class="section__projectImage" alt="Project 3 image" src={require("../../assets/images/morse-code1.png" )}/>
          </article>
          <article class="section__projectCard" onClick={(e) => showProjectModal("project4", e)}>
            <h2>Morse Code</h2>
            <img class="section__projectImage" alt="Project 4 image" src={require("../../assets/images/currency-converter1.png" )}/>
          </article>
        </div>
      </section>
    )
}
export default ProjectsSection;