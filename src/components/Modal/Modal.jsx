import Carousel from "../Carousel/Carousel";
import "./Modal.scss";

const Modal = ({setShown, title,images,skills,description, projectLink, repoLinks}) => {
    // const imgURL = require(`../../assets/images/${image}`);      

    return(
        <div className="modal">
            <div className="modal__content">
                <a className="modal__close-btn" onClick={setShown}>X</a>
                <h1 className="modal__title">{title}</h1>
                <Carousel images={images} />
                {/* <img className="modal__image" alt={`${title} image`} src={imgURL}/> */}
                {projectLink!=="" && <a className="modal__link"  href={projectLink}>{projectLink}</a>}
                {repoLinks.map(repoLink => (<a className="modal__link" href={repoLink}>{repoLink}</a>))}
                <p>Skills Used:</p>
                <ul>
                {skills.map(skill => (<li>{skill}</li>))}
                </ul>
                <p className="modal__description">{description}</p>
            </div>
        </div>
    )
}

export default Modal;