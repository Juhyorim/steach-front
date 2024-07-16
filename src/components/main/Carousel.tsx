import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import sampleImage from "../../assets/sample-image.jpg";
import sampleImage2 from "../../assets/sample-image2.jpg";
import sampleImage3 from "../../assets/sample-image3.gif";

export default function HomePageCarousel() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper w-full h-96"
    >
      <SwiperSlide className="">
        <img src={sampleImage} alt="no-image" className="w-full h-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sampleImage2} alt="no-image" className="w-full h-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sampleImage3} alt="no-image" className="w-full h-full" />
      </SwiperSlide>
    </Swiper>
  );
}