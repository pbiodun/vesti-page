import { BsArrowUpRight } from "react-icons/bs";
import ActiveCard from "../components/ActiveCard";

const Pathways = () => {
  return (
    <div className="w-full py-20">
      <div className=" container relative mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="col-span-1">
            <h1 className="font-semibold lg:w-[75%] text-[#14290A] text-4xl mb-12">
              Everything you need, less of what you don't.
            </h1>
            <div className="w-full">
              <ActiveCard
                title="Pathways software for global migration"
                desc="Vesti gives humans the power to move overseas to 110 Countries."
                click="hover:border-l-4 hover:border-l-lime-700"
                learnMore
              />
              <ActiveCard
                title="Pathways software for global migration"
                desc="Vesti gives humans the power to move overseas to 110 Countries."
                click="hover:border-l-4 hover:border-l-lime-700"
              />
              <ActiveCard
                title="Pathways software for global migration"
                desc="Vesti gives humans the power to move overseas to 110 Countries."
                click="hover:border-l-4 hover:border-l-lime-700"
              />
              <ActiveCard
                title="Pathways software for global migration"
                desc="Vesti gives humans the power to move overseas to 110 Countries."
                click="hover:border-l-4 hover:border-l-lime-700"
              />
              <ActiveCard
                title="Pathways software for global migration"
                desc="Vesti gives humans the power to move overseas to 110 Countries."
                click="hover:border-l-4 hover:border-l-lime-700"
              />
            </div>
          </div>
          <div className="bg-[#EAEAEA] col-span-1 h-full rounded-[20px] flex justify-center items-end">
            {/* <div className="bg-[#16216B] h-full rounded-[20px]"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pathways;
