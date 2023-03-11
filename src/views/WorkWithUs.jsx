import Button from "../components/Button";

const WorkWithUs = () => {
  return (
    <div className="w-full bg-secondary mb-24">
      <div className="container mx-auto text-center py-14 lg:w-[70%]">
        <h1 className="text-[#7F8CE5] text-lg font-fontReg">
          COME WORK WITH US
        </h1>
        <p className="text-[#ffffff] pt-2 pb-10 text-2xl leading-[40px] font-fontLight">
          What we do is very important. Come and do meaningful work, and help
          drive our mission of making enterprising easier and more accessible to
          everyone.
        </p>
        <Button
          link="#"
          CTA="View open roles"
          styles="p-4 mx-auto"
          width="40%"
        />
      </div>
    </div>
  );
};

export default WorkWithUs;
