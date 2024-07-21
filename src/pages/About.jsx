import batmanImage from "../assets/images/about-cover.webp";

function About() {
  return (
    <div className="max-w-7xl mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-md my-6">
      <header className="mb-4">
        <h1 className="text-yellow-400 text-3xl font-bold mb-2">
          About Batman News
        </h1>
      </header>
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <img
          src={batmanImage}
          alt="Batman Coding"
          className="w-full lg:w-1/2 h-auto object-cover rounded-lg lg:mr-6 mb-6 lg:mb-0 my-16"
        />
        <article className="text-gray-300 leading-loose lg:w-1/2">
          <p className="mb-8 text-xl">
            Welcome to Batman News, your ultimate source for all things Batman!
            Our mission is to bring you the latest updates, intriguing stories,
            and comprehensive insights into the world of Gotham's Dark Knight.
            From gadgets and allies to his rigorous training routines, we cover
            every aspect of Batman's life.
          </p>
          <p className="mb-8 text-xl">
            Our dedicated team of writers and Batman enthusiasts work tirelessly
            to deliver high-quality content that resonates with fans around the
            globe. Whether you're a longtime admirer of the Caped Crusader or
            new to the Bat-Family, there's something here for everyone.
          </p>
          <p className="mb-8 text-xl">
            Stay tuned for exclusive interviews, detailed articles, and
            up-to-date news on Batman's adventures. Join us as we delve into the
            lore of Gotham City and explore the many facets of Batman's legacy.
          </p>
        </article>
      </div>
    </div>
  );
}

export default About;
