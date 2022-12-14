import "./Carousel.scss";
import { useState, useEffect } from "react";

const Carousel = ({images}) => {
    const [imageIndex,setImageIndex] = useState(0);
    const [carouselBtns,setCarouselBtns] = useState();

    const generateButtons = () =>{
        const tempCarouselBtns = [];
        for(let i = 0; i<images.length;i++){
            i == 0 ? tempCarouselBtns.push(<div className="carousel__button" onClick={(e) => showImage(i, e)}>&#9672;</div>) :tempCarouselBtns.push(<div className="carousel__button" onClick={(e) => showImage(i, e)}>&#9671;</div>)
        }
        setCarouselBtns(tempCarouselBtns);
    }

    useEffect(() => {
        generateButtons(); 
      }, []);

      useEffect(() => {
        updateButtons(imageIndex);
      }, [imageIndex]);
    
    const showImage = (i,e) =>{
        setImageIndex(i);
       
    }

    const updateButtons = (i) =>{
        const tempCarouselBtns = [];
        for(let j = 0; j<images.length;j++){
            i == j ? tempCarouselBtns.push(<div className="carousel__button" onClick={(e) => showImage(j, e)}>&#9672;</div>) :tempCarouselBtns.push(<div className="carousel__button" onClick={(e) => showImage(j, e)}>&#9671;</div>)
        }
        setCarouselBtns(tempCarouselBtns);
    }

    const prevImage = () =>{
        imageIndex == 0 ? setImageIndex(images.length-1): setImageIndex(imageIndex-1);
    }

    const nextImage = () =>{
        imageIndex == images.length-1 ? setImageIndex(0): setImageIndex(imageIndex+1);
    }
    
    return(
        <div className="carousel">
            <div className="carousel__arrow" onClick={prevImage}>&#9665;</div>
            <div>
                <img className="carousel__image" src={require(`../../assets/images/${images[imageIndex]}`)}/>
                <div className="carousel__buttons">
                    {carouselBtns}
                </div>
            </div>
            <div className="carousel__arrow"  onClick={nextImage}>&#9655;</div>
            
        </div>
    )
}

export default Carousel;