// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swipe.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import SwiperContent from "./SwiperContent";

export default function Swipe() {
  const data = useSelector((state) => state.agentTypes.data);

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((data, idx) => (
          <SwiperSlide
            key={idx}
            className="rounded-2xl border-black dark:border-white border-2 overflow-hidden transition-colors duration-300 ease-in-out"
          >
            <SwiperContent data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
