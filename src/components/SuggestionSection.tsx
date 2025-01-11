import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


function SuggestionSection() {
  const [cryptoData, setCryptoData] = useState([]);

  const firstCarouselRef = useRef<HTMLDivElement>(null);
  const secondCarouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
      
        setCryptoData(response.data.coins);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-white h-max mt-10 lg:p-14 p-8 overflow-hidden">
      <div>
        {/* First Carousel */}
        <div className="text-[#202020] text-2xl font-semibold">
          You May Also Like
        </div>
        <div className="relative mt-4">
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow-lg p-2 z-10"
            onClick={() => scrollLeft(firstCarouselRef)}
          >
             <FiChevronLeft size={20} />
          </button>

          {/* First Carousel Container */}
          <div
            ref={firstCarouselRef}
            className="flex space-x-4 overflow-hidden scroll-smooth"
          >
            {(cryptoData as any[]).slice(1, 10).map((crypto, index) => (
              
              <CryptoCard key={index} cryptoData={crypto.item} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow-lg p-2 z-10"
            onClick={() => scrollRight(firstCarouselRef)}
          >
             <FiChevronRight size={20} />
          </button>
        </div>

        {/* Second Carousel */}
        <div className="text-[#202020] text-2xl font-semibold mt-6">
          Trending Coins
        </div>
        <div className="relative mt-4">
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow-lg p-2 z-10"
            onClick={() => scrollLeft(secondCarouselRef)}
          >
             <FiChevronLeft size={20} />
          </button>

          {/* Second Carousel Container */}
          <div
            ref={secondCarouselRef}
            className="flex space-x-4 overflow-hidden scroll-smooth"
          >
            {(cryptoData as any[]).slice(1, 10).map((crypto, index) => (
              <CryptoCard key={index} cryptoData={crypto.item} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow-lg p-2 z-10"
            onClick={() => scrollRight(secondCarouselRef)}
          >
             <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

function CryptoCard({ cryptoData }: any) {
  // console.log("Sparkline URL:", cryptoData.data.sparkline);

  return (
    <div className="lg:w-[300px] rounded-2xl p-5 border-2 my-2 mr-2">
      <div className="flex items-center space-x-2">
        <img
          src={cryptoData.large}
          alt={cryptoData.name}
          className="w-6 h-6 rounded-full"
        />
        <span className="text-[16px] font-normal">{cryptoData.name}</span>
        <span
          className={`text-${
            cryptoData.data.price_change_percentage_24h.usd > 0
              ? "green"
              : "red"
          }-500 bg-${
            cryptoData.data.price_change_percentage_24h.usd > 0
              ? "#0AB27D"
              : "#FF0000"
          }/10 text-xs font-normal pr-10`}
        >
          {cryptoData.data.price_change_percentage_24h.usd.toFixed(2)}%
        </span>
      </div>
      <div className="text-xl text-[#171717] font-medium mt-2">
        {cryptoData.data.price}
      </div>
      {/* Display the chart image */}
      
      <img
        src={
          cryptoData && cryptoData.data.sparkline
            ? cryptoData.data.sparkline
            : "https://www.coingecko.com/coins/33566/sparkline.svg"
        }
        alt={cryptoData && cryptoData.name ? cryptoData.name : ""}
        className="w-full h-20"
      />
    </div>
  );
}

export default SuggestionSection;