import "./Article.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../Header/Header";

export const Article = ({
  stories,
  fetchData,
  loadingData,
  section,
  setSection,
}) => {
  const { subTopic, id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    if (subTopic) {
      fetchData(subTopic);
    } else {
      fetchData(section);
    }
    if (!loadingData) {
      setArticle(stories[id]);
    }
  }, [loadingData]);

  let articleImg;

  if (article.multimedia) {
    articleImg = article.multimedia[0].url;
  } else {
    articleImg = "/assets/no-photos.png";
  }

  return (
    <>
      {loadingData && <h1>-- LOADING --</h1>}
      {!loadingData && (
        <section className="article-container">
          <Header setSection={setSection} />
          <div className="large-article-container" >
            <div className="details" >
              <h2 className="large-article-title"><em>{article.title}</em></h2>
              <p>{article.abstract}</p>
            </div>
            <img className="large-article-img" src={articleImg} />
            <p>{article.byline}</p>
            <p>{article.published_date}</p>
            <a className="article-url" href={article.url}>See Full Article Here</a>
          </div>
        </section>
      )}
    </>
  );
};
