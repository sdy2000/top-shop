import { useSelector } from "react-redux";
import { SliderCard } from ".";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { homeSliderDiffLanguage } from "../data";

const HomeSlider = () => {
  const currentLanguage = useSelector((store) => store.language);
  const { data } = homeSliderDiffLanguage.find(
    (slider) => slider.lan === currentLanguage.symbol
  );

  return (
    <>
      <div className="slider">
        <div className="container">
          <div className="wrapper">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {data.map((slider, idx) => (
                <SwiperSlide key={idx}>
                  <SliderCard {...slider} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
