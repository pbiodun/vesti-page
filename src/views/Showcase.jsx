import FeaturedLogos from "../assets/logo-icons/feat-logos.png";

const Showcase = () => {
  return (
    <div className="bg-secondary pb-16  w-full pt-12 lg:pt-36 lg:pb-32 text-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="col-span-1 mt-16">
            <p className="text-4xl lg:text-4xl xl:text-5xl font-bold mb-5">
              World's Fastest Legal{" "}
              <span className="text-[#67A948]">immigration</span> and{" "}
              <span className="text-[#67A948]">financial</span> technology
              software
            </p>
            <p className="text-lg font-light mb-12">
              Millions of people moving to new countries use Vesti for accessing
              financial services like bank accounts, debit and credit cards.
            </p>
            <button className="bg-[#67A948] p-4 rounded-xl w-72 mb-[70px]">
              Get started in minutes
            </button>
            <img src={FeaturedLogos} alt="featured" />
          </div>
          <div className="bg-[#ffffff] col-span-1 rounded-3xl">dwd</div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
