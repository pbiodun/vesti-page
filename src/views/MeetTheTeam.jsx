import TwitterLogo1 from "../assets/logo-icons/twitter-logo1.svg";
import LinkedinLogo1 from "../assets/logo-icons/linkedin-logo1.svg";
import { People } from "../constant/TeamsDetail";
import { Link } from "react-router-dom";

const MeetTheTeam = ({ link, count }) => {
  return (
    <div>
      <div className="container mx-auto lg:w-[90%] text-center">
        <div className="pt-12 pb-24">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 pb-14 font-fontReg">
            {People.slice(0, count).map((person) => (
              <div className="flex flex-col items-center">
                <div>
                  <img src={person.headShot} alt="team-member" />
                </div>
                <div className="pb-3">
                  <h3 className="text-[#14290A] font-fontReg text-xl">
                    {person.fullName}
                  </h3>
                  <p className="text-[#14290A] font-fontLight text-sm">
                    {person.designation}
                  </p>
                </div>
                <div className="flex items-center">
                  <Link to={person.socialLink1}>
                    <img
                      className="pr-3"
                      src={LinkedinLogo1}
                      alt="linkedin-logo"
                    />
                  </Link>
                  <Link to={person.socialLink2}>
                    <img src={TwitterLogo1} alt="twitter-logo" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Link
              to="/team"
              className="text-[#67A948] text-xl cursor-pointer font-fontReg hover:text-headcol"
            >
              {link}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
