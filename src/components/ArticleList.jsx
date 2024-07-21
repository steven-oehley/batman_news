import ArticleCard from "./ArticleCard";

function ArticleList({ articles, isLoading }) {
  return (
    <section className="bg-gray-900 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {!isLoading &&
        articles?.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
    </section>
  );
}
export default ArticleList;
