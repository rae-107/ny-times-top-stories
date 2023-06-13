import "./ArticleCard.css";
import { useNavigate } from "react-router-dom";

export const ArticleCard = ({
  id,
  img,
  subTopic,
  title,
  byline,
  published_date,
}) => {
  const navigate = useNavigate();
  return (
    <section onClick={() => navigate(`/${subTopic}/${id}`)} className="article">
      <img className="article-img" alt={`Click to read ${title} article`} src={img} />
      <h2>{title}</h2>
      <div className="article-details">
        <p>{published_date}</p>
        <p>{byline}</p>
      </div>
    </section>
  );
};
