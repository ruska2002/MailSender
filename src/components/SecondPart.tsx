import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import star from "/pictures/Frame 416.png";

export default function SecondBar() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        0: { slidesPerView: 1.2 },
        480: { slidesPerView: 2.2 },
        1024: { slidesPerView: 3 },
      }}
    >
      <SwiperSlide>
        <div className="bg-[#F1F1F1] p-4 text-center">
          <img src={star} className="mx-auto mb-2" />
          <p>უფასო მასტერკლასები</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#F1F1F1] p-4 text-center">
          <img src={star} className="mx-auto mb-2" />
          <p>ტექნოლოგიური ლექციები</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#F1F1F1] p-4 text-center">
          <img src={star} className="mx-auto mb-2" />
          <p>პროექტებზე მუშაობა</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
