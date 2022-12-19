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
    repoLinks:[]
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
          repoLinks:["https://github.com/LewisLovett/calculator"]
        })
        break;
        case "project2":
          setProjectDetails({
            title: "Word Guesser",
            images: ["word-guesser1.png","word-guesser2.png","word-guesser3.png"],
            skills:["HTML","SCSS","JavaScript"],
            description:"This is my word guesser project. The languages used are HTML, SCSS and JavaScript. It also uses a random word and definition api. When the start button is pressed the countdown time starts and a scrambled word and definition in outputted. The user must guess what the original word is before the computer guesses the word. The game ends when the time runs out or either the user or computer gets a score of 10.",
            projectLink:"https://lewislovett.github.io/word_guesser/",
            repoLinks:["https://github.com/LewisLovett/word_guesser"]
          })
          break;
          case "project3":
            setProjectDetails({
              title: "Morse Code",
              images: ["morse-code1.png","morse-code2.png","morse-code3.png"],
              skills:["HTML","SCSS","JavaScript"],
              description:`This is my Morse Code project. The deployed site allows the user to enter a word and the word is converted into morse code and outputted for the user to see. There is also an option for the user to enter morse code using . and – and the word will be translated from morse code into latin alphabet characters. The valid characters are a-z, A-Z, 0-9, ', @, (, ), :, ,, =, !, ., -, %, +, ", ? and /. Any other input will return an error message.`,
              projectLink:"https://lewislovett.github.io/word_guesser/",
              repoLinks:["https://github.com/LewisLovett/word_guesser"]
            })
            break;
            case "project4":
              setProjectDetails({
                title: "Currency Converter Group Project",
                images: ["currency-converter1.png","currency-converter2.png","currency-converter3.png","currency-converter4.png","currency-converter5.png"],
                skills:["HTML","SCSS","JavaScript","React", "Trello"],
                description:"This is my Currency Converter group project that I took part in during my software engineer training at _nology. The goal of the project was to create a currency converter designed to match mock ups and to fulfil a list of requirements that were collated during meetings with a mock client. The project lasted two weeks and we used an Agile project methodology. We had two-day long sprints during which we were split into alternating pairs to complete tasks. For one of the sprints, I was assigned to be one of two project managers. The responsibility of the PMs was to create and assign tasks for the rest of the pairs via tickets created with Trello. At the end of the two weeks, we were able to create a project that visually matched the mock-ups and satisfied the client’s requirements. .",
                projectLink:"",
                repoLinks:[]
              })
              break;
              case "project5":
                setProjectDetails({
                  title: "Hangman",
                  images: ["hangman1.png","hangman2.png","hangman3.png","hangman4.png"],
                  skills:["Java"],
                  description:"This is my Hangman project. When the main method is run the user is shown in the console a number of dashes to indicate the length of the word they will need to guess. The user is prompted to enter a single letter. If the word contains that letter the positions of the letter are shown in the dashes. If the word does not contain the letter, then the player loses a life. The game end when the user loses 6 lives or they have guessed the all the correct letters. If the user enters a letter they have already entered or a character that is not a letter then they are notified with an error message and they do not lose a life. ",
                  projectLink:"",
                  repoLinks:["https://github.com/LewisLovett/Hangman"]
                })
                break;
                case "project6":
                  setProjectDetails({
                    title: "Dark Souls Database",
                    images: ["ds-database1.png","ds-database2.png","ds-database3.png","ds-database4.png"],
                    skills:["Java","Spring","MySQL"," React","SCSS"],
                    description:"This is the full stack project, a Database that stores infomation for the Bosses in the Dark Souls game series. This project was created as part of the Nology developer course over a period of 1 week. The goal of the project was to create an full stack project which interacts with a database by creating, reading, updating and deleting records. The programs used to create the project were .",
                    projectLink:"",
                    repoLinks:["https://github.com/LewisLovett/dark-souls-database-front-end","https://github.com/LewisLovett/dark-souls-database-backend"]
                  })
                  break;
                  case "project7":
                    setProjectDetails({
                      title: "Snap",
                      images: ["snap1.png","snap2.png","snap3.png","snap4.png","snap5.png"],
                      skills:["Java"],
                      description:"This is my Snap game project. The game starts with player 1 then player 2 entering their names. Then two cards are drawn from the deck and shown to the players. Player 1 goes first and they must type 'snap' if the cards match. After 5 seconds a new card is drawn and it is now Player 2's turn. The game ends when the player enters 'snap' on their turn when the cards match or if 'snap' is not entered when the cards match which means the player whos turn it currently is loses.",
                      projectLink:"",
                      repoLinks:["https://github.com/LewisLovett/snap"]
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
          
            {isModalShown && <Modal setShown={closeModal} title={projectDetails.title} images={projectDetails.images} skills={projectDetails.skills} description ={projectDetails.description} projectLink={projectDetails.projectLink} repoLinks={projectDetails.repoLinks}/>} 
        
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
            <h2>Currency Converter</h2>
            <img class="section__projectImage" alt="Project 4 image" src={require("../../assets/images/currency-converter1.png" )}/>
          </article>
          <article class="section__projectCard" onClick={(e) => showProjectModal("project5", e)}>
            <h2>Hangman</h2>
            <img class="section__projectImage" alt="Project 5 image" src={require("../../assets/images/hangman1.png" )}/>
          </article>
          <article class="section__projectCard" onClick={(e) => showProjectModal("project6", e)}>
            <h2>Dark Souls Database</h2>
            <img class="section__projectImage" alt="Project 6 image" src={require("../../assets/images/ds-database1.png" )}/>
          </article>
          <article class="section__projectCard" onClick={(e) => showProjectModal("project7", e)}>
            <h2>Snap</h2>
            <img class="section__projectImage" alt="Project 7 image" src={require("../../assets/images/snap6.png" )}/>
          </article>
        </div>
      </section>
    )
}
export default ProjectsSection;