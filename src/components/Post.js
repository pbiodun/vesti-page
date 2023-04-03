import { useState } from "react";
import { TbMessageShare } from "react-icons/tb";
// import { CopyToClipboard } from "react-copy-to-clipboard";

const Post = ({ title, content }) => {
  // const url = window.location.href;

  const [copyUrl, setCopyUrl] = useState(false);

  function copyURL() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopyUrl(true);
    alert("Link copied");
  }

  return (
    <>
      <div className="w-full">
        <div className="container lg:w-[80%] mx-auto py-40">
          <h1
            className="text-3xl font-fontReg"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          <div
            className="font-fontLight text-justify py-4 leading-[30px]"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div
            onClick={copyURL}
            className="flex gap-x-2 items-center text-secondary hover:underline hover:text-headcol text-base cursor-pointer font-fontReg hover:font-fontSemi"
          >
            <TbMessageShare size="1.4rem" />
            <p>Share this post</p>
            {/* {copyUrl} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
