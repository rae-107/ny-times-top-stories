import "./Header.css";

export const Header = ({ setSection }) => {
  return (
    <nav>
      <h1>The New York Times</h1>
      <h2>Top Stories</h2>
      <div className="sub-topics">
        <button onClick={() => setSection("arts")}>Arts</button>
        <button onClick={() => setSection("automobiles")}>Automobiles</button>
        <button onClick={() => setSection("books")}>Books</button>
        <button onClick={() => setSection("business")}>Business</button>
        <button onClick={() => setSection("fashion")}>Fashion</button>
        <button onClick={() => setSection("food")}>Food</button>
        <button onClick={() => setSection("health")}>Health</button>
        <button onClick={() => setSection("home")}>Home</button>
        <button onClick={() => setSection("insider")}>Insider</button>
        <button onClick={() => setSection("magazine")}>Magazine</button>
        <button onClick={() => setSection("movies")}>Movies</button>
        <button onClick={() => setSection("nyregion")}>NY Region</button>
        <button onClick={() => setSection("obituaries")}>Obituaries</button>
        <button onClick={() => setSection("opinion")}>Opinion</button>
        <button onClick={() => setSection("politics")}>Politics</button>
        <button onClick={() => setSection("realestate")}>Real Estate</button>
        <button onClick={() => setSection("science")}>Science</button>
        <button onClick={() => setSection("sports")}>Sports</button>
        <button onClick={() => setSection("sundayreview")}>Sunday Review</button>
        <button onClick={() => setSection("technology")}>Technology</button>
        <button onClick={() => setSection("theater")}>Theater</button>
        <button onClick={() => setSection("t-magazine")}>T Magazine</button>
        <button onClick={() => setSection("travel")}>Travel</button>
        <button onClick={() => setSection("upshot")}>Up Shot</button>
        <button onClick={() => setSection("us")}>US</button>
        <button onClick={() => setSection("world")}>World</button>
        </div>
    </nav>
  );
};
