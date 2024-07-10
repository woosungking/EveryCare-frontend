import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import SearchBar from '../../assets/mainPage/SearchBar.svg';
import main1 from '../../assets/mainPage/main1.svg';
import main2 from '../../assets/mainPage/main2.svg';
import main3 from '../../assets/mainPage/main3.svg';
import main4 from '../../assets/mainPage/main4.svg';
import CalendarGroup from '../../assets/mainPage/CalendarGroup.svg';
import SmallPill from '../../assets/mainPage/SmallPill.svg';

const MainPage: React.FC = () => {
  const [searchText, setSearchText] = useState(
    '궁금한 약품, 증상을 검색해보세요.',
  );

  const handleSearchBoxClick = () => {
    setSearchText('');
  };

  return (
    <div className="grid grid-rows-[auto,0.5fr,auto,auto,auto] items-center bg-white h-[83vh]">
      <div className="top-bar flex items-center justify-center w-full mt-[1vh]">
        <div className="relative w-full">
          <img src={SearchBar} alt="Search Bar" className="w-full" />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={handleSearchBoxClick}
            className="absolute top-0 left-0 w-full h-full bg-transparent outline-none text-gray-700 px-[1vh] py-[0.5vh]"
          />
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full h-[30vh] max-w-screen-md my-[2vh]"
      >
        <SwiperSlide>
          <img
            src={main1}
            alt="Slide 1"
            className="m-auto w-full h-[30vh] object-cotain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={main2}
            alt="Slide 2"
            className="m-auto w-full h-[30vh] object-cotain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={main3}
            alt="Slide 3"
            className="m-auto w-full h-[30vh] object-cotain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={main4}
            alt="Slide 4"
            className="m-auto w-full h-[30vh] object-cotain"
          />
        </SwiperSlide>
      </Swiper>

      <div className="flex flex-col items-center justify-center bg-white w-full max-w-screen-md">
        <h1 className="text-[1.5vh] font-extrabold mb-[1vh] text-center">
          갓난 아기부터 노인까지 아플때 마다 먹는 약들을 기록해요
        </h1>
        <img
          src={CalendarGroup}
          alt="Calendar Group"
          className="w-[60%] h-[25vh] max-w-xs sm:max-w-sm md:max-w-md"
        />
        <h1 className="text-[2vh] font-extrabold mt-[1vh] mb-[1.5vh] text-center">
          어떤 약을 기록하시나요?
        </h1>

        <div className="flex items-center justify-center bg-white w-full max-w-screen-md mb-[1vh]">
          <img
            src={SmallPill}
            alt="Small Pill"
            className="w-[10%] h-[2.5vh] mr-[1vh]"
          />
          <p className="text-[2vh]" style={{ lineHeight: '1.5rem' }}>
            오늘 복용한 약
          </p>
        </div>
        <div className="flex items-center justify-center bg-white w-full max-w-screen-md mb-[1vh]">
          <img
            src={SmallPill}
            alt="Small Pill"
            className="w-[10%] h-[2.5vh] mr-[1vh]"
          />
          <p className="text-[2vh]" style={{ lineHeight: '1.5rem' }}>
            병원에서 처방받은 약
          </p>
        </div>
        <div className="flex items-center justify-center bg-white w-full max-w-screen-md mb-[1vh]">
          <img
            src={SmallPill}
            alt="Small Pill"
            className="w-[10%] h-[2.5vh] mr-[1vh]"
          />
          <p className="text-[2vh]" style={{ lineHeight: '1.5rem' }}>
            장기적으로 복용중인 약
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
