import { Link } from "react-router-dom";

const VestiDocs = ({
  title,
  date,
  addStyle,
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
  return (
    <>
      <div className="w-full bg-secondary mb-24 font-fontReg">
        <div className="container mx-auto pt-14 text-center flex flex-col items-center">
          <div className="pt-[117.5px] pb-[116.5px] flex flex-col items-center">
            <h1 className="text-[#67A948] text-5xl pb-5 ">{title}</h1>
            <p className="text-[#fff] text-xl lg:w-[80%]">{date}</p>
          </div>
          <div className="">
            <ul className="flex text-[#fff] text-lg font-medium">
              <Link to={path1} className={`${addStyle}`}>
                {link1}
                {/* TERMS OF SERVICE */}
              </Link>
              <Link
                to={path2}
                className={`mx-[25px] lg:mx-[50px] cursor-pointer pb-4`}
              >
                {link2}
                {/* PRIVACY POLICY */}
              </Link>
              <Link to={path3} className={`cursor-pointer pb-4`}>
                {link3}
                {/* AML */}
              </Link>
              <Link
                to={path4}
                className={`cursor-pointer pb-4 ml-[25px] lg:ml-[50px]`}
              >
                {link4}
                {/* AML */}
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-[70%]">{mainBody}</div>
    </>
  );
};

export default VestiDocs;
