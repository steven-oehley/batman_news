import ArticleList from "../components/ArticleList";

function Home({ articles, isLoading }) {
  return (
    <div className="bg-gray-900">
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-ring loading-lg text-warning"></span>
        </div>
      )}
      {!isLoading && <ArticleList articles={articles} />}
    </div>
  );
}
export default Home;
