import { FC, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
type SliderProps = {
  images: string[];
};

const Slider: FC<SliderProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const changeSlide = (direction: string) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex && imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex && imageIndex + 1);
      }
    }
  };

  return (
    <div className="w-full h-[350px] flex gap-5">
      {imageIndex !== null && (
        <div className=" absolute w-screen h-screen top-0 left-0 bg-black flex justify-between items-center z-[9999]">
          <div
            className=" flex-1 flex justify-center items-center"
            onClick={() => changeSlide("left")}
          >
            <MdArrowBackIos className=" md:w-[30px] lg:w-[50px] w-[20px]" />
          </div>
          <div className=" flex-[10]">
            <img
              src={images[imageIndex]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="flex-1 flex justify-center items-center"
            onClick={() => changeSlide("right")}
          >
            <MdArrowForwardIos className="bg-black" />
          </div>
          <div
            className="absolute top-0 right-0 text-white text-2xl font-bold p-10 cursor-pointer"
            onClick={() => setImageIndex(null)}
          >
            X
          </div>
        </div>
      )}
      <div className="flex-[2] md:flex-[3]">
        <img
          src={images?.[0]}
          alt=""
          onClick={() => setImageIndex(0)}
          className="w-full h-full object-cover rounded-md cursor-pointer"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-5">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
            className="h-80 md:h-[100px]"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
