import { ArticleCard } from "../ArticleCard/ArticleCard";
import { Header } from "../Header/Header";
import { useParams } from "react-router-dom";
import "./Home.css";
import { useEffect } from "react";

export const Home = ({ setSection, stories, fetchData, section }) => {
  const { subTopic } = useParams();

  if (subTopic) {
    setSection(subTopic);
  }

  useEffect(() => {
    if (subTopic) {
      fetchData(subTopic);
    } else {
      fetchData(section);
    }
  }, [section]);

  const storyCards = stories.map((story, index) => {
    if (story.multimedia) {
      return (
        <ArticleCard
          key={index}
          id={index}
          img={story.multimedia[0].url}
          subTopic={subTopic}
          title={story.title}
          byline={story.byline}
          published_date={story.published_date}
        />
      );
    } else {
      return (
        <ArticleCard
          key={index}
          id={index}
          img={"/assets/no-photos.png"}
          subTopic={subTopic}
          title={story.title}
          byline={story.byline}
          published_date={story.published_date}
        />
      );
    }
  });

  return (
    <main>
      <Header setSection={setSection} />
      <section className="articles-container">{storyCards}</section>
    </main>
  );
};
