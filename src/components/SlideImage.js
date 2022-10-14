import {SplideSlide} from "@splidejs/react-splide";
import {noImagePicture} from "../constants/constants";

function SlideImage({url}) {
    return (
        <SplideSlide>
            <img className='slide-img' src={url} alt={noImagePicture}/>
        </SplideSlide>
    );
}

export default SlideImage;