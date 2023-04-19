import "./Header.css";

export const Header = ({ setSection }) => {
  return (
    <nav>
      <h1>The New York Times</h1>
      <h2>Top Stories</h2>
      <ul>
        <li><a onClick={() => setSection("arts")}>Arts</a></li>
        <li><a onClick={() => setSection("automobiles")}>Automobiles</a></li>
        <li><a onClick={() => setSection("books")}>Books</a></li>
        <li><a onClick={() => setSection("business")}>Business</a></li>
        <li><a onClick={() => setSection("fashion")}>Fashion</a></li>
        <li><a onClick={() => setSection("food")}>Food</a></li>
        <li><a onClick={() => setSection("health")}>Health</a></li>
        <li><a onClick={() => setSection("home")}>Home</a></li>
        <li><a onClick={() => setSection("insider")}>Insider</a></li>
        <li><a onClick={() => setSection("magazine")}>Magazine</a></li>
        <li><a onClick={() => setSection("movies")}>Movies</a></li>
        <li><a onClick={() => setSection("nyregion")}>NY Region</a></li>
        <li><a onClick={() => setSection("obituaries")}>Obituaries</a></li>
        <li><a onClick={() => setSection("opinion")}>Opinion</a></li>
        <li><a onClick={() => setSection("politics")}>Politics</a></li>
        <li><a onClick={() => setSection("realestate")}>Real Estate</a></li>
        <li><a onClick={() => setSection("science")}>Science</a></li>
        <li><a onClick={() => setSection("sports")}>Sports</a></li>
        <li><a onClick={() => setSection("sundayreview")}>Sunday Review</a></li>
        <li><a onClick={() => setSection("technology")}>Technology</a></li>
        <li><a onClick={() => setSection("theater")}>Theater</a></li>
        <li><a onClick={() => setSection("t-magazine")}>T Magazine</a></li>
        <li><a onClick={() => setSection("travel")}>Travel</a></li>
        <li><a onClick={() => setSection("upshot")}>Up Shot</a></li>
        <li><a onClick={() => setSection("us")}>US</a></li>
        <li><a onClick={() => setSection("world")}>World</a></li>
      </ul>
    </nav>
  );
};
