import { Link, useSearchParams } from "react-router-dom";

const VestiExtras = (props) => {
  const { title, date, categories = [] } = props;
  const [params] = useSearchParams();
  const category = params.get("category") || "ALL";

  const isActive = (cat) => {
    return cat === category ? "border-b-8 border-[#67A948]" : "";
  };

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
            <ul className="flex text-[#fff] text-lg gap-x-[10px]">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`?category=${category}`}
                  className={`pb-3 text-white ${isActive(category)}`}
                >
                  {category}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto w-[70%]">{mainBody}</div> */}
    </>
  );
};

export default VestiExtras;
