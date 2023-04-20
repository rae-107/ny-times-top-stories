import './Article.css'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from '../Header/Header';

export const Article = ({ stories, fetchData, loadingData, section, setSection }) => {
  const { subTopic, id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    if(subTopic) {
      fetchData(subTopic)
    } else {
      fetchData(section)
    }
    if(!loadingData) {
      setArticle(stories[id]);
    }
  }, [loadingData])

  let articleImg 

  if (article.multimedia) {
    articleImg = article.multimedia[0].url
  } else {
    articleImg = '/assets/no-photos.png'
  }

  return (
    <>
      {loadingData && <h1>-- LOADING --</h1>}
      {!loadingData &&
        <section className='article-container'>
          <Header setSection={setSection}  />
          <img className='large-article-img' src={articleImg} />
          <h2>{article.title}</h2>
          <p>{article.section}</p>
          <p>{article.byline}</p>
          <p>{article.published_date}</p>
          <p>{article.abstract}</p>
          <a href={article.url} >See full article</a>
        </section>      
      }
    </>
  )
}