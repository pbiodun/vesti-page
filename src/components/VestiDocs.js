import { Link } from "react-router-dom";
import DownloadApp from "../views/DownloadApp";

const VestiDocs = ({ title, date, addStyle, mainBody }) => {
  return (
    <>
      <div className="w-full bg-secondary mb-24">
        <div className="container mx-auto pt-14 text-center flex flex-col items-center">
          <div className="pt-[117.5px] pb-[116.5px]">
            <h1 className="text-[#67A948] text-5xl pb-5">{title}</h1>
            <p className="text-[#fff] text-xl">{date}</p>
          </div>
          <div className="">
            <ul className="flex text-[#fff] text-lg font-medium">
              <Link to="/tos" className={`${addStyle}`}>
                TERMS OF SERVICE
              </Link>
              <Link
                to="/privacy-policy"
                className={`mx-[50px] cursor-pointer pb-4`}
              >
                PRIVACY POLICY
              </Link>
              <Link to="/aml" className={`cursor-pointer pb-4`}>
                AML
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-[70%]">{mainBody}</div>
      <DownloadApp />
    </>
  );
};

export default VestiDocs;
