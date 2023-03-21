import ToCreateCard from "../components/ToCreateCard";
import Vector from "../assets/logo-icons/Vector.png";
import Vector1 from "../assets/logo-icons/Vector1.png";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import Button from "../components/Button";
import DownloadApp from "../views/DownloadApp";
import CardAds from "../components/CardAds";
import Phones from "../assets/images/phones.png";
import Testimonials from "../views/Testimonials";
import MigrationServiceHero from "../views/MigrationServiceHero";

const MigrationServices = () => {
  return (
    <>
      <MigrationServiceHero />
      <div className="container py-20 mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="col-span-1">
          <h1 className="font-fontSemi lg:w-[85%] text-[#14290A] text-4xl pb-4 ">
            Our Offerings
          </h1>
          <p className="pb-12 text-2xl text-[#2B5219] font-fontLight">
            The migration services we offer
          </p>

          <h1 className="font-fontSemi lg:w-[85%] text-[#14290A] text-xl pb-4 ">
            Migration Pathways
          </h1>
          <p className="pb-6 text-lg text-[#2B5219] font-fontLight">
            Our team of experts have the knowledge and experience to help you
            understand the different pathways to migration, such as student
            visa, work visa, and permanent residency.
          </p>
          <div className="flex items-center pb-12 font-fontReg text-[#67A948] text-xl">
            <Link to="https://app.wevesti.com/register" className="pr-2">
              Get Started
            </Link>
            <BsArrowUpRight />
          </div>
          <h1 className="font-fontSemi lg:w-[85%] text-[#14290A] text-xl pb-4 ">
            Migration Fees
          </h1>
          <p className="pb-6 text-lg text-[#2B5219] font-fontLight">
            We offer comprehensive support to help you navigate and pay for fees
            such as WES, SEVIS and other immigration-related expenses.
          </p>
          <div className="flex items-center pb-12 font-fontReg text-[#67A948] text-xl">
            <Link to="#" className="pr-2">
              Make a Payment
            </Link>
            <BsArrowUpRight />
          </div>
          <h1 className="font-fontSemi lg:w-[85%] text-[#14290A] text-xl pb-4 ">
            Migration Loans
          </h1>
          <p className="pb-6 text-lg text-[#2B5219] font-fontLight">
            We offer loans to help cover the cost of migration-related expenses
            such as visa fees, travel expenses, and legal fees.
          </p>
          <div className="flex items-center pb-12 font-fontReg text-[#67A948] text-xl">
            <Link to="#" className="pr-2">
              Apply for a Loan
            </Link>
            <BsArrowUpRight />
          </div>
          <h1 className="font-fontSemi lg:w-[85%] text-[#14290A] text-xl pb-4 ">
            Migration Advice
          </h1>
          <p className="pb-6 text-lg text-[#2B5219] font-fontReg">
            Our team of experts can guide you through the complex process of
            immigration and help you navigate the various fees and requirements.
            With our guidance, you can feel confident and prepared as you embark
            on your journey to a new home.
          </p>
          <div className="flex items-center pb-12 font-fontReg text-[#67A948] text-xl">
            <Link to="#" className="pr-2">
              Learn more
            </Link>
            <BsArrowUpRight />
          </div>
        </div>
        <div className="bg-[#EAEAEA] col-span-1 h-[50%] mt-[350px] rounded-[20px] flex justify-center items-end">
          {/* <div className="bg-[#16216B] h-full rounded-[20px]"></div> */}
        </div>
      </div>
      <div className="w-full bg-[#F7FFF3] relative mb-24">
        <img src={Vector} alt="shape" className="absolute top-0 left-0" />
        <div className="container mx-auto pt-24 pb-28">
          <ToCreateCard
            classname="mx-auto w-[100%] lg:w-[40%] flex flex-col justify-center items-center"
            title="Migrate With Vesti"
            head1="Register in minutes"
            desc1="Sign up online, or in our app with your email address"
            head2="Complete KYC verification"
            desc2="Verify your identity using your government-issued ID"
            head3="Start the process"
            desc3="Choose from our list of migration offer."
          />
          <Button
            link="#"
            CTA="Get started in minutes"
            width="30%"
            styles="p-4 mx-auto"
          />
        </div>
        <img src={Vector1} alt="shape" className="absolute bottom-0 right-0" />
      </div>
      <div className="container pb-24 mx-auto ">
        <CardAds
          title="AVAILABLE TO REQUEST"
          mainDesc="Your Comfort is Guaranteed With The Vesti GlobalGeng Card"
          details="Vesti gives humans the power to move overseas to 110 Countries."
          learnMore
          image={Phones}
          link="#"
        />
      </div>
      <div className="flex flex-col items-center">
        <Testimonials
          title={
            <>
              <h1 className="text-[#14290A] text-4xl pb-4">
                Read japa <span className="text-[#67A948]">stories</span>
              </h1>
              <p className="text-[#2B5219] text-lg font-fontReg">
                Read japa stories and testimonials from our selected users
              </p>
            </>
          }
        />
        <div className="flex items-center pb-12 font-fontReg text-[#67A948] text-xl">
          <Link to="#" className="pr-2">
            Read more stories
          </Link>
          <BsArrowUpRight />
        </div>
      </div>
      <DownloadApp />
    </>
  );
};

export default MigrationServices;
