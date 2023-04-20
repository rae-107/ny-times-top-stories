import "./Header.css";
import { useNavigate } from 'react-router-dom'

export const Header = ({ setSection }) => {
  const navigate = useNavigate();
  return (
    <nav>
      <h1>The New York Times</h1>
      <h2>Top Stories</h2>
      <div className="sub-topics">
        <button onClick={() => {
          setSection("arts")
          navigate('/arts')
      }}>Arts</button>
        <button onClick={() => {
          setSection("automobiles")
          navigate('/automobiles')
      }}>Automobiles</button>
        <button onClick={() => {
          setSection("books")
          navigate('/books')
      }}>Books</button>
        <button onClick={() => {
          setSection("business")
          navigate('/business')
      }}>Business</button>
        <button onClick={() => {
          setSection("fashion")
          navigate('/fashion')
      }}>Fashion</button>
        <button onClick={() => {
          setSection("food")
          navigate('/food')
      }}>Food</button>
        <button onClick={() => {
          setSection("health")
          navigate('/health')
      }}>Health</button>
        <button onClick={() => {
          setSection("home")
          navigate('/')
      }}>Home</button>
        <button onClick={() => {
          setSection("insider")
          navigate('/insider')
      }}>Insider</button>
        <button onClick={() => {
          setSection("magazine")
          navigate('/magazine')
      }}>Magazine</button>
        <button onClick={() => {
          setSection("movies")
          navigate('/movies')
      }}>Movies</button>
        <button onClick={() => {
          setSection("nyregion")
          navigate('/nyregion')
      }}>NY Region</button>
        <button onClick={() => {
          setSection("obituaries")
          navigate('/obituaries')
      }}>Obituaries</button>
        <button onClick={() => {
          setSection("opinion")
          navigate('/opinion')
      }}>Opinion</button>
        <button onClick={() => {
          setSection("politics")
          navigate('/politics')
      }}>Politics</button>
        <button onClick={() => {
          setSection("realestate")
          navigate('/realestate')
      }}>Real Estate</button>
        <button onClick={() => {
          setSection("science")
          navigate('/science')
      }}>Science</button>
        <button onClick={() => {
          setSection("sports")
          navigate('/sports')
      }}>Sports</button>
        <button onClick={() => {
          setSection("sundayreview")
          navigate('/sundayreview')
      }}>Sunday Review</button>
        <button onClick={() => {
          setSection("technology")
          navigate('/technology')
      }}>Technology</button>
        <button onClick={() => {
          setSection("theater")
          navigate('/theater')
      }}>Theater</button>
        <button onClick={() => {
          setSection("t-magazine")
          navigate('/t-magazine')
      }}>T Magazine</button>
        <button onClick={() => {
          setSection("travel")
          navigate('/travel')
      }}>Travel</button>
        <button onClick={() => {
          setSection("upshot")
          navigate('/upshot')
      }}>Up Shot</button>
        <button onClick={() => {
          setSection("us")
          navigate('/us')
      }}>US</button>
        <button onClick={() => {
          setSection("world")
          navigate('/world')
      }}>World</button>
        </div>
    </nav>
  );
};
