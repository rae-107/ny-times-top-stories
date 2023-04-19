import { Header } from "../Header/Header"
import './Home.css'

export const Home = ({ setSection }) => {
  return (
    <main>
      <Header setSection={setSection} />
    </main>
  )
}