import { ArticleCard } from "../ArticleCard/ArticleCard"
import { Header } from "../Header/Header"
import './Home.css'

export const Home = ({ setSection, stories }) => {
  const storyCards = stories.map((story) => <ArticleCard img={story.multimedia[2].url} title={story.title} abstract={story.abstract} byline={story.byline} published_date={story.published_date} />)

  return (
    <main>
      <Header setSection={setSection} />
      <section className="articles-container" >
        {storyCards}
      </section>
    </main>
  )
}