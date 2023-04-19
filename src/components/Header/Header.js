import "./Header.css";

export const Header = ({ setSection }) => {
  return (
    <nav>
      <h1>The New York Times</h1>
      <h2>Top Stories</h2>
      <ul>
        <li><button onClick={() => setSection("arts")}>Arts</button></li>
        <li><button onClick={() => setSection("automobiles")}>Automobiles</button></li>
        <li><button onClick={() => setSection("books")}>Books</button></li>
        <li><button onClick={() => setSection("business")}>Business</button></li>
        <li><button onClick={() => setSection("fashion")}>Fashion</button></li>
        <li><button onClick={() => setSection("food")}>Food</button></li>
        <li><button onClick={() => setSection("health")}>Health</button></li>
        <li><button onClick={() => setSection("home")}>Home</button></li>
        <li><button onClick={() => setSection("insider")}>Insider</button></li>
        <li><button onClick={() => setSection("magazine")}>Magazine</button></li>
        <li><button onClick={() => setSection("movies")}>Movies</button></li>
        <li><button onClick={() => setSection("nyregion")}>NY Region</button></li>
        <li><button onClick={() => setSection("obituaries")}>Obituaries</button></li>
        <li><button onClick={() => setSection("opinion")}>Opinion</button></li>
        <li><button onClick={() => setSection("politics")}>Politics</button></li>
        <li><button onClick={() => setSection("realestate")}>Real Estate</button></li>
        <li><button onClick={() => setSection("science")}>Science</button></li>
        <li><button onClick={() => setSection("sports")}>Sports</button></li>
        <li><button onClick={() => setSection("sundayreview")}>Sunday Review</button></li>
        <li><button onClick={() => setSection("technology")}>Technology</button></li>
        <li><button onClick={() => setSection("theater")}>Theater</button></li>
        <li><button onClick={() => setSection("t-magazine")}>T Magazine</button></li>
        <li><button onClick={() => setSection("travel")}>Travel</button></li>
        <li><button onClick={() => setSection("upshot")}>Up Shot</button></li>
        <li><button onClick={() => setSection("us")}>US</button></li>
        <li><button onClick={() => setSection("world")}>World</button></li>
      </ul>
    </nav>
  );
};
