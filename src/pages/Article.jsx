import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";

import { imageMap } from "../data/imageData";
import errorImage from "../assets/images/error.webp";

function Article({ articles, isLoading }) {
  const history = useHistory();
  //   const params = useParams(); // get access to any route parameters on this page in params object
  // could immediately destructure id from params object as with useParams() you can get multiple parameters
  // name of route paramter dectated by the name in the route path in App.jsx

  //   immediate destructuring of id from params object
  const { id: paramId } = useParams();
  const articleId = parseInt(paramId);
  const article = articles?.find((article) => +article.id === articleId);

  useEffect(() => {
    if (!article && !isLoading) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [article, isLoading, history]);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto bg-gray-800 text-white text-center p-6 rounded-lg shadow-md my-6">
        <img
          src={errorImage}
          alt="joker catches batman"
          className="w-full h-[32rem] object-cover  rounded-lg my-12"
        />
        <p className="text-2xl">Article not found....</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-md my-6">
      <header className="mb-4">
        <h1 className="text-yellow-400 text-3xl font-bold mb-2">
          {article.title}
        </h1>
        <p className="italic text-gray-400">by {article.author}</p>
      </header>
      <img
        src={imageMap[articleId]}
        alt={article.title}
        className="w-full h-96 object-cover  rounded-lg my-12"
      />
      <article className="text-gray-300 leading-loose">
        {article.body.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-8 text-xl ">
            {paragraph}
          </p>
        ))}
      </article>
    </div>
  );
}

export default Article;
