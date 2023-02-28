import Image1 from "../assets/images/Avatar1.png";

const Testimonials = ({ title, link }) => {
  return (
    <div className="w-full pt-24">
      <div className="container mx-auto flex flex-col items-center">
        <div className="font-fontSemi">{title}</div>
        {/* Comments and Testimonies */}
        <div className="pt-12 pb-20 grid lg:grid-cols-3 md:grid-cols-2 gap-7 font-fontLight">
          <div className="border rounded-xl px-7 py-5 bg-[#F7FFF3]">
            <div className="flex pb-3">
              <div>
                <img src={Image1} alt="person" />
              </div>
              <div className="px-3">
                <p className="text-headcol text-lg font-fontReg">
                  Joshua Shittabey
                </p>
                <p className="text-xs font-extralight text-[#4F4F4F]">
                  11 July, 2022
                </p>
              </div>
            </div>
            <div>
              <p className="text-headcol text-sm font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat recusandae reprehenderit ratione modi expedita
                laboriosam. Accusantium laboriosam excepturi aut porro.
              </p>
            </div>
          </div>
          <div className="border rounded-xl px-7 py-5 bg-[#F6F7FF]">
            <div className="flex pb-3">
              <div>
                <img src={Image1} alt="person" />
              </div>
              <div className="px-3">
                <p className="text-headcol text-lg font-medium">
                  Joshua Shittabey
                </p>
                <p className="text-[#4F4F4F] text-xs font-extralight">
                  11 July, 2022
                </p>
              </div>
            </div>
            <div>
              <p className="text-headcol text-sm font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat recusandae reprehenderit ratione modi expedita
                laboriosam. Accusantium laboriosam excepturi aut porro.
              </p>
            </div>
          </div>
          <div className="border rounded-xl px-7 py-5 bg-[#FBF3FF]">
            <div className="flex pb-3">
              <div>
                <img src={Image1} alt="person" />
              </div>
              <div className="px-3">
                <p className="text-headcol text-lg font-medium">
                  Joshua Shittabey
                </p>
                <p className="text-[#4F4F4F] text-xs font-extralight">
                  11 July, 2022
                </p>
              </div>
            </div>
            <div>
              <p className="text-headcol text-sm font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat recusandae reprehenderit ratione modi expedita
                laboriosam. Accusantium laboriosam excepturi aut porro.
              </p>
            </div>
          </div>
          <div className="border rounded-xl px-7 py-5 bg-[#F6F7FF]">
            <div className="flex pb-3">
              <div>
                <img src={Image1} alt="person" />
              </div>
              <div className="px-3">
                <p className="text-headcol text-lg font-medium">
                  Joshua Shittabey
                </p>
                <p className="text-[#4F4F4F] text-xs font-extralight">
                  11 July, 2022
                </p>
              </div>
            </div>
            <div>
              <p className="text-headcol text-sm font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat recusandae reprehenderit ratione modi expedita
                laboriosam. Accusantium laboriosam excepturi aut porro.
              </p>
            </div>
          </div>
          <div className="border rounded-xl px-7 py-5 bg-[#FBF3FF]">
            <div className="flex pb-3">
              <div>
                <img src={Image1} alt="person" />
              </div>
              <div className="px-3">
                <p className="text-headcol text-lg font-medium">
                  Joshua Shittabey
                </p>
                <p className="text-[#4F4F4F] text-xs font-extralight">
                  11 July, 2022
                </p>
              </div>
            </div>
            <div>
              <p className="text-headcol text-sm font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat recusandae reprehenderit ratione modi expedita
                laboriosam. Accusantium laboriosam excepturi aut porro.
              </p>
            </div>
          </div>
          <div className="border rounded-xl px-7 py-5 bg-[#F7FFF3]">
            <div className="flex pb-3">
              <div>
                <img src={Image1} alt="person" />
              </div>
              <div className="px-3">
                <p className="text-headcol text-lg font-medium">
                  Joshua Shittabey
                </p>
                <p className="text-[#4F4F4F] text-xs font-extralight">
                  11 July, 2022
                </p>
              </div>
            </div>
            <div>
              <p className="text-headcol text-sm font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat recusandae reprehenderit ratione modi expedita
                laboriosam. Accusantium laboriosam excepturi aut porro.
              </p>
            </div>
          </div>
        </div>
        <div className="">{link}</div>
      </div>
    </div>
  );
};

export default Testimonials;
