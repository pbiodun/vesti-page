import axios from "axios";
import CardAd from "../views/CardAd";
import Mfries from "../components/Mfries";
// import MigrationCard from "../components/MigrationCard";
import VestiExtras from "../components/VestiExtras";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Phones from "../assets/images/phones.png";
import Loader from "../assets/logo-icons/loader.svg";
import Testimonials from "../views/Testimonials";
import Featured from "../views/Featured";
import { useEffect, useState } from "react";
import MigrationCard from "../components/MigrationCard";

const MigrationFries = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getTutorial() {
    try {
      const data = (await axios.get("https://wevesti.com/wp-json/wp/v2/posts"))
        .data;
      setPosts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // call function to fetch all fries
    getTutorial();
  }, []);

  return (
    <div className="font-fontReg">
      <VestiExtras
        title="Migration Fries"
        date="Want to move overseas in 2023 ? easily see opportunities and read how to start your migration journey."
        addStyle="border-b-8 border-[#67A948]"
        link1="ALL"
        link2="JOBS"
        link3="NEWS"
        link4="SCHOLARSHIPS"
        path1="/migration-fries"
        path2="#"
        path3="#"
        path4="/scholarships"
      />

      <div>
        <Mfries
          title={
            <h1 className="text-[#14290A] text-2xl font-fontReg pb-2">
              Migration Fries <span className="text-[#67A948]">All</span>
            </h1>
          }
          heading="Think lifting a feather is effortless? Try payment with Vesti."
        />
        {loading && (
          <div className="text-center pt-10 text-[#4e984e] flex justify-center items-center">
            <img
              class="animate-spin h-5 w-5 mr-3"
              viewBox="0 0 24 24"
              src={Loader}
              alt="loading"
            />
            <p className="font-fontLight">loading your fries...</p>
          </div>
        )}
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 pb-8">
        {posts &&
          posts.map((post) => {
            // console.log(post);
            const { date, title, excerpt, id } = post;
            const { rendered: renderedTitle } = title;
            const { rendered: renderedExcerpt } = excerpt;

            return (
              <MigrationCard
                date={date.split("T")[0]}
                title={renderedTitle}
                // desc={renderedExcerpt.split("\n")[0]}
                desc={renderedExcerpt.substring(0, 200) + "..."}
                link={`/migration-post/${id}`}
              />
            );
          })}
      </div>

      <CardAd
        addStyle="flex flex-col lg:flex-row lg:justify-between items-center bg-[#3E6F26] rounded-[30px]"
        leftSide={
          <div className="p-8 lg:pl-16">
            <div className="rounded-[30px] bg-[#060E42] w-[171px]">
              <p className="text-xs text-white font-medium text-center mb-4 p-1">
                AVAILABLE TO REQUEST
              </p>
            </div>
            <h1 className="text-white text-4xl w-[360px]">
              Your Comfort is Guaranteed With The Vesti GlobalGeng Card
            </h1>
            <p className="text-base font-extralight text-white pt-6 w-[90%]">
              Vesti gives humans the power to move overseas to 110 Countries.
            </p>
            <div className="pt-[20px] flex items-center text-[#ffffff] text-xl">
              <Link to="#">Learn more</Link>
              <BsArrowUpRight />
            </div>
          </div>
        }
        image={Phones}
      />

      <Testimonials
        title={
          <>
            <h1 className="text-3xl text-headcol font-semibold text-center">
              Read japa <span className="text-vestigreen">stories</span>
            </h1>
            <p className="text-center text-[#2B5219] text-lg font-fontLight">
              Read japa stories and testimonials from our selected users
            </p>
          </>
        }
        link={
          <div className="flex items-center text-vestigreen font-semibold hover:text-headcol">
            <Link to="#">Read more stories</Link>
            <BsArrowUpRight />
          </div>
        }
      />
      <div className="pt-20">
        <Featured />
      </div>
    </div>
  );
};

export default MigrationFries;
