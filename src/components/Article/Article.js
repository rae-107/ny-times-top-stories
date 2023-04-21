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
  let articleCaption;

  if (article.multimedia) {
    articleImg = article.multimedia[0].url;
    articleCaption = article.multimedia[0].caption;
  } else {
    articleImg = "/assets/no-photos.png";
  }

  return (
    <>
      {loadingData && <h1>-- LOADING --</h1>}
      {!loadingData && (
        <section className="article-container">
          <Header setSection={setSection} />
          <div className="large-article-container">
            <div className="details">
              <h2 className="large-article-title">
                <em>{article.title}</em>
              </h2>
              <p>{article.abstract}</p>
              <p>{article.published_date}</p>
            </div>
            <div className="img-container">
              <img className="large-article-img" alt={article.title} src={articleImg} />
              {articleCaption && <p className="article-caption">* {articleCaption}</p>}
            </div>
            <p>{article.byline}</p>
            <a className="article-url" target="_blank" href={article.url}>
              See Full Article Here
            </a>
          </div>
        </section>
      )}
    </>
  );
};
