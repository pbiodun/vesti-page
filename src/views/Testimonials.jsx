import Image1 from "../assets/images/Avatar1.png";
import { Testimony } from "../constant/TestimonialsData";

const Testimonials = ({ title, link }) => {
  return (
    <div className="w-full pt-24">
      <div className="container mx-auto flex flex-col items-center">
        <div className="font-fontSemi text-center">{title}</div>
        {/* Comments and Testimonies */}
        <div className="pt-12 pb-20 grid lg:grid-cols-3 md:grid-cols-2 gap-7 font-fontLight">
          {Testimony.map((testi, i) => (
            <div key={i} className="border rounded-xl px-7 py-5 bg-[#F7FFF3]">
              <div className="flex pb-3">
                <div>
                  <img src={Image1} alt="person" />
                </div>
                <div className="px-3">
                  <p className="text-headcol text-lg font-fontReg">
                    {testi.name}
                  </p>
                  <p className="text-xs font-fontLight text-[#4F4F4F]">
                    {testi.date}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-headcol text-sm font-fontLight">
                  {testi.testimony}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="">{link}</div>
      </div>
    </div>
  );
};

export default Testimonials;
