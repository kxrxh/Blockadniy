import {SplideSlide} from "@splidejs/react-splide";

function SlideImage({url}) {
    return (
        <SplideSlide>
            <img className='slide-img' src={url} alt="Image"/>
        </SplideSlide>
    );
}

export default SlideImage;