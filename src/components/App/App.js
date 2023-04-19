// import './App.css';
import { getStories } from "../../apiCalls";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";

export const App = () => {
  const [stories, setStories] = useState([]);
  const [numResults, setNumResults] = useState(0);
  const [section, setSection] = useState("home");
  const [error, setError] = useState('')

  const fetchData = async (path) => {
    const data = await getStories(path);
    console.log(data)

    setStories(data.results);
    setNumResults(data.num_results);
    
  };

  useEffect(() => {
    fetchData(section);
    console.log(stories, numResults, section);
  }, [section]);

  return (
    <Routes>
      <Route path="/" element={<Home stories={stories} setSection={setSection} />} />
    </Routes>
  );
};
