import CardAd from "../views/CardAd";
import Mfries from "../components/Mfries";
import MigrationCard from "../components/MigrationCard";
import VestiDocs from "../components/VestiDocs";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Phones from "../assets/images/phones.png";
import Testimonials from "../views/Testimonials";
import Featured from "../views/Featured";

const MigrationFries = () => {
  return (
    <div>
      <VestiDocs
        title="Migration Fries"
        date="Want to move overseas in 2022 ? easily see opportunities and read how to start your migration journey."
        addStyle="border-b-8 border-[#67A948]"
        link1="ALL"
        link2="JOBS"
        link3="NEWS"
        link4="SCHOLARSHIPS"
        path1="/migration-fries"
        path2="#"
        path3="#"
        path4="#"
      />

      <div>
        <Mfries
          title={
            <h1 className="text-[#14290A] text-2xl font-semibold pb-2">
              Migration Fries <span className="text-[#67A948]">All</span>
            </h1>
          }
          heading="Think lifting a feather is effortless? Try payment with Vesti."
        />
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 pb-8">
        <MigrationCard
          date="January 26, 2021"
          title="How to Migrate to the United States through Education."
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing.
        Ornare a pretium placerat ut platea. Purus blandit
        integer sagittis massa vel est hac..."
        />
        <MigrationCard
          date="January 26, 2021"
          title="How to Migrate to the United States through Education."
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing.
        Ornare a pretium placerat ut platea. Purus blandit
        integer sagittis massa vel est hac..."
        />
        <MigrationCard
          date="January 26, 2021"
          title="How to Migrate to the United States through Education."
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing.
        Ornare a pretium placerat ut platea. Purus blandit
        integer sagittis massa vel est hac..."
        />
        <MigrationCard
          date="January 26, 2021"
          title="How to Migrate to the United States through Education."
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing.
      Ornare a pretium placerat ut platea. Purus blandit
      integer sagittis massa vel est hac..."
        />
        <MigrationCard
          date="January 26, 2021"
          title="How to Migrate to the United States through Education."
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing.
        Ornare a pretium placerat ut platea. Purus blandit
        integer sagittis massa vel est hac..."
        />
        <MigrationCard
          date="January 26, 2021"
          title="How to Migrate to the United States through Education."
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing.
        Ornare a pretium placerat ut platea. Purus blandit
        integer sagittis massa vel est hac..."
        />
        <MigrationCard
          date="January 26, 2021"
          title="How to Migrate to the United States through Education."
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing.
        Ornare a pretium placerat ut platea. Purus blandit
        integer sagittis massa vel est hac..."
        />
        <MigrationCard
          date="January 26, 2021"
          title="How to Migrate to the United States through Education."
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing.
        Ornare a pretium placerat ut platea. Purus blandit
        integer sagittis massa vel est hac..."
        />
      </div>

      <CardAd
        addStyle="flex flex-col lg:flex-row lg:justify-between items-center bg-[#3E6F26] rounded-[30px]"
        leftSide={
          <div className="p-8 lg:pl-16">
            <div className="rounded-[30px] bg-[#060E42] w-[171px]">
              <p className="text-xs text-white font-medium text-center mb-4 p-1">
                AVAILABLE TO REQUEST
              </p>
            </div>
            <h1 className="text-white text-4xl w-[360px]">
              Your Comfort is Guaranteed With The Vesti GlobalGeng Card
            </h1>
            <p className="text-base font-extralight text-white pt-6 w-[90%]">
              Vesti gives humans the power to move overseas to 110 Countries.
            </p>
            <div className="pt-[20px] flex items-center text-[#ffffff] text-xl">
              <Link to="#">Learn more</Link>
              <BsArrowUpRight />
            </div>
          </div>
        }
        image={Phones}
      />

      <Testimonials
        title={
          <>
            <h1 className="text-3xl text-headcol font-semibold text-center">
              Read japa <span className="text-vestigreen">stories</span>
            </h1>
            <p className="text-center text-[#2B5219] text-lg font-medium">
              Read japa stories and testimonials from our selected users
            </p>
          </>
        }
        link={
          <div className="flex items-center text-vestigreen font-semibold">
            <Link to="#">Read more stories</Link>
            <BsArrowUpRight />
          </div>
        }
      />
      <div className="pt-20">
        <Featured />
      </div>
    </div>
  );
};

export default MigrationFries;
