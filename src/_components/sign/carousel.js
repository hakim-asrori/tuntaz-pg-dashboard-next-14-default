import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";

import "@/_components/sign/css/carousel.css";

import MobilePaymentPng from "@/_assets/images/mobile-payment-online.png";
import Flex from "../flex";
import { useEffect } from "react";

const Carousel = () => {
  useEffect(() => {
    // const indicators = document.querySelector(
    //   "#carousel-sign .carousel-indicators"
    // ).children;
    // Array.from(indicators).forEach((indicator) => {
    //   indicator.addEventListener("click", (event) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   });
    // });
  }, []);

  return (
    <CCarousel indicators id="carousel-sign">
      <CCarouselItem>
        <Flex className="justify-content-center">
          <CImage
            className="d-block"
            style={{ height: "30rem" }}
            src={MobilePaymentPng.src}
            alt="slide 1"
          />
        </Flex>
        <CCarouselCaption className="d-none d-md-block position-relative  end-0 bottom-0 start-0">
          <h2>First slide label</h2>
          <p>
            Some representative placeholder content for the first slide. Some
            representative placeholder content for the first slide.
          </p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <Flex className="justify-content-center">
          <CImage
            className="d-block"
            style={{ height: "30rem" }}
            src={MobilePaymentPng.src}
            alt="slide 2"
          />
        </Flex>
        <CCarouselCaption className="d-none d-md-block position-relative  end-0 bottom-0 start-0">
          <h2>Second slide label</h2>
          <p>
            Some representative placeholder content for the first slide. Some
            representative placeholder content for the first slide.
          </p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <Flex className="justify-content-center">
          <CImage
            className="d-block"
            style={{ height: "30rem" }}
            src={MobilePaymentPng.src}
            alt="slide 3"
          />
        </Flex>
        <CCarouselCaption className="d-none d-md-block position-relative  end-0 bottom-0 start-0">
          <h2>Third slide label</h2>
          <p>
            Some representative placeholder content for the first slide. Some
            representative placeholder content for the first slide.
          </p>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  );
};

export default Carousel;
