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

  const fetchData = async () => {
    const data = await getStories();
    console.log(data)
    if (typeof data === 'string') {
      setError(data)
    } else {
      setStories(data.results);
      setNumResults(data.num_results);
      setSection(data.section);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(stories, numResults, section);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home setSection={setSection} />} />
    </Routes>
  );
};
