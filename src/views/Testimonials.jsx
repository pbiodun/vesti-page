import Image1 from "../assets/images/Avatar1.png";

const Testimonials = () => {
  return (
    <div className="w-full pt-24">
      <div className="container mx-auto">
        <div className="">
          <h1 className="text-3xl text-headcol font-semibold text-center">
            What our users are <span className="text-vestigreen">saying</span>
          </h1>
          <p className="text-center text-[#2B5219] text-lg font-medium">
            Think lifting a feather is effortless? Try payment with Vesti.
          </p>
        </div>
        {/* Comments and Testimonies */}
        <div className="pb-24 pt-12 grid lg:grid-cols-3 md:grid-cols-2 gap-7">
          <div className="border rounded-xl px-7 py-5">
            <div className="flex pb-3">
              <div>
                <img src={Image1} alt="person" />
              </div>
              <div className="px-3">
                <p className="text-headcol text-lg font-medium">
                  Joshua Shittabey
                </p>
                <p className="text-headcol text-xs font-extralight">
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
          <div className="border rounded-xl px-7 py-5">
            <div className="flex pb-3">
              <div>
                <img src={Image1} alt="person" />
              </div>
              <div className="px-3">
                <p className="text-headcol text-lg font-medium">
                  Joshua Shittabey
                </p>
                <p className="text-headcol text-xs font-extralight">
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
          <div className="border rounded-xl px-7 py-5">
            <div className="flex pb-3">
              <div>
                <img src={Image1} alt="person" />
              </div>
              <div className="px-3">
                <p className="text-headcol text-lg font-medium">
                  Joshua Shittabey
                </p>
                <p className="text-headcol text-xs font-extralight">
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
          <div className="border rounded-xl px-7 py-5">
            <div className="flex pb-3">
              <div>
                <img src={Image1} alt="person" />
              </div>
              <div className="px-3">
                <p className="text-headcol text-lg font-medium">
                  Joshua Shittabey
                </p>
                <p className="text-headcol text-xs font-extralight">
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
          <div className="border rounded-xl px-7 py-5">
            <div className="flex pb-3">
              <div>
                <img src={Image1} alt="person" />
              </div>
              <div className="px-3">
                <p className="text-headcol text-lg font-medium">
                  Joshua Shittabey
                </p>
                <p className="text-headcol text-xs font-extralight">
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
          <div className="border rounded-xl px-7 py-5">
            <div className="flex pb-3">
              <div>
                <img src={Image1} alt="person" />
              </div>
              <div className="px-3">
                <p className="text-headcol text-lg font-medium">
                  Joshua Shittabey
                </p>
                <p className="text-headcol text-xs font-extralight">
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
      </div>
    </div>
  );
};

export default Testimonials;
