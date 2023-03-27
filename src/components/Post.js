const Post = ({ title, content }) => {
  return (
    <>
      <div className="w-full">
        <div className="container lg:w-[80%] mx-auto py-40">
          <h1
            className="text-3xl font-fontReg"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          <div
            className="font-fontLight text-justify pt-4 leading-[30px]"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </>
  );
};

export default Post;
