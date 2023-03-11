import Vector from "../assets/logo-icons/Vector.png";
import Vector1 from "../assets/logo-icons/Vector1.png";
import Button from "../components/Button";
import ToCreateCard from "../components/ToCreateCard";

const OpenAccount = () => {
  return (
    <div className="w-full bg-[#F7FFF3] py-20 relative">
      <div className="container mx-auto">
        <img src={Vector} alt="shape" className="absolute top-0 left-0" />
        <ToCreateCard
          title="How to open a free Vesti account"
          head1="Register in minutes"
          desc1="Sign up online, or in our app with your email address"
          head2="Complete KYC verification"
          desc2="Verify your identity using your government-issued ID"
          head3="Start Transacting"
          desc3="We have one of the best rates that you can count on."
          classname="flex flex-col justify-center items-center pt-10"
        />
        <div className="pb-4 md:pb-10 sm:pb-20 flex flex-col justify-center items-center">
          <Button
            link="https://app.wevesti.com/register"
            CTA="Get started in minutes"
            width="30%"
            styles="p-4 text-[#fff] mb-5"
          />
        </div>
        <img src={Vector1} alt="shape" className="absolute bottom-0 right-0" />
      </div>
    </div>
  );
};

export default OpenAccount;
