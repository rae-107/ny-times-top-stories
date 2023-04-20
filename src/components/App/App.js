import { Routes, Route } from "react-router-dom";
import { Article } from "../Article/Article";
import { getStories } from "../../apiCalls";
import { useEffect, useState } from "react";
import { Home } from "../Home/Home";
import "./App.css";

export const App = () => {
  const [stories, setStories] = useState([]);
  const [numResults, setNumResults] = useState(0);
  const [section, setSection] = useState("home");
  const [loadingData, setLoadingData] = useState(true);
  // const [error, setError] = useState('')

  const fetchData = async (path) => {
    const data = await getStories(path);
    setStories(data.results);
    setNumResults(data.num_results);
    setLoadingData(false);
  };

  useEffect(() => {
    fetchData(section);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            setSection={setSection}
            stories={stories}
            fetchData={fetchData}
            section={section}
          />
        }
      />
      <Route
        path="/:subTopic"
        element={
          <Home
            setSection={setSection}
            stories={stories}
            fetchData={fetchData}
            section={section}
          />
        }
      />
      <Route
        path="/:subTopic/:id"
        element={
          <Article
            stories={stories}
            fetchData={fetchData}
            loadingData={loadingData}
            section={section}
            setSection={setSection}
          />
        }
      />
    </Routes>
  );
};
