import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { latestNews, previousNews } from "../constant/AllNewsRoomPost";
import { useState } from "react";
import { Button } from "@material-tailwind/react";

const VestiNews = () => {
  const [count, setCount] = useState(6);

  const LoadMore = () => {
    setCount(count + 6);
  };

  return (
    <div className="container mx-auto py-24">
      <div>
        <h1 className="text-4xl text-headcol font-fontReg pb-2">What's New?</h1>
        <p className="font-fontLight text-[#2B5219] lg:w-[60%] text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos tenetur
          vero consequuntur sit, nam tempora fugiat repellat nulla magnam
          provident, veritatis fuga.
        </p>
        <div className="pt-10 pb-24 grid grid-flow-row gap-8 lg:grid-cols-2 lg:gap-16 items-end">
          <div className="rounded-2xl col-span-1">
            <img className="w-full" src={latestNews.img} alt="news-pics" />
          </div>
          <div className="pt-12 col-span-1">
            <p className="text-[#3E3E59] text-base font-fontLight pb-8">
              {latestNews.date}
            </p>
            <h1 className="text-5xl text-headcol font-fontBold">
              {latestNews.title}
            </h1>
            <p className="pt-8 pb-12 text-3xl font-fontSemi">
              {latestNews.desc}
            </p>
            <div className="flex items-center text-vestigreen font-fontReg hover:font-fontSemi cursor-pointer text-xl lg:w-[50%]">
              <Link to={latestNews.link}>Continue Reading</Link>
              <IoIosArrowRoundForward className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl text-headcol font-fontReg pb-2">Featured</h1>
        <p className="font-fontLight text-[#2B5219] lg:w-[60%] text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos tenetur
          vero consequuntur sit, nam tempora fugiat repellat nulla magnam
          provident, veritatis fuga.
        </p>
        <div className="pt-10 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {previousNews.slice(0, count).map((prev, i) => (
            <div key={i} className="rounded-2xl col-span-1">
              <img className="w-full" src={prev.img} alt="news-pics" />
              <p className="text-[#3E3E59] text-base font-fontLight py-4">
                {prev.date}
              </p>
              <h1 className="text-2xl text-headcol font-fontSemi pb-4">
                {prev.title}
              </h1>
              <p className="font-fontReg text-[#2B5219] w-[90%] text-base pb-4">
                {prev.desc}
              </p>
              <div className="flex items-center text-vestigreen font-fontReg hover:font-fontSemi cursor-pointer text-base">
                <Link to={prev.link} target="_blank" rel="noopener noreferrer">
                  Continue Reading
                </Link>
                <IoIosArrowRoundForward className="text-3xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <Button
          onClick={LoadMore}
          className="w-[25%] bg-vestigreen p-4 hover:bg-headcol capitalize text-base font-fontLight"
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default VestiNews;
