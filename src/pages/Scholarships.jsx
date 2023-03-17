import Mfries from "../components/Mfries";
import VestiExtras from "../components/VestiExtras";
import AppsDownload from "../views/AppsDownload";
import Featured from "../views/Featured";
import Loader from "../assets/logo-icons/loader.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import MigrationCard from "../components/MigrationCard";

const Scholarships = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(null);
  const getPosts = (name, value) => {
    setLoading(true);

    axios
      .get(`https://wevesti.com/wp-json/wp/v2/posts/?categories=${value}`)
      .then((response) => {
        console.log(response.data);
        // setClicked(name);
        setPosts(response.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div>
      <VestiExtras
        title="Migration Fries"
        date="Want to move overseas in 2022 ? easily see opportunities and read how to start your migration journey."
        addStyle="border-b-8 border-[#67A948]"
        link1="ALL"
        link2="JOBS"
        link3="NEWS"
        link4="SCHOLARSHIPS"
        path1="/migration-fries"
        path2="#"
        path3="#"
        path4="/scholarships"
        postFunc={getPosts("", 17)}
      />
      <Mfries
        title={
          <h1 className="text-[#14290A] text-2xl font-fontReg pb-2">
            Check Out <span className="text-[#67A948]">Scholarships</span>
          </h1>
        }
      />
      {loading && (
        <div className="text-center pt-10 text-[#4e984e] flex justify-center items-center">
          <img
            class="animate-spin h-5 w-5 mr-3"
            viewBox="0 0 24 24"
            src={Loader}
            alt="loading"
          />
          <p className="font-fontLight">loading available scholarships...</p>
        </div>
      )}

      {posts &&
        posts.map((post) => {
          console.log("only posts objects", post);
          //   const { date, title, excerpt, id } = post;
          //   const { rendered: renderedTitle } = title;
          //   const { rendered: renderedExcerpt } = excerpt;

          return (
            <MigrationCard
            //   date={date.split("T")[0]}
            //   title={renderedTitle}
            //   desc={renderedExcerpt.substring(0, 200) + "..."}
            //   link={`/migration-post/${}`}
            />
          );
        })}

      <AppsDownload />
      <Featured />
    </div>
  );
};

export default Scholarships;
