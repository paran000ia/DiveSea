import "./css/WeeklyTopNFT.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import NFTCard from "./NFTCard";

import { nftData } from "../data/nftData";

const WeeklyTopNFT = () => {
  return (
    <section className="weekly">
        <div className="weekly-container">
      <h2>
        Weekly - Top NFT
      </h2>

      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
      >
        {nftData.map((item) => (
          <SwiperSlide key={item.id}>
            <NFTCard
              image={item.image}
              title={item.title}
              price={item.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="weekly-navigation">

        <button>
          ←
        </button>

        <button>
          →
        </button>

      </div>
      </div>
    </section>
  );
};

export default WeeklyTopNFT;