import Button from "../components/Button";

const GetCard = () => {
  return (
    <div className="bg-[#060E42] text-[#ffffff]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center py-14">
          <h1 className="text-5xl text-center lg:w-[30%] leading-[60px] pb-8 font-fontSemi">
            Get your Vesti Virtual Card
          </h1>
          <Button
            link=""
            CTA="Create your card"
            styles="p-3 text-lg"
            width="30%"
          />
        </div>
      </div>
    </div>
  );
};

export default GetCard;
