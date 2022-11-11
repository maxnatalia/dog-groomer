import Slider from "react-slick";
import styled from "styled-components";

export const Section = styled.section`
`;

export const Container = styled.div`
    background-color: beige;
    z-index: -50;
    position: relative;
    overflow: hidden;
    padding-top: 50px;
    
    &::after {
        content: "";
        width: 650px;
        height: 650px;
        background-color: #fcdd0030;
        position: absolute;
        border-radius: 50%;
        z-index: -20;
        top: -20px;
        right: -185px;
    }
`;

export const ReviewSlider = styled(Slider)`
    width: 100%; 

    .slick-track {
		display: flex;
		padding: 30px;
		gap: 3rem;
        
	}
	.slick-slide {
        display: flex;
		outline: none;
	}

	.slick-list {
        overflow: hidden;
	}
`;

export const Wrapper = styled.div`
`;

export const ImageWrapper = styled.div`

`;

export const Img = styled.img`
    z-index: 100;
    height: auto;

    @media (max-width: 768px) {
        width: 100px;
    }
`;

export const Title = styled.h1`
    font-size: 42px;
    color: blue;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const Subtitle = styled.h2`
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

// export const Button = styled.button`
//     background-color: #dc952a;
//     color: white;
//     font-weight: 700;
//     border-radius: 20px;
//     border: none;
//     padding: 10px 20px;
//     cursor: pointer;
//     z-index: 500;

//     @media (max-width: 768px) {
//         font-size: 12px;
//     }
// `;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 50px;
    max-width: 700px;
`;

export const WrapperTwo=styled.div`
    display: flex;

    @media (max-width: 992px) {
        flex-direction: column;
    }
`;