import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import CurlyL from "../assets/images/curlybgleft.png";
import CurlyR from "../assets/images/curlybgright.png";
import DownloadApp from "../views/DownloadApp";
import MeetTheTeam from "../views/MeetTheTeam";

const Team = () => {
  return (
    <>
      <div className="bg-secondary pb-16 w-full pt-24 lg:py-40 relative overflow-hidden">
        <img src={CurlyL} alt="shape" className="absolute left-0" />
        <img src={CurlyR} alt="shape" className="absolute right-0" />

        <div className="container mx-auto">
          <div className="flex flex-col gap-12 justify-center items-center">
            <div className="lg:w-[40%] w-80% z-30 text-center">
              <h1 className="text-white font-fontReg text-4xl pb-5 tracking-wide">
                <span className="text-[#67A948]">Humans</span> of Vesti
              </h1>
              <p className="text-base font-fontLight text-[#ffffff] tracking-wider">
                Meet some of the team members making what we do at Vesti
                possible
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-28 pb-20">
        <MeetTheTeam />
      </div>
      <div className="w-[80%] bg-secondary mb-24 mx-auto rounded-[30px]">
        <div className="container mx-auto text-center py-14">
          <h1 className="text-[#7F8CE5] text-lg font-fontReg">
            COME WORK WITH US
          </h1>
          <p className="text-[#ffffff] pt-2 pb-10 text-2xl leading-[30px] font-fontLight">
            What we do is very important. Come and do meaningful work, and help
            drive our mission of making enterprising easier and more accessible
            to everyone.
          </p>
          <Link to="#">
            <Button className="bg-vestigreen p-4 capitalize w-[35%] font-fontReg hover:bg-headcol">
              View open roles
            </Button>
          </Link>
        </div>
      </div>
      <DownloadApp />
    </>
  );
};

export default Team;
