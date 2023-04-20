import './App.css';
import { getStories } from "../../apiCalls";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Article } from "../Article/Article"

export const App = () => {
  const [stories, setStories] = useState([]);
  const [numResults, setNumResults] = useState(0);
  const [section, setSection] = useState("home");
  const [currentArticle, setCurrentArticle] = useState({})
  // const [error, setError] = useState('')

  const fetchData = async (path) => {
    const data = await getStories(path);
    setStories(data.results);
    setNumResults(data.num_results);
  };

  useEffect(() => {
    fetchData(section);
    console.log(stories, numResults, section);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home setCurrentArticle={setCurrentArticle} setSection={setSection} stories={stories} fetchData={fetchData} section={section} />} />
      <Route path="/:subTopic" element={<Home setCurrentArticle={setCurrentArticle} setSection={setSection} stories={stories} fetchData={fetchData} section={section}  />} />

    </Routes>
  );
};
