import "./ArticleCard.css";

export const ArticleCard = ({ img, title, abstract, byline, published_date }) => {
  return (
    <section className="article" >
      <img className="article-img" src={img} />
      <h2>{title}</h2>
      {/* <p>{abstract}</p> */}
      <div className="article-details" >
        <p>{byline}</p>
        <p>{published_date}</p>
      </div>
    </section>
  );
};
