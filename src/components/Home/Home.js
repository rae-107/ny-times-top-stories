import { ArticleCard } from "../ArticleCard/ArticleCard";
import { Header } from "../Header/Header";
import "./Home.css";

export const Home = ({ setSection, stories }) => {
  console.log(stories)
  const storyCards = stories.map((story, index) => {
    console.log(story.title, story.multimedia)
    if(story.multimedia) {
      return <ArticleCard
        key={index}
        img={story.multimedia[0].url}
        title={story.title}
        abstract={story.abstract}
        byline={story.byline}
        published_date={story.published_date}
      />;
    } else {
      return <ArticleCard
      key={index}
      img={'/assets/no-photos.png'}
      title={story.title}
      abstract={story.abstract}
      byline={story.byline}
      published_date={story.published_date}
    />;
    }
  });

  return (
    <main>
      <Header setSection={setSection} />
      <section className="articles-container">{storyCards}</section>
    </main>
  );
};
