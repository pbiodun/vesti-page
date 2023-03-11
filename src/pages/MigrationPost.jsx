import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Post from "../components/Post";

const MigrationPost = () => {
  const [data, setData] = useState(null);
  let { postId } = useParams();
  const getPost = useCallback(async () => {
    try {
      const response = (
        await axios.get(`https://www.wevesti.com/wp-json/wp/v2/posts/${postId}`)
      ).data;
      console.log("post data", response);
      setData(response);
    } catch (error) {
      return error;
    }
  }, [postId]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  const PostComp = () => {
    const { title, content } = data;
    const { rendered: renderedPostTitle } = title;
    const { rendered: renderedContent } = content;
    return <Post title={renderedPostTitle} content={renderedContent} />;
  };

  return <div>{data && <PostComp />}</div>;
};

export default MigrationPost;
