import Vector from "../assets/logo-icons/Vector.png";
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
          head2="Register in minutes"
          desc2="Sign up online, or in our app with your email address"
          head3="Register in minutes"
          desc3="Sign up online, or in our app with your email address"
          buttonText="Get started in minutes"
        />
        <img src={Vector} alt="shape" className="absolute bottom-0 right-0" />
      </div>
    </div>
  );
};

export default OpenAccount;
