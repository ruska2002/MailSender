import star from "/pictures/Frame 416.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function SecondPart() {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1025 },
      items: 3,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 481 },
      items: 2,
      partialVisibilityGutter: 60,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
      partialVisibilityGutter: 80,
    },
  };
  return (
    <div className="bg-[black] top-[200px]">
      <Carousel responsive={responsive} partialVisible={true}>
        <div className="bg-[#F1F1F1] p-4 text-center">
          <img src={star} className="mx-auto mb-2" />
          <p>უფასო მასტერკლასები</p>
        </div>
        <div className="bg-[#F1F1F1] p-4 text-center">
          <img src={star} className="mx-auto mb-2" />
          <p>უფასო მასტერკლასები</p>
        </div>
        <div className="bg-[#F1F1F1] p-4 text-center">
          <img src={star} className="mx-auto mb-2" />
          <p>უფასო მასტერკლასები</p>
        </div>
      </Carousel>
    </div>
  );
}
