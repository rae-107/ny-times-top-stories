import "./Header.css";

export const Header = ({ setSection }) => {
  return (
    <nav>
      <h1>The New York Times</h1>
      <h2>Top Stories</h2>
      <ul>
        <li><a onClick={setSection("arts")}></a>Arts</li>
        <li><a onClick={setSection("automobiles")}>Automobiles</a></li>
        <li><a onClick={setSection("books")}></a>Books</li>
        <li><a onClick={setSection("business")}></a>Business</li>
        <li><a onClick={setSection("fashion")}></a>Fashion</li>
        <li><a onClick={setSection("food")}></a>Food</li>
        <li><a onClick={setSection("health")}></a>Health</li>
        <li><a onClick={setSection("home")}></a>Home</li>
        <li><a onClick={setSection("insider")}></a>Insider</li>
        <li><a onClick={setSection("magazine")}></a>Magazine</li>
        <li><a onClick={setSection("movies")}></a>Movies</li>
        <li><a onClick={setSection("nyregion")}></a>NY Region</li>
        <li><a onClick={setSection("obituaries")}></a>Obituaries</li>
        <li><a onClick={setSection("opinion")}></a>Opinion</li>
        <li><a onClick={setSection("politics")}></a>Politics</li>
        <li><a onClick={setSection("realestate")}></a>Real Estate</li>
        <li><a onClick={setSection("science")}></a>Science</li>
        <li><a onClick={setSection("sports")}></a>Sports</li>
        <li><a onClick={setSection("sundayreview")}></a>Sunday Review</li>
        <li><a onClick={setSection("technology")}></a>Technology</li>
        <li><a onClick={setSection("theater")}></a>Theater</li>
        <li><a onClick={setSection("t-magazine")}></a>T Magazine</li>
        <li><a onClick={setSection("travel")}></a>Travel</li>
        <li><a onClick={setSection("upshot")}></a>Up Shot</li>
        <li><a onClick={setSection("us")}></a>US</li>
        <li><a onClick={setSection("world")}></a>World</li>
      </ul>
    </nav>
  );
};
