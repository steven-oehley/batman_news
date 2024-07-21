import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { imageMap } from "../data/imageData";

function ArticleCard({ article }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md flex flex-col justify-items-center">
      <img
        src={imageMap[article.id]}
        alt={article.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <article className="mt-4">
        <header>
          <h2 className="text-yellow-400 text-2xl font-bold">
            {article.title}
          </h2>
        </header>
        <p className="text-gray-300 mt-2">{article.preview}</p>
        <Link
          to={`/article/${article.id}`}
          className="block text-left text-yellow-500 mt-4 mb-2 hover:text-yellow-200 hover:underline"
        >
          Read More...
        </Link>
      </article>
    </div>
  );
}
export default ArticleCard;
