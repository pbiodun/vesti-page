import { Link, useLocation } from "react-router-dom";

const VestiExtras = ({
  title,
  date,
  link1,
  link2,
  link3,
  link4,
  mainBody,
  path1,
  path2,
  path3,
  path4,
}) => {
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <>
      <div className="w-full bg-secondary mb-24 font-fontReg">
        <div className="container mx-auto pt-14 text-center flex flex-col items-center">
          <div className="pt-[117.5px] pb-[116.5px] flex flex-col items-center">
            <h1 className="text-[#67A948] text-5xl pb-5 ">{title}</h1>
            <p className="text-[#fff] text-lg font-fontLight lg:w-[62.5%]">
              {date}
            </p>
          </div>
          <div className="">
            <ul className="flex text-[#fff] text-lg">
              <Link
                to={path1}
                className={`pb-3 ${
                  splitLocation[1] === "migration-fries"
                    ? `border-b-8 border-[#67A948]`
                    : "text-white"
                }`}
              >
                {link1}
              </Link>
              <Link
                to={path2}
                className={`mx-10 pb-3 ${
                  splitLocation[1] === "jobs"
                    ? `border-b-8 border-[#67A948]`
                    : "text-white"
                }`}
              >
                {link2}
              </Link>
              <Link
                to={path3}
                className={`pb-3 ${
                  splitLocation[1] === "news"
                    ? `border-b-8 border-[#67A948]`
                    : "text-white"
                }`}
              >
                {link3}
              </Link>
              <Link
                to={path4}
                className={`pb-3 ml-10 ${
                  splitLocation[1] === "scholarships"
                    ? `border-b-8 border-[#67A948]`
                    : "text-white"
                }`}
              >
                {link4}
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-[70%]">{mainBody}</div>
    </>
  );
};

export default VestiExtras;
