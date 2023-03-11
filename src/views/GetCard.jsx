import Button from "../components/Button";

const GetCard = () => {
  return (
    <div className="bg-[#060E42] text-[#ffffff]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center py-14">
          <h1 className="text-4xl lg:text-5xl text-center w-[90%] sm:w-[50%] lg:w-[40%] pb-8 font-fontSemi">
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
