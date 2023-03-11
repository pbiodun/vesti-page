const Post = ({ title, content }) => {
  return (
    <>
      <div className="w-full">
        <div className="container mx-auto py-40">
          <h1
            className="text-3xl"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </>
  );
};

export default Post;
