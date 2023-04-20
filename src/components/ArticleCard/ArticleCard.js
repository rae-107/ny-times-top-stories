import "./ArticleCard.css";
import { Link } from 'react-router-dom'

export const ArticleCard = ({ id, stories, setCurrentArticle, img, subTopic, title, byline, published_date }) => {
  return (
    <Link onClick={() => setCurrentArticle(stories[id]) } style={{ textDecoration: 'none' }} to={`/${subTopic}/${id}`}>
    <section className="article" >
      <img className="article-img" src={img} />
      <h2>{title}</h2>
      <div className="article-details" >
        <p>{byline}</p>
        <p>{published_date}</p>
      </div>
    </section>
    </Link>
  );
};
